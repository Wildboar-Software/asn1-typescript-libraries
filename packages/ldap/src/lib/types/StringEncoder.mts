import type { ASN1Element } from "@wildboar/asn1";

export
type StringEncoder = (value: ASN1Element) => string;

export default StringEncoder;
