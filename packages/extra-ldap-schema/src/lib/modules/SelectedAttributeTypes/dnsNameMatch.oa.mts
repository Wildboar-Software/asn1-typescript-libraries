/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { DomainName, _decode_DomainName, _encode_DomainName } from "../SelectedAttributeTypes/DomainName.ta.mjs";
// export { dnsString } from "../SelectedAttributeTypes/dnsString.oa.mjs";
// export { id_mr_dnsNameMatch } from "../SelectedAttributeTypes/id-mr-dnsNameMatch.va.mjs";


/**
 * @summary dnsNameMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsNameMatch MATCHING-RULE ::= {
 *   SYNTAX       DomainName
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"dnsNameMatch"}
 *   ID           id-mr-dnsNameMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const dnsNameMatch: MATCHING_RULE = undefined;

/* eslint-enable */
