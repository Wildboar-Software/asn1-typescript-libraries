/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { SubstringAssertion, _decode_SubstringAssertion, _encode_SubstringAssertion } from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
// export { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.mjs";
// export { id_lmr_caseIgnoreIA5Match } from "../SelectedAttributeTypes/id-lmr-caseIgnoreIA5Match.va.mjs";


/**
 * @summary caseIgnoreIA5SubstringsMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * caseIgnoreIA5SubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"caseIgnoreIA5SubstringsMatch"}
 *   ID           id-lmr-caseIgnoreIA5Match }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const caseIgnoreIA5SubstringsMatch: MATCHING_RULE = undefined;

/* eslint-enable */
