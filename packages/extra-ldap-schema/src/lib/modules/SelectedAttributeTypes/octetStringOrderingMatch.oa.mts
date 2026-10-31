/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
// export { id_mr_octetStringOrderingMatch } from "../SelectedAttributeTypes/id-mr-octetStringOrderingMatch.va.mjs";


/**
 * @summary octetStringOrderingMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * octetStringOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       OCTET STRING
 *   LDAP-SYNTAX  octetString.&id
 *   LDAP-NAME    {"octetStringOrderingMatch"}
 *   ID           id-mr-octetStringOrderingMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const octetStringOrderingMatch: MATCHING_RULE = undefined;

/* eslint-enable */
