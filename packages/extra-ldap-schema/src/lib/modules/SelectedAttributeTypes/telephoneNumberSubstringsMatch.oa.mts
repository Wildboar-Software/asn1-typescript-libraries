/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { SubstringAssertion, _decode_SubstringAssertion, _encode_SubstringAssertion } from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
// export { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.mjs";
// export { id_mr_telephoneNumberSubstringsMatch } from "../SelectedAttributeTypes/id-mr-telephoneNumberSubstringsMatch.va.mjs";


/**
 * @summary telephoneNumberSubstringsMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * telephoneNumberSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"telephoneNumberSubstringsMatch"}
 *   ID           id-mr-telephoneNumberSubstringsMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const telephoneNumberSubstringsMatch: MATCHING_RULE = undefined;

/* eslint-enable */
