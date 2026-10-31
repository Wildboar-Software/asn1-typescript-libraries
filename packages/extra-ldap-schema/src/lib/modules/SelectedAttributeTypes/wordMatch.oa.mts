/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_mr_wordMatch } from "../SelectedAttributeTypes/id-mr-wordMatch.va.mjs";


/**
 * @summary wordMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wordMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"wordMatch"}
 *   ID           id-mr-wordMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const wordMatch: MATCHING_RULE = undefined;

/* eslint-enable */
