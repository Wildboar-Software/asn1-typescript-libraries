import type { ASN1Element } from "asn1-ts";

export
type StringEncoder = (value: ASN1Element) => string;

export default StringEncoder;
