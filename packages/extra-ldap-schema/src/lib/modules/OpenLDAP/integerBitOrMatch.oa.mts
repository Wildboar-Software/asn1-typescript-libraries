/* eslint-disable */
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";


/**
 * @summary integerBitOrMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * integerBitOrMatch MATCHING-RULE ::= {
 *     SYNTAX                  INTEGER
 *     LDAP-SYNTAX             integer.&id
 *     LDAP-NAME               {"integerBitOrMatch"}
 *     ID                      { 1 2 840 113556 1 4 804 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const integerBitOrMatch: MATCHING_RULE = undefined;

/* eslint-enable */
