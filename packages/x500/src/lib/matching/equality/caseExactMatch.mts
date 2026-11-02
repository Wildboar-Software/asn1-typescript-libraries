import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDirectoryString, type DirectoryStringInput } from "../readValue.mjs";
import { approximatelyEqualStrings } from "../approximate.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { stringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_ASSERTION_NORMALIZED,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Prepare the presented directory string once. `prepString` returns
 * `undefined` for a prohibited character or a string that maps to
 * empty. That is an assertion error, not UNDEFINED.
 * `MATCH_FLAG_ASSERTION_NORMALIZED` skips preparation.
 */
function prepareCaseExactAssertion (el: ASN1Element, flags: number): string {
    const raw = readDirectoryString(el);
    if (flags & MATCH_FLAG_ASSERTION_NORMALIZED) {
        return raw;
    }
    const prepared = prepString(raw);
    if (prepared === undefined) {
        throw new ASN1CharactersError(
            "caseExactMatch assertion failed string preparation",
            el,
        );
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.1 `caseExactMatch`.
 *
 * Equality of `UnboundedDirectoryString` / `DirectoryString` after
 * string preparation (clause 7). Case is significant. Insignificant
 * spaces are removed (clause 7.6). Preparation failure of a stored
 * value is UNDEFINED.
 *
 * @param assertion Presented string, already prepared.
 * @param value Stored directory string, or that string already
 *  prepared. `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseExactMatchTyped (
    assertion: string,
    value: DirectoryStringInput,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = readDirectoryString(value);
    const stored = (flags & MATCH_FLAG_VALUE_NORMALIZED) ? raw : prepString(raw);
    if (stored === undefined) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: caseExactMatch: stored value failed string preparation",
            );
        }
        return undefined;
    }
    if (flags & MATCH_FLAG_APPROXIMATE) {
        return approximatelyEqualStrings(assertion, stored);
    }
    return stringsEqual(assertion, stored, flags & MATCH_FLAG_CONSTANT_TIME);
}

caseExactMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `caseExactMatch` as a `Matcher`. An assertion that cannot be
 * prepared throws `ASN1CharactersError`.
 */
export
const caseExactMatch: Matcher = createEqualityMatcher(
    prepareCaseExactAssertion,
    caseExactMatchTyped,
);

export default caseExactMatch;
