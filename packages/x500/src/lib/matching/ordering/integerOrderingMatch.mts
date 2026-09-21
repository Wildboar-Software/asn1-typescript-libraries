import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.3 `integerOrderingMatch`.
 *
 * Directory TRUE iff the stored INTEGER is less than the presented
 * INTEGER. This function returns a signed comparison (assertion
 * minus stored), matching {@link OrderingMatcher}: negative means
 * the assertion sorts before the stored value.
 */
export
const integerOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    const a = BigInt(assertion.integer);
    const v = BigInt(value.integer);
    if (a < v) {
        return -1;
    }
    if (a > v) {
        return 1;
    }
    return 0;
}

export default integerOrderingMatch;
