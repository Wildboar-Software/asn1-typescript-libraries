import type { ASN1Element } from "asn1-ts";

export
type LDAPSyntaxDecoder = (value: Uint8Array) => ASN1Element;

export default LDAPSyntaxDecoder;
