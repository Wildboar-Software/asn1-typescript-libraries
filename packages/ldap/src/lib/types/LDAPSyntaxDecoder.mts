import type { ASN1Element } from "@wildboar/asn1";

export
type LDAPSyntaxDecoder = (value: Uint8Array) => ASN1Element;

export default LDAPSyntaxDecoder;
