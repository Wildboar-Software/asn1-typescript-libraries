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
import { id_at_zimbraDefaultFolderFlags } from "../LdapZimbra/id-at-zimbraDefaultFolderFlags.va.mjs";


/**
 * @summary zimbraDefaultFolderFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDefaultFolderFlags ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraDefaultFolderFlags"}
 *   LDAP-DESC                 "Default flags on folder. These are set when a new folder is created, has no effect on existing folders. Possible values are: * - \Subscribed b - \ExcludeFB # - \Checked i - \NoInherit y - \SyncFolder ~ - \Sync o - \Noinferiors g - \Global"
 *   ID                        id-at-zimbraDefaultFolderFlags }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraDefaultFolderFlags_Type = (el: _Element): DirectoryString => {
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
    if (length < 1 || length > 32) {
        throw new ASN1SizeError("zimbraDefaultFolderFlags violates SIZE constraint");
    }
    return value;
};

export
const zimbraDefaultFolderFlags: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraDefaultFolderFlags_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraDefaultFolderFlags" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Default flags on folder. These are set when a new folder is created, has no effect on existing folders. Possible values are: * - \\Subscribed b - \\ExcludeFB # - \\Checked i - \\NoInherit y - \\SyncFolder ~ - \\Sync o - \\Noinferiors g - \\Global" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraDefaultFolderFlags /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

