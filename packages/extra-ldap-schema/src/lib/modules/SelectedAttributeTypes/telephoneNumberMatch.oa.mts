/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
// export { TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
// export { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
// export { id_mr_telephoneNumberMatch } from "../SelectedAttributeTypes/id-mr-telephoneNumberMatch.va.mjs";


/**
 * @summary telephoneNumberMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * telephoneNumberMatch MATCHING-RULE ::= {
 *   SYNTAX       TelephoneNumber
 *   LDAP-SYNTAX  telephoneNr.&id
 *   LDAP-NAME    {"telephoneNumberMatch"}
 *   ID           id-mr-telephoneNumberMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export
const telephoneNumberMatch: MATCHING_RULE = undefined;

/* eslint-enable */
