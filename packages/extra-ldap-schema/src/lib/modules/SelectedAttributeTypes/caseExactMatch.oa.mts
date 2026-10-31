/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_mr_caseExactMatch } from "../SelectedAttributeTypes/id-mr-caseExactMatch.va.mjs";


/**
 * @summary caseExactMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseExactMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseExactMatch"}
 *   ID           id-mr-caseExactMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const caseExactMatch: MATCHING_RULE = undefined;

/* eslint-enable */
