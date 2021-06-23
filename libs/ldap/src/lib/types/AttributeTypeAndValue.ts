import { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";

export
type AttributeTypeAndValue = [ type: OBJECT_IDENTIFIER, value: ASN1Element ];

export default AttributeTypeAndValue;
