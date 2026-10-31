/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
// export { telephoneNumberMatch } from "../SelectedAttributeTypes/telephoneNumberMatch.oa.mjs";
// export { telephoneNumberSubstringsMatch } from "../SelectedAttributeTypes/telephoneNumberSubstringsMatch.oa.mjs";
// export { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
// export { id_at_goFonMSN } from "../LdapGosaCoreGofon/id-at-goFonMSN.va.mjs";


/**
 * @summary goFonMSN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonMSN ATTRIBUTE ::= {
 *   WITH SYNTAX               TelephoneNumber
 *   EQUALITY MATCHING RULE    telephoneNumberMatch
 *   SUBSTRINGS MATCHING RULE  telephoneNumberSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               telephoneNr.&id
 *   LDAP-NAME                 {"goFonMSN"}
 *   LDAP-DESC                 "sets the sip.conf msn parameter"
 *   ID                        id-at-goFonMSN }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const goFonMSN: ATTRIBUTE = undefined;

/* eslint-enable */
