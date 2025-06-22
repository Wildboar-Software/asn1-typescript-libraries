import { ASN1Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";

export
type AttributeTypeAndValue = [ type: OBJECT_IDENTIFIER, value: ASN1Element ];

export default AttributeTypeAndValue;
