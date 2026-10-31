/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { SubstringAssertion, _decode_SubstringAssertion, _encode_SubstringAssertion } from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
// export { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.mjs";
// export { id_mr_caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/id-mr-caseIgnoreSubstringsMatch.va.mjs";


/**
 * @summary caseIgnoreSubstringsMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseIgnoreSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseIgnoreSubstringsMatch"}
 *   ID           id-mr-caseIgnoreSubstringsMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const caseIgnoreSubstringsMatch: MATCHING_RULE = undefined;

/* eslint-enable */
