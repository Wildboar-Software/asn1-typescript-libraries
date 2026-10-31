/* eslint-disable */
import {
    _decode_DNSRecord,
    _encode_DNSRecord,
    DNSRecord,
} from "../DNSFramework/DNSRecord.ta.mjs";
import { dnsRecordEqualityMatch } from "../DNSFramework/dnsRecordEqualityMatch.oa.mjs";
import { dnsRecordSubstringsMatch } from "../DNSFramework/dnsRecordSubstringsMatch.oa.mjs";
import { id_at_dns_record } from "../DNSFramework/id-at-dns-record.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";

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
    "&ldapName": ["dns-record"],
    "&ldapDesc": "DNS Record" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dns_record /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
