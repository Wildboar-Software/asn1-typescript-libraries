/* eslint-disable */
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";


/**
 * @summary directoryStringApproxMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryStringApproxMatch MATCHING-RULE ::= {
 *     SYNTAX                  UnboundedDirectoryString
 *     LDAP-SYNTAX             directoryString.&id
 *     LDAP-NAME               {"directoryStringApproxMatch"}
 *     ID                      { 1 3 6 1 4 1 4203 666 4 4 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const directoryStringApproxMatch: MATCHING_RULE = undefined;

/* eslint-enable */
