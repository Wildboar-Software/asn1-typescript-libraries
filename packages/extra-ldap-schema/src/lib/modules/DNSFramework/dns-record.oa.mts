/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DNSRecord, _decode_DNSRecord, _encode_DNSRecord } from "../DNSFramework/DNSRecord.ta.mjs";
// export { DNSRecord, _decode_DNSRecord, _encode_DNSRecord } from "../DNSFramework/DNSRecord.ta.mjs";
import { dnsRecordEqualityMatch } from "../DNSFramework/dnsRecordEqualityMatch.oa.mjs";
// export { dnsRecordEqualityMatch } from "../DNSFramework/dnsRecordEqualityMatch.oa.mjs";
import { dnsRecordSubstringsMatch } from "../DNSFramework/dnsRecordSubstringsMatch.oa.mjs";
// export { dnsRecordSubstringsMatch } from "../DNSFramework/dnsRecordSubstringsMatch.oa.mjs";
import { id_at_dns_record } from "../DNSFramework/id-at-dns-record.va.mjs";
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
 * @type {ATTRIBUTE<DNSRecord>}
 * @implements {ATTRIBUTE<DNSRecord>}
 */
export
const dns_record: ATTRIBUTE<DNSRecord> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DNSRecord,
    },
    encoderFor: {
        "&Type": _encode_DNSRecord,
    },
    "&equality-match": dnsRecordEqualityMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": dnsRecordSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dns-record" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DNS Record" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dns_record /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
