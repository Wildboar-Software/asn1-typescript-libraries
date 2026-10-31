/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DNSRecord, _decode_DNSRecord, _encode_DNSRecord } from "../DNSFramework/DNSRecord.ta.mjs";
// export { dnsRecordEqualityMatch } from "../DNSFramework/dnsRecordEqualityMatch.oa.mjs";
// export { dnsRecordSubstringsMatch } from "../DNSFramework/dnsRecordSubstringsMatch.oa.mjs";
// export { id_at_dns_record } from "../DNSFramework/id-at-dns-record.va.mjs";


/**
 * @summary dns_record
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dns-record ATTRIBUTE ::= {
 *     WITH SYNTAX DNSRecord
 *     EQUALITY MATCHING RULE dnsRecordEqualityMatch
 *     SUBSTRINGS MATCHING RULE dnsRecordSubstringsMatch
 *     LDAP-NAME {"dns-record"}
 *     LDAP-DESC "DNS Record"
 *     ID id-at-dns-record
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const dns_record: ATTRIBUTE = undefined;

/* eslint-enable */
