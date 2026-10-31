/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_mr_caseIgnoreMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreMatch.va.mjs";


/**
 * @summary caseIgnoreMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseIgnoreMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseIgnoreMatch"}
 *   ID           id-mr-caseIgnoreMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const caseIgnoreMatch: MATCHING_RULE = undefined;

/* eslint-enable */
