/* eslint-disable */
// export { DNSRecord, _decode_DNSRecord, _encode_DNSRecord } from "../DNSFramework/DNSRecord.ta.mjs";
// export { id_lsx_dnsRec } from "../DNSFramework/id-lsx-dnsRec.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary dnsRec
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsRec SYNTAX-NAME ::= {
 *     LDAP-DESC            "DNS Record, displayed loosely according to IETF RFC 1035, Section 5."
 *     DIRECTORY SYNTAX    DNSRecord
 *     ID                    id-lsx-dnsRec
 * }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export
const dnsRec: SYNTAX_NAME = undefined;

/* eslint-enable */
