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

const RULE = "caseExactSubstringsMatch";

/** Insignificant spaces removed; case is significant (clause 7.6). */
const prepareExact: StringPreparer = (raw) => prepString(raw);

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.3
 * `caseExactSubstringsMatch`.
 *
 * TRUE when the stored `DirectoryString` can be partitioned so the
 * presented `initial` / `any` / `final` pieces match successive
 * portions in order. Pieces do not overlap. Case is significant.
 * Insignificant spaces are removed (clause 7.6). `control` is
 * ignored. Preparation failure of a stored value is UNDEFINED.
 * An assertion that cannot be prepared throws `ASN1CharactersError`.
 *
 * @param assertion Presented pieces, already prepared.
 * @param value Stored directory string.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseExactSubstringsMatchTyped (
    assertion: AssertedSubstring<string>[],
    value: ASN1Element,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = directoryStringToString(_decode_UnboundedDirectoryString(value));
    const prepared = prepareStored(raw, prepareExact, flags);
    if (prepared === undefined) {
        return undefined;
    }
    return matchPreparedString(assertion, prepared, value, flags);
}

caseExactSubstringsMatchTyped satisfies TypedEquationFunction<AssertedSubstring<string>[]>;

/**
 * `caseExactSubstringsMatch` as a `Matcher`. The assertion is a
 * `SubstringAssertion`, or the `strings` of a substrings filter
 * item (directory strings).
 */
export
const caseExactSubstringsMatch: Matcher = createSubstringsMatcher(
    (el) => directoryAssertionPieces(el, prepareExact, RULE),
    caseExactSubstringsMatchTyped,
    (items) => directoryFilterPieces(items, prepareExact, RULE),
);

export default caseExactSubstringsMatch;
