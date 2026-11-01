import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import { readDirectoryString, type DirectoryStringInput } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import { stringsEqual } from "../constantTime.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Prepare and case-fold the presented directory string once.
 * `prepString` returns `undefined` for a prohibited character or a
 * string that maps to empty. That is an assertion error, not UNDEFINED.
 */
function prepareCaseIgnoreAssertion (el: ASN1Element): string {
    const prepared = prepString(readDirectoryString(el), { caseFold: true });
    if (prepared === undefined) {
        throw new ASN1CharactersError(
            "caseIgnoreMatch assertion failed string preparation",
            el,
        );
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.1 `caseIgnoreMatch`.
 *
 * Equality of `UnboundedDirectoryString` / `DirectoryString` after
 * string preparation (clause 7). Case is ignored (upper-case folded
 * as in clause 7.2) and insignificant spaces are removed (clause 7.6).
 * Preparation failure of a stored value is UNDEFINED.
 *
 * @param assertion Presented string, already prepared and case-folded.
 * @param value Stored directory string, or that string already
 *  prepared. `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseIgnoreMatchTyped (
    assertion: string,
    value: DirectoryStringInput,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const raw = readDirectoryString(value);
    const constantTime = flags & MATCH_FLAG_CONSTANT_TIME;
    if (flags & MATCH_FLAG_VALUE_NORMALIZED) {
        return stringsEqual(assertion, raw, constantTime);
    }
    const prepared = prepString(raw, { caseFold: true });
    if (prepared === undefined) {
        if (flags & MATCH_FLAG_DEBUG) {
            console.error(
                "@wildboar/x500: debug: caseIgnoreMatch: stored value failed string preparation",
            );
        }
        return undefined;
    }
    return stringsEqual(assertion, prepared, constantTime);
}

caseIgnoreMatchTyped satisfies TypedEquationFunction<string>;

/**
 * `caseIgnoreMatch` as a `Matcher`. An assertion that cannot be
 * prepared throws `ASN1CharactersError`.
 */
export
const caseIgnoreMatch: Matcher = createEqualityMatcher(
    prepareCaseIgnoreAssertion,
    caseIgnoreMatchTyped,
);

export default caseIgnoreMatch;
