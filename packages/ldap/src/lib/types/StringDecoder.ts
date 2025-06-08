import type { ASN1Element } from "asn1-ts";

export
type StringDecoder = (value: string) => ASN1Element;

export default StringDecoder;
