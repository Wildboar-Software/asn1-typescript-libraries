/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraAutoProvLdapSearchFilter } from "../LdapZimbra/id-at-zimbraAutoProvLdapSearchFilter.va.mjs";


/**
 * @summary zimbraAutoProvLdapSearchFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAutoProvLdapSearchFilter ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{256}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraAutoProvLdapSearchFilter"}
 *   LDAP-DESC                 "EAGER mode: required LAZY mode: optional (if not using zimbraAutoProvLdapBindDn) MANUAL mode: optional (if not using zimbraAutoProvLdapBindDn) LDAP search filter template for account auto provisioning. For LAZY and MANUAL modes, either zimbraAutoProvLdapSearchFilter or zimbraAutoProvLdapBindDn has to be set. If both are set, zimbraAutoProvLdapSearchFilter will take precedence. Supported place holders: %n = username with @ (or without, if no @ was specified) %u = username with @ removed %d = domain as foo.com %D = domain as dc=foo,dc=com"
 *   ID                        id-at-zimbraAutoProvLdapSearchFilter }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraAutoProvLdapSearchFilter: ATTRIBUTE = undefined;

/* eslint-enable */
