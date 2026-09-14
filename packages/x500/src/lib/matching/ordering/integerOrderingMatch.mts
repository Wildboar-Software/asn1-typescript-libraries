import OrderingMatcher from "../../types/OrderingMatcher.mjs";
import type { ASN1Element } from "@wildboar/asn1";

/**
 * Rec. ITU-T X.520 (10/2019), clause 8.2.3 `integerOrderingMatch`.
 *
 * Directory TRUE iff the stored INTEGER is less than the presented
 * INTEGER. This function returns a signed comparison (stored minus
 * presented).
 */
export
const integerOrderingMatch: OrderingMatcher = (
    assertion: ASN1Element,
    value: ASN1Element,
): number => {
    return Number(BigInt(value.integer) - BigInt(assertion.integer));
}

export default integerOrderingMatch;
