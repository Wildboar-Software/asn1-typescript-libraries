import type { ASN1Element } from "@wildboar/asn1";

export
type LDAPSyntaxEncoder = (value: ASN1Element) => Uint8Array;

export default LDAPSyntaxEncoder;
