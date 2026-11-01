import type { ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import {
    _decode_UnboundedDirectoryString,
} from "../../modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryStringToString } from "../../stringifiers/directoryStringToString.mjs";
import { prepString } from "../../utils/prepString.mjs";
import {
    createSubstringsMatcher,
    type AssertedSubstring,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";
import {
    directoryAssertionPieces,
    directoryFilterPieces,
    matchPreparedString,
    prepareStored,
    type StringPreparer,
} from "./prepareSubstrings.mjs";

const RULE = "caseIgnoreSubstringsMatch";

/** Case-fold, then remove insignificant spaces (clauses 7.2 and 7.6). */
const prepareIgnore: StringPreparer = (raw) => prepString(raw, { caseFold: true });

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseIgnoreSubstringsMatch`.
 *
 * Same partitioning as `caseExactSubstringsMatch`. Upper-case is
 * folded during string preparation (clause 7.2). `control` is
 * ignored. Preparation failure of a stored value is UNDEFINED.
 * An assertion that cannot be prepared throws `ASN1CharactersError`.
 *
 * @param assertion Presented pieces, already prepared and case-folded.
 * @param value Stored directory string.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseIgnoreSubstringsMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = directoryStringToString(_decode_UnboundedDirectoryString(value));
    const prepared = prepareStored(raw, prepareIgnore, flags);
    if (prepared === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, prepared, value, flags);
}

caseIgnoreSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * `caseIgnoreSubstringsMatch` as a `Matcher`. The assertion is a
 * `SubstringAssertion`, or the `strings` of a substrings filter
 * item (directory strings).
 */
export
const caseIgnoreSubstringsMatch: Matcher = createSubstringsMatcher(
    (el) => directoryAssertionPieces(el, prepareIgnore, RULE),
    caseIgnoreSubstringsMatchTyped,
    (items) => directoryFilterPieces(items, prepareIgnore, RULE),
);

export default caseIgnoreSubstringsMatch;
