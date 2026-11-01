/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraAutoProvLdapSearchFilter } from "../LdapZimbra/id-at-zimbraAutoProvLdapSearchFilter.va.mjs";

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
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
export
const zimbraAutoProvLdapSearchFilter: ATTRIBUTE<DirectoryString> = {
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
    "&ldapName": [ "zimbraAutoProvLdapSearchFilter" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "EAGER mode: required LAZY mode: optional (if not using zimbraAutoProvLdapBindDn) MANUAL mode: optional (if not using zimbraAutoProvLdapBindDn) LDAP search filter template for account auto provisioning. For LAZY and MANUAL modes, either zimbraAutoProvLdapSearchFilter or zimbraAutoProvLdapBindDn has to be set. If both are set, zimbraAutoProvLdapSearchFilter will take precedence. Supported place holders: %n = username with @ (or without, if no @ was specified) %u = username with @ removed %d = domain as foo.com %D = domain as dc=foo,dc=com" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAutoProvLdapSearchFilter /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
