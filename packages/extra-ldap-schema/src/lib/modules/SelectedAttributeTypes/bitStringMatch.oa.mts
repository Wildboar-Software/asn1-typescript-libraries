/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { bitString } from "../SelectedAttributeTypes/bitString.oa.mjs";
// export { id_mr_bitStringMatch } from "../SelectedAttributeTypes/id-mr-bitStringMatch.va.mjs";


/**
 * @summary bitStringMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bitStringMatch MATCHING-RULE ::= {
 *   SYNTAX       BIT STRING
 *   LDAP-SYNTAX  bitString.&id
 *   LDAP-NAME    {"bitStringMatch"}
 *   ID           id-mr-bitStringMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const bitStringMatch: MATCHING_RULE = undefined;

/* eslint-enable */
