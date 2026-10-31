/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraContactAutoCompleteEmailFields } from "../LdapZimbra/id-at-zimbraContactAutoCompleteEmailFields.va.mjs";


/**
 * @summary zimbraContactAutoCompleteEmailFields
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraContactAutoCompleteEmailFields ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{64}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraContactAutoCompleteEmailFields"}
 *   LDAP-DESC                 "Deprecated since: 6.0.7. deprecated in favor of zimbraContactEmailFields, for bug 45475. Orig desc: Comma separates list of attributes in contact object to search for email addresses when generating auto-complete contact list. The same set of fields are used for GAL contacts as well because LDAP attributes for GAL objects are mapped to Contact compatible attributes via zimbraGalLdapAttrMap."
 *   ID                        id-at-zimbraContactAutoCompleteEmailFields }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraContactAutoCompleteEmailFields: ATTRIBUTE = undefined;

/* eslint-enable */
