/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { SubstringAssertion, _decode_SubstringAssertion, _encode_SubstringAssertion } from "../SelectedAttributeTypes/SubstringAssertion.ta.mjs";
// export { substringAssertion } from "../SelectedAttributeTypes/substringAssertion.oa.mjs";
// export { id_mr_numericStringSubstringsMatch } from "../SelectedAttributeTypes/id-mr-numericStringSubstringsMatch.va.mjs";


/**
 * @summary numericStringSubstringsMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * numericStringSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   LDAP-SYNTAX  substringAssertion.&id
 *   LDAP-NAME    {"numericStringSubstringsMatch"}
 *   ID           id-mr-numericStringSubstringsMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const numericStringSubstringsMatch: MATCHING_RULE = undefined;

/* eslint-enable */
