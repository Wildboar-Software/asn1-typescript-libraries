/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { DNSRecordAssertion, _decode_DNSRecordAssertion, _encode_DNSRecordAssertion } from "../DNSFramework/DNSRecordAssertion.ta.mjs";
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
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const dnsRecordEqualityMatch: MATCHING_RULE = undefined;

/* eslint-enable */
