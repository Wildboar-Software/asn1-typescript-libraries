/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { IntEmail, _decode_IntEmail, _encode_IntEmail } from "../SelectedAttributeTypes/IntEmail.ta.mjs";
// export { dnsString } from "../SelectedAttributeTypes/dnsString.oa.mjs";
// export { id_mr_intEmailMatch } from "../SelectedAttributeTypes/id-mr-intEmailMatch.va.mjs";


/**
 * @summary intEmailMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * intEmailMatch MATCHING-RULE ::= {
 *   SYNTAX       IntEmail
 *   LDAP-SYNTAX  dnsString.&id
 *   LDAP-NAME    {"intEmailMatch"}
 *   ID           id-mr-intEmailMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const intEmailMatch: MATCHING_RULE = undefined;

/* eslint-enable */
