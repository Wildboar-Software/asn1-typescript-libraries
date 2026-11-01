/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
// export { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
// export { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraDomainStatus } from "../LdapZimbra/id-at-zimbraDomainStatus.va.mjs";
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
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export
const zimbraDomainStatus: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraDomainStatus" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "domain status. enum values are akin to those of zimbraAccountStatus but the status affects all accounts on the domain. See table below for how zimbraDomainStatus affects account status. active - see zimbraAccountStatus maintenance - see zimbraAccountStatus locked - see zimbraAccountStatus closed - see zimbraAccountStatus suspended - maintenance + no creating/deleting/modifying accounts/DLs under the domain. shutdown - suspended + cannot modify domain attrs + cannot delete the domain Indicating server is doing major and lengthy maintenance work on the domain, e.g. renaming the domain and moving LDAP entries. Modification and deletion of the domain can only be done internally by the server when it is safe to release the domain, they cannot be done in admin console or zmprov. How zimbraDomainStatus affects account behavior : ------------------------------------- zimbraDomainStatus account behavior ------------------------------------- active zimbraAccountStatus locked zimbraAccountStatus if it is maintenance or pending or closed, else locked maintenance zimbraAccountStatus if it is pending or closed, else maintenance suspended zimbraAccountStatus if it is pending or closed, else maintenance shutdown zimbraAccountStatus if it is pending or closed, else maintenance closed closed" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraDomainStatus /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
