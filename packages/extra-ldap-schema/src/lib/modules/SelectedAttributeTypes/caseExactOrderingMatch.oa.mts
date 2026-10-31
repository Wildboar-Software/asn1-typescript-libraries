/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_mr_caseExactOrderingMatch } from "../SelectedAttributeTypes/id-mr-caseExactOrderingMatch.va.mjs";


/**
 * @summary caseExactOrderingMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseExactOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       UnboundedDirectoryString
 *   LDAP-SYNTAX  directoryString.&id
 *   LDAP-NAME    {"caseExactOrderingMatch"}
 *   ID           id-mr-caseExactOrderingMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const caseExactOrderingMatch: MATCHING_RULE = undefined;

/* eslint-enable */
