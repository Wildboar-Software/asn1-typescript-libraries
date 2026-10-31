/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { SubstringAssertion, _decode_SubstringAssertion, _encode_SubstringAssertion } from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
// export { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.mjs";
// export { id_mr_caseExactSubstringsMatch } from "../SelectedAttributeTypes/id-mr-caseExactSubstringsMatch.va.mjs";


/**
 * @summary caseExactSubstringsMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseExactSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion -- only the PrintableString choice
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseExactSubstringsMatch"}
 *   ID           id-mr-caseExactSubstringsMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const caseExactSubstringsMatch: MATCHING_RULE = undefined;

/* eslint-enable */
