/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraAutoProvLdapBindDn } from "../LdapZimbra/id-at-zimbraAutoProvLdapBindDn.va.mjs";


/**
 * @summary zimbraAutoProvLdapBindDn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAutoProvLdapBindDn ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{256}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraAutoProvLdapBindDn"}
 *   LDAP-DESC                 "EAGER mode: required LAZY mode: optional (if not using zimbraAutoProvLdapSearchFilter) MANUAL mode: optional (if not using zimbraAutoProvLdapSearchFilter) LDAP external DN template for account auto provisioning. For LAZY and MANUAL modes, either zimbraAutoProvLdapSearchFilter or zimbraAutoProvLdapBindDn has to be set. If both are set, zimbraAutoProvLdapSearchFilter will take precedence. Supported place holders: %n = username with @ (or without, if no @ was specified) %u = username with @ removed %d = domain as foo.com %D = domain as dc=foo,dc=com"
 *   ID                        id-at-zimbraAutoProvLdapBindDn }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraAutoProvLdapBindDn_Type = (el: _Element): DirectoryString => {
    const value = _decode_DirectoryString(el);
    let length: number;
    if ("teletexString" in value) {
        length = value.teletexString.length;
    } else if ("printableString" in value) {
        length = value.printableString.length;
    } else if ("bmpString" in value) {
        length = value.bmpString.length;
    } else if ("universalString" in value) {
        length = value.universalString.length;
    } else {
        length = value.uTF8String.length;
    }
    if (length < 1 || length > 256) {
        throw new ASN1SizeError("zimbraAutoProvLdapBindDn violates SIZE constraint");
    }
    return value;
};

export
const zimbraAutoProvLdapBindDn: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraAutoProvLdapBindDn_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraAutoProvLdapBindDn" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "EAGER mode: required LAZY mode: optional (if not using zimbraAutoProvLdapSearchFilter) MANUAL mode: optional (if not using zimbraAutoProvLdapSearchFilter) LDAP external DN template for account auto provisioning. For LAZY and MANUAL modes, either zimbraAutoProvLdapSearchFilter or zimbraAutoProvLdapBindDn has to be set. If both are set, zimbraAutoProvLdapSearchFilter will take precedence. Supported place holders: %n = username with @ (or without, if no @ was specified) %u = username with @ removed %d = domain as foo.com %D = domain as dc=foo,dc=com" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAutoProvLdapBindDn /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

