/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { id_mr_integerOrderingMatch } from "../SelectedAttributeTypes/id-mr-integerOrderingMatch.va.mjs";


/**
 * @summary integerOrderingMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * integerOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       INTEGER
 *   LDAP-SYNTAX  integer.&id
 *   LDAP-NAME    {"integerOrderingMatch"}
 *   ID           id-mr-integerOrderingMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const integerOrderingMatch: MATCHING_RULE = undefined;

/* eslint-enable */
