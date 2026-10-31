/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_mr_integerMatch } from "../SelectedAttributeTypes/id-mr-integerMatch.va.mjs";


/**
 * @summary integerMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * integerMatch MATCHING-RULE ::= {
 *   SYNTAX       INTEGER
 *   LDAP-SYNTAX  integer.&id
 *   LDAP-NAME    {"integerMatch"}
 *   ID           id-mr-integerMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const integerMatch: MATCHING_RULE = undefined;

/* eslint-enable */
