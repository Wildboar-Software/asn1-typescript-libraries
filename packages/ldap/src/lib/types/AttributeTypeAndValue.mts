import { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary An X.500 attribute type identifier and value.
 * @description
 * 
 * This type represents an X.500 attribute type identifier and value.
 * 
 * @param type The attribute type.
 * @param value The attribute value.
 * @function
 */
export
type AttributeTypeAndValue = [ type: OBJECT_IDENTIFIER, value: ASN1Element ];

export default AttributeTypeAndValue;
