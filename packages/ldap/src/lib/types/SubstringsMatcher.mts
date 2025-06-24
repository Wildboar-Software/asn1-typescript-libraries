import { ASN1Element } from "@wildboar/asn1";
import SubstringSelection from "./SubstringSelection.mjs";

/**
 * @summary A function that matches a substrings match according to a substrings matching rule.
 * @description
 * 
 * A function that performs a substrings match on an X.500 attribute value
 * according to a substrings matching rule.
 * 
 * @param assertion The assertion value.
 * @param value The value to match.
 * @param selection The substring selection.
 * @returns Whether the assertion value matches the value.
 * @function
 */
export
type SubstringsFunction = (
    assertion: ASN1Element,
    value: ASN1Element,
    selection?: SubstringSelection,
) => boolean;

export default SubstringsFunction;
