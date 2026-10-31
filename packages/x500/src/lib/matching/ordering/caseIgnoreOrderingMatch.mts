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
 * `caseIgnoreOrderingMatch`.
 *
 * Same as `caseExactOrderingMatch` except upper-case is folded
 * during string preparation (clause 7.2). Insignificant spaces are
 * ignored (clause 7.6). The signed result is negative when the
 * presented string is less than the stored string. Preparation
 * failure is UNDEFINED.
 *
 * @param assertion Presented string, already prepared and
 *  case-folded. `undefined` when preparation of the assertion failed.
 * @param value Stored directory string.
 */
export
function caseIgnoreOrderingMatchTyped (
    assertion: string | undefined,
    value: ASN1Element,
): number | undefined {
    if (assertion === undefined) {
        return undefined;
    }
    const v: string | undefined = prepString(
        readDirectoryString(value),
        { caseFold: true },
    );
    if (v === undefined) {
        return undefined;
    }
    return compareCodePoints(assertion, v);
}

caseIgnoreOrderingMatchTyped satisfies TypedOrderingFunction<string | undefined>;

/**
 * `caseIgnoreOrderingMatch` as a `Matcher`. TRUE iff the stored value
 * is less than the presented value. `MATCH_FLAG_ORDERING_GREATER`
 * and `MATCH_FLAG_ORDERING_OR_EQUAL` select the other orderings.
 */
export
const caseIgnoreOrderingMatch: Matcher = createOrderingMatcher(
    (el) => prepString(readDirectoryString(el), { caseFold: true }),
    caseIgnoreOrderingMatchTyped,
);

export default caseIgnoreOrderingMatch;
