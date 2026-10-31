/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
// export { id_mr_octetStringMatch } from "../SelectedAttributeTypes/id-mr-octetStringMatch.va.mjs";


/**
 * @summary octetStringMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * octetStringMatch MATCHING-RULE ::= {
 *   SYNTAX       OCTET STRING
 *   LDAP-SYNTAX  octetString.&id
 *   LDAP-NAME    {"octetStringMatch"}
 *   ID           id-mr-octetStringMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const octetStringMatch: MATCHING_RULE = undefined;

/* eslint-enable */
