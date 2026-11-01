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
import { id_at_zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply } from "../LdapZimbra/id-at-zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply.va.mjs";


/**
 * @summary zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{32}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply"}
 *   LDAP-DESC                 "Allowed recipients if ""zimbraPrefCalendarSendInviteDeniedAutoReply"" is TRUE: internal - Only send ""invite denied"" auto-response if the sender of the original invite is an internal user. sameDomain - Only send ""invite denied"" auto-response if the sender of the original invite is in the same domain as the invitee. all - No restrictions on who to send ""invite denied"" auto-responses to."
 *   ID                        id-at-zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply_Type = (el: _Element): DirectoryString => {
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
        throw new ASN1SizeError("zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply violates SIZE constraint");
    }
    return value;
};

export
const zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Allowed recipients if \"zimbraPrefCalendarSendInviteDeniedAutoReply\" is TRUE: internal - Only send \"invite denied\" auto-response if the sender of the original invite is an internal user. sameDomain - Only send \"invite denied\" auto-response if the sender of the original invite is in the same domain as the invitee. all - No restrictions on who to send \"invite denied\" auto-responses to." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

