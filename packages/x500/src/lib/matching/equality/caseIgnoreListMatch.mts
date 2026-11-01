import { ASN1CharactersError, type ASN1Element } from "@wildboar/asn1";
import type { AttributeType } from "../../modules/InformationFramework/index.mjs";
import type { DirectoryStringListInput } from "../readValue.mjs";
import { readDirectoryStringList } from "../readValue.mjs";
import { prepString } from "../../utils/prepString.mjs";
import {
    createEqualityMatcher,
    MATCH_FLAG_DEBUG,
    MATCH_FLAG_VALUE_NORMALIZED,
    type Matcher,
    type TypedEquationFunction,
} from "../../types/matching.mjs";

/**
 * Prepare and case-fold every presented line once.
 */
function prepareCaseIgnoreListAssertion (el: ASN1Element): string[] {
    const lines = readDirectoryStringList(el);
    const prepared = new Array<string>(lines.length);
    for (let i = 0; i < lines.length; i++) {
        const line = prepString(lines[i], { caseFold: true });
        if (line === undefined) {
            throw new ASN1CharactersError(
                "caseIgnoreListMatch assertion failed string preparation",
                el,
            );
        }
        prepared[i] = line;
    }
    return prepared;
}

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.7 `caseIgnoreListMatch`.
 *
 * Equality of a SEQUENCE OF `UnboundedDirectoryString` (e.g.
 * postal address lines). TRUE iff both sequences have the same
 * number of strings and corresponding strings match as for
 * `caseIgnoreMatch`. Preparation failure of a stored line is
 * UNDEFINED.
 *
 * @param assertion Presented lines, already prepared and case-folded.
 * @param value Stored list, or those lines already prepared.
 *  `MATCH_FLAG_VALUE_NORMALIZED` skips preparation.
 */
export
function caseIgnoreListMatchTyped (
    assertion: readonly string[],
    value: DirectoryStringListInput,
    _getEqualityMatcher?: (attributeType: AttributeType) => Matcher | undefined,
    flags: number = 0,
): boolean | undefined {
    const lines = readDirectoryStringList(value);
    if (assertion.length !== lines.length) {
        return false;
    }
    const normalized = (flags & MATCH_FLAG_VALUE_NORMALIZED) !== 0;
    for (let i = 0; i < assertion.length; i++) {
        const stored = normalized
            ? lines[i]
            : prepString(lines[i], { caseFold: true });
        if (stored === undefined) {
            if (flags & MATCH_FLAG_DEBUG) {
                console.error(
                    `@wildboar/x500: debug: caseIgnoreListMatch: stored line at index ${i} failed string preparation`,
                );
            }
            return undefined;
        }
        if (assertion[i] !== stored) {
            return false;
        }
    }
    return true;
}

caseIgnoreListMatchTyped satisfies TypedEquationFunction<readonly string[]>;

/**
 * `caseIgnoreListMatch` as a `Matcher`. An assertion line that
 * cannot be prepared throws `ASN1CharactersError`.
 */
export
const caseIgnoreListMatch: Matcher = createEqualityMatcher(
    prepareCaseIgnoreListAssertion,
    caseIgnoreListMatchTyped,
);

export default caseIgnoreListMatch;
