/* eslint-disable */
import { DNSRecordAssertion, _decode_DNSRecordAssertion, _encode_DNSRecordAssertion } from "../DNSFramework/DNSRecordAssertion.ta.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { DNSRecordAssertion, _decode_DNSRecordAssertion, _encode_DNSRecordAssertion } from "../DNSFramework/DNSRecordAssertion.ta.mjs";
import { id_mr_dnsRecordEqualityMatch } from "../DNSFramework/id-mr-dnsRecordEqualityMatch.va.mjs";
// export { id_mr_dnsRecordEqualityMatch } from "../DNSFramework/id-mr-dnsRecordEqualityMatch.va.mjs";


/**
 * @summary dnsRecordEqualityMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsRecordEqualityMatch MATCHING-RULE ::= {
 *     SYNTAX      DNSRecordAssertion
 *     LDAP-NAME   {"dnsRecordEqualityMatch"}
 *     LDAP-DESC   "DNS Record Equality Matching Rule"
 *     ID          id-mr-dnsRecordEqualityMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<DNSRecordAssertion>}
 * @implements {MATCHING_RULE<DNSRecordAssertion>}
 */
export
const dnsRecordEqualityMatch: MATCHING_RULE<DNSRecordAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DNSRecordAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_DNSRecordAssertion,
    },
    "&ldapName": [ "dnsRecordEqualityMatch" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DNS Record Equality Matching Rule" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_dnsRecordEqualityMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
