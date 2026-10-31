/* eslint-disable */
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";


/**
 * @summary integerBitAndMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * integerBitAndMatch MATCHING-RULE ::= {
 *     SYNTAX                  INTEGER
 *     LDAP-SYNTAX             integer.&id
 *     LDAP-NAME               {"integerBitAndMatch"}
 *     ID                      { 1 2 840 113556 1 4 803 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const integerBitAndMatch: MATCHING_RULE = undefined;

/* eslint-enable */
