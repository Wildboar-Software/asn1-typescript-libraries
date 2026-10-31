/* eslint-disable */
import { id_mr_dnsRecordSubstringsMatch } from "../DNSFramework/id-mr-dnsRecordSubstringsMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import {
    type OctetSubstringAssertion,
    _decode_OctetSubstringAssertion,
    _encode_OctetSubstringAssertion,
} from "../SelectedAttributeTypes/OctetSubstringAssertion.ta.mjs";

/**
 * @summary dnsRecordSubstringsMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsRecordSubstringsMatch MATCHING-RULE ::= {
 *     SYNTAX      OctetSubstringAssertion
 *     LDAP-NAME   {"dnsRecordSubstringsMatch"}
 *     LDAP-DESC   "DNS Record Substrings Matching Rule"
 *     ID          id-mr-dnsRecordSubstringsMatch
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<OctetSubstringAssertion>}
 * @implements {MATCHING_RULE<OctetSubstringAssertion>}
 */
export
const dnsRecordSubstringsMatch: MATCHING_RULE<OctetSubstringAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_OctetSubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_OctetSubstringAssertion,
    },
    "&ldapName": ["dnsRecordSubstringsMatch"],
    "&ldapDesc": "DNS Record Substrings Matching Rule" /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_dnsRecordSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
