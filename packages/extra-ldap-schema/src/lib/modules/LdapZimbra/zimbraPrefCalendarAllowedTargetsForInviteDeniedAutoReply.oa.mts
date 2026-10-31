/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply } from "../LdapZimbra/id-at-zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply.va.mjs";
import {
    type DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";

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
export
const zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply: ATTRIBUTE<DirectoryString> = {
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
    "&ldapName": ["zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply"],
    "&ldapDesc": "Allowed recipients if \"zimbraPrefCalendarSendInviteDeniedAutoReply\" is TRUE: internal - Only send \"invite denied\" auto-response if the sender of the original invite is an internal user. sameDomain - Only send \"invite denied\" auto-response if the sender of the original invite is in the same domain as the invitee. all - No restrictions on who to send \"invite denied\" auto-responses to." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
