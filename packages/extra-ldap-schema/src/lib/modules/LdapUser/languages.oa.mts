/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { PostalAddress, _decode_PostalAddress, _encode_PostalAddress } from "../SelectedAttributeTypes/PostalAddress.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { postalAddr } from "../SelectedAttributeTypes/postalAddr.oa.mjs";
// export { id_at_languages } from "../LdapUser/id-at-languages.va.mjs";


/**
 * @summary languages
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * languages ATTRIBUTE ::= {
 *   WITH SYNTAX               PostalAddress
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               postalAddr.&id
 *   LDAP-NAME                 {"languages"}
 *   LDAP-DESC                 "written or spoken language for a person"
 *   ID                        id-at-languages }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const languages: ATTRIBUTE = undefined;

/* eslint-enable */
