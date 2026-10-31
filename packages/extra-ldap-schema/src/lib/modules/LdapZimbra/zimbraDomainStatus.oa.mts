/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { id_at_zimbraDomainStatus } from "../LdapZimbra/id-at-zimbraDomainStatus.va.mjs";


/**
 * @summary zimbraDomainStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDomainStatus ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraDomainStatus"}
 *   LDAP-DESC                 "domain status. enum values are akin to those of zimbraAccountStatus but the status affects all accounts on the domain. See table below for how zimbraDomainStatus affects account status. active - see zimbraAccountStatus maintenance - see zimbraAccountStatus locked - see zimbraAccountStatus closed - see zimbraAccountStatus suspended - maintenance + no creating/deleting/modifying accounts/DLs under the domain. shutdown - suspended + cannot modify domain attrs + cannot delete the domain Indicating server is doing major and lengthy maintenance work on the domain, e.g. renaming the domain and moving LDAP entries. Modification and deletion of the domain can only be done internally by the server when it is safe to release the domain, they cannot be done in admin console or zmprov. How zimbraDomainStatus affects account behavior : ------------------------------------- zimbraDomainStatus account behavior ------------------------------------- active zimbraAccountStatus locked zimbraAccountStatus if it is maintenance or pending or closed, else locked maintenance zimbraAccountStatus if it is pending or closed, else maintenance suspended zimbraAccountStatus if it is pending or closed, else maintenance shutdown zimbraAccountStatus if it is pending or closed, else maintenance closed closed"
 *   ID                        id-at-zimbraDomainStatus }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraDomainStatus: ATTRIBUTE = undefined;

/* eslint-enable */
