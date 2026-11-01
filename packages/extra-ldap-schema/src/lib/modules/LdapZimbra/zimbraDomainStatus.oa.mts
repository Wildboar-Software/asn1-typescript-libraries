/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraDomainStatus } from "../LdapZimbra/id-at-zimbraDomainStatus.va.mjs";


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
const _decode_zimbraDomainStatus_Type = (el: _Element): DirectoryString => {
    const value = _decode_DirectoryString(el);
    let text: string;
    if ("teletexString" in value) {
        text = value.teletexString;
    } else if ("printableString" in value) {
        text = value.printableString;
    } else if ("bmpString" in value) {
        text = value.bmpString;
    } else if ("universalString" in value) {
        text = value.universalString;
    } else {
        text = value.uTF8String;
    }
    if (text.length < 1 || text.length > 32) {
        throw new ASN1SizeError("zimbraDomainStatus violates SIZE constraint");
    }
    return value;
};

export
const zimbraDomainStatus: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraDomainStatus_Type,
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

