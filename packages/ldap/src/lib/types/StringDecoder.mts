import type { ASN1Element } from "@wildboar/asn1";

export
type StringDecoder = (value: string) => ASN1Element;

export default StringDecoder;
