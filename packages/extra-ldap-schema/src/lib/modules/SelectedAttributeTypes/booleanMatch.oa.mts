/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { bitString } from "../SelectedAttributeTypes/bitString.oa.mjs";
// export { id_mr_booleanMatch } from "../SelectedAttributeTypes/id-mr-booleanMatch.va.mjs";


/**
 * @summary booleanMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * booleanMatch MATCHING-RULE ::= {
 *   SYNTAX       BOOLEAN
 *   LDAP-SYNTAX  bitString.&id
 *   LDAP-NAME    {"booleanMatch"}
 *   ID           id-mr-booleanMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const booleanMatch: MATCHING_RULE = undefined;

/* eslint-enable */
