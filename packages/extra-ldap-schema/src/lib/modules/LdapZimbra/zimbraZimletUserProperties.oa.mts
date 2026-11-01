/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
import { caseExactSubstringsMatch } from "../SelectedAttributeTypes/caseExactSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraZimletUserProperties } from "../LdapZimbra/id-at-zimbraZimletUserProperties.va.mjs";


/**
 * @summary zimbraZimletUserProperties
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraZimletUserProperties ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{5120}
 *   EQUALITY MATCHING RULE    caseExactMatch
 *   SUBSTRINGS MATCHING RULE  caseExactSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraZimletUserProperties"}
 *   LDAP-DESC                 "User properties for Zimlets"
 *   ID                        id-at-zimbraZimletUserProperties }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraZimletUserProperties_Type = (el: _Element): DirectoryString => {
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
    if (text.length < 1 || text.length > 5120) {
        throw new ASN1SizeError("zimbraZimletUserProperties violates SIZE constraint");
    }
    return value;
};

export
const zimbraZimletUserProperties: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraZimletUserProperties_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseExactSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraZimletUserProperties" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "User properties for Zimlets" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraZimletUserProperties /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

