/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { id_mr_numericStringOrderingMatch } from "../SelectedAttributeTypes/id-mr-numericStringOrderingMatch.va.mjs";


/**
 * @summary numericStringOrderingMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * numericStringOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       NumericString
 *   LDAP-SYNTAX  numericString.&id
 *   LDAP-NAME    {"numericStringOrderingMatch"}
 *   ID           id-mr-numericStringOrderingMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const numericStringOrderingMatch: MATCHING_RULE = undefined;

/* eslint-enable */
