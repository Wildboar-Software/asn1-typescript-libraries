import { ASN1Element } from "@wildboar/asn1";

/**
 * @summary An equality matcher for X.500 directory values.
 * @description
 * 
 * A function that compares an X.500 directory value against an assertion value
 * exactly: this is used for implementing equality matching rules.
 * 
 * @param assertion The assertion value.
 * @param value The value to match.
 * @returns Whether the assertion value matches the value.
 * @function
 */
export
type EqualityMatcher = (assertion: ASN1Element, value: ASN1Element) => boolean;

export default EqualityMatcher;
