/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_mr_integerFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-integerFirstComponentMatch.va.mjs";


/**
 * @summary integerFirstComponentMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * integerFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX       INTEGER
 *   LDAP-SYNTAX  integer.&id
 *   LDAP-NAME    {"integerFirstComponentMatch"}
 *   ID           id-mr-integerFirstComponentMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const integerFirstComponentMatch: MATCHING_RULE = undefined;

/* eslint-enable */
