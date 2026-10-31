/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { Jid, _decode_Jid, _encode_Jid } from "../SelectedAttributeTypes/Jid.ta.mjs";
// export { dnsString } from "../SelectedAttributeTypes/dnsString.oa.mjs";
// export { id_mr_jidMatch } from "../SelectedAttributeTypes/id-mr-jidMatch.va.mjs";


/**
 * @summary jidMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * jidMatch MATCHING-RULE ::= {
 *   SYNTAX       Jid
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"jidMatch"}
 *   ID           id-mr-jidMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const jidMatch: MATCHING_RULE = undefined;

/* eslint-enable */
