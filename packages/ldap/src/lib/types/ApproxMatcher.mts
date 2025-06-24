import { ASN1Element } from "@wildboar/asn1";

/**
 * @summary An approximate matcher for X.500 directory values.
 * @description
 * 
 * A function that compares an X.500 directory value against an assertion value
 * approximately.
 * 
 * @param assertion The assertion value.
 * @param value The value to match.
 * @returns Whether the assertion value matches the value.
 * @function
 */
export
type ApproxMatcher = (assertion: ASN1Element, value: ASN1Element) => boolean;

export default ApproxMatcher;
