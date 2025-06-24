import { ASN1Element } from "@wildboar/asn1";

/**
 * @summary A function that compares an X.500 directory value against an assertion value.
 * @description
 * 
 * A function that compares an X.500 directory value against an assertion value
 * according to an ordering matching rule.
 *
 * A negative return value indicates that assertion should come before value.
 * A positive return value indicates that assertion should come after value.
 * Zero or NaN return value indicates that assertion and value are considered equal.
 * 
 * This is intentionally so that this function can be used with the `Array.prototype.sort()`
 * method.
 * 
 * @param assertion The assertion value.
 * @returns The comparison result.
 * @function
 */
export
type OrderingMatcher = (assertion: ASN1Element, value: ASN1Element) => number;

export default OrderingMatcher;
