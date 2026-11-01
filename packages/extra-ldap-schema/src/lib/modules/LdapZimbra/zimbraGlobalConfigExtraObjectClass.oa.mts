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
import { id_at_zimbraGlobalConfigExtraObjectClass } from "../LdapZimbra/id-at-zimbraGlobalConfigExtraObjectClass.va.mjs";


/**
 * @summary zimbraGlobalConfigExtraObjectClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGlobalConfigExtraObjectClass ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{256}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraGlobalConfigExtraObjectClass"}
 *   LDAP-DESC                 "Object classes added on the global config entry. Unlike other zimbra***ExtraObjectClass attributes, object classes specified in this attributes will not be automatically added to the global config entry. Extra object class on the global config entry must be added using ""zmprov mcf +objectClass {object class}"", then recorded in this attributes."
 *   ID                        id-at-zimbraGlobalConfigExtraObjectClass }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraGlobalConfigExtraObjectClass_Type = (el: _Element): DirectoryString => {
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
    if (text.length < 1 || text.length > 256) {
        throw new ASN1SizeError("zimbraGlobalConfigExtraObjectClass violates SIZE constraint");
    }
    return value;
};

export
const zimbraGlobalConfigExtraObjectClass: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraGlobalConfigExtraObjectClass_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraGlobalConfigExtraObjectClass" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Object classes added on the global config entry. Unlike other zimbra***ExtraObjectClass attributes, object classes specified in this attributes will not be automatically added to the global config entry. Extra object class on the global config entry must be added using \"zmprov mcf +objectClass {object class}\", then recorded in this attributes." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraGlobalConfigExtraObjectClass /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

