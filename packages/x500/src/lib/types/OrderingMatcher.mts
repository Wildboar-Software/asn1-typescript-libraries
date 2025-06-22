import type { ASN1Element } from "@wildboar/asn1";

/**
 * A function for implement ordering matching of X.500 directory values.
 *
 * A negative returned value indicates that `assertion` should come before `value`.
 * A positive returned value indicates that `assertion` should come after `value`.
 * Zero or NaN being returned indicates that `assertion` and `value` are
 * considered equal.
 */
export
type OrderingMatcher = (assertion: ASN1Element, value: ASN1Element) => number;

export default OrderingMatcher;
