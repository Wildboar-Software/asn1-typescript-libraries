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
import { id_at_zimbraMobileItemsToTrackPerFolderMaxSize } from "../LdapZimbra/id-at-zimbraMobileItemsToTrackPerFolderMaxSize.va.mjs";


/**
 * @summary zimbraMobileItemsToTrackPerFolderMaxSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobileItemsToTrackPerFolderMaxSize ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{30}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraMobileItemsToTrackPerFolderMaxSize"}
 *   LDAP-DESC                 "Max size of items in a folder that server tracks, categorized by collection type (Email,Calendar,Contacts,Tasks). e.g. Email:3000 makes the max size of items to track for an Email folder to be 3000. If not specify, default value is Integer.MAX_VALUE"
 *   ID                        id-at-zimbraMobileItemsToTrackPerFolderMaxSize }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraMobileItemsToTrackPerFolderMaxSize_Type = (el: _Element): DirectoryString => {
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
    if (text.length < 1 || text.length > 30) {
        throw new ASN1SizeError("zimbraMobileItemsToTrackPerFolderMaxSize violates SIZE constraint");
    }
    return value;
};

export
const zimbraMobileItemsToTrackPerFolderMaxSize: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraMobileItemsToTrackPerFolderMaxSize_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraMobileItemsToTrackPerFolderMaxSize" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Max size of items in a folder that server tracks, categorized by collection type (Email,Calendar,Contacts,Tasks). e.g. Email:3000 makes the max size of items to track for an Email folder to be 3000. If not specify, default value is Integer.MAX_VALUE" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMobileItemsToTrackPerFolderMaxSize /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

