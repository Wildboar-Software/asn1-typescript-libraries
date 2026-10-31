/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { id_mr_numericStringMatch } from "../SelectedAttributeTypes/id-mr-numericStringMatch.va.mjs";


/**
 * @summary numericStringMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * numericStringMatch MATCHING-RULE ::= {
 *   SYNTAX       NumericString
 *   LDAP-SYNTAX  numericString.&id
 *   LDAP-NAME    {"numericStringMatch"}
 *   ID           id-mr-numericStringMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const numericStringMatch: MATCHING_RULE = undefined;

/* eslint-enable */
