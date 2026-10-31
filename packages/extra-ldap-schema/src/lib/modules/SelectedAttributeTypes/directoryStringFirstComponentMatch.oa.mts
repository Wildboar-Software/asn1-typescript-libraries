/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_mr_directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/id-mr-directoryStringFirstComponentMatch.va.mjs";


/**
 * @summary directoryStringFirstComponentMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryStringFirstComponentMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"directoryStringFirstComponentMatch"}
 *   ID           id-mr-directoryStringFirstComponentMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const directoryStringFirstComponentMatch: MATCHING_RULE = undefined;

/* eslint-enable */
