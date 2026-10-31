import type { ASN1Element } from "@wildboar/asn1";
import { readDirectoryString } from "../readValue.mjs";
import { compareCodePoints, prepString } from "../../utils/prepString.mjs";
import {
    createOrderingMatcher,
    type Matcher,
    type TypedOrderingFunction,
} from "../../types/matching.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.2
 * `caseExactOrderingMatch`.
 *
 * Directory ordering of `UnboundedDirectoryString` after removing
 * insignificant spaces (clause 7.6). The signed result is negative
 * when the presented string is less than the stored string under
 * Unicode code-point collation. Preparation failure is UNDEFINED.
 *
 * Language-specific collation is outside the scope of X.520.
 *
 * @param assertion Presented string, not yet prepared.
 * @param value Stored directory string.
 */
export
function caseExactOrderingMatchTyped (
    assertion: string,
    value: ASN1Element,
): number | undefined {
    const a: string | undefined = prepString(assertion);
    if (a === undefined) {
        return undefined;
    }
    const v: string | undefined = prepString(readDirectoryString(value));
    if (v === undefined) {
        return undefined;
    }
    return compareCodePoints(a, v);
}

caseExactOrderingMatchTyped satisfies TypedOrderingFunction<string>;

/**
 * `caseExactOrderingMatch` as a `Matcher`. TRUE iff the stored value
 * is less than the presented value. `MATCH_FLAG_ORDERING_GREATER`
 * and `MATCH_FLAG_ORDERING_OR_EQUAL` select the other orderings.
 */
export
const caseExactOrderingMatch: Matcher = createOrderingMatcher(
    readDirectoryString,
    caseExactOrderingMatchTyped,
);

export default caseExactOrderingMatch;
