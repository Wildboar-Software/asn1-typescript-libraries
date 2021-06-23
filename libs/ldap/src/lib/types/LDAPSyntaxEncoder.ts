import type { ASN1Element } from "asn1-ts";

export
type LDAPSyntaxEncoder = (value: ASN1Element) => Uint8Array;

export default LDAPSyntaxEncoder;
