import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";
import { compareCodePoints, prepString } from "../../utils/prepString.mjs";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.1.5
 * `numericStringOrderingMatch`.
 *
 * Same as `caseIgnoreOrderingMatch` except all spaces are removed
 * (clause 7.6.2). Directory TRUE iff the stored `NumericString` is
 * less than the presented value.
 */
export
const numericStringOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a: string | undefined = prepString(assertion.numericString, {
        caseFold: true,
        insignificant: "numeric",
    });
    const v: string | undefined = prepString(value.numericString, {
        caseFold: true,
        insignificant: "numeric",
    });
    if ((a === undefined) || (v === undefined)) {
        return Number.NaN;
    }
    return compareCodePoints(a, v);
}

export default numericStringOrderingMatch;
