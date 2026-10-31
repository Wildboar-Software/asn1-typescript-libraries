/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { CaseIgnoreList, _decode_CaseIgnoreList, _encode_CaseIgnoreList } from "../SelectedAttributeTypes/CaseIgnoreList.ta.mjs";
// export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";
// export { id_mr_caseIgnoreListMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreListMatch.va.mjs";


/**
 * @summary caseIgnoreListMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseIgnoreListMatch MATCHING-RULE ::= {
 *   SYNTAX       CaseIgnoreList
 *   LDAP-SYNTAX  postalAddr.&id
 *   LDAP-NAME    {"caseIgnoreListMatch"}
 *   ID           id-mr-caseIgnoreListMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const caseIgnoreListMatch: MATCHING_RULE = undefined;

/* eslint-enable */
