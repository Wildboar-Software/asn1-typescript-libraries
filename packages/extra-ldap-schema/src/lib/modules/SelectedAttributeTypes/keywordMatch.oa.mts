/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_mr_keywordMatch } from "../SelectedAttributeTypes/id-mr-keywordMatch.va.mjs";


/**
 * @summary keywordMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * keywordMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"keywordMatch"}
 *   ID           id-mr-keywordMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const keywordMatch: MATCHING_RULE = undefined;

/* eslint-enable */
