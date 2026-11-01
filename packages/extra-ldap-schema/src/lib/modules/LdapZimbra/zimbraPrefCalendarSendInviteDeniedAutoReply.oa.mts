/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_zimbraPrefCalendarSendInviteDeniedAutoReply } from "../LdapZimbra/id-at-zimbraPrefCalendarSendInviteDeniedAutoReply.va.mjs";


/**
 * @summary zimbraPrefCalendarSendInviteDeniedAutoReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraPrefCalendarSendInviteDeniedAutoReply ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraPrefCalendarSendInviteDeniedAutoReply"}
 *   LDAP-DESC                 "If an invite is received from an organizer who does not have permission to invite this user to a meeting, send an auto-decline reply. Note that zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply may further restrict who can receive this reply."
 *   ID                        id-at-zimbraPrefCalendarSendInviteDeniedAutoReply }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraPrefCalendarSendInviteDeniedAutoReply: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraPrefCalendarSendInviteDeniedAutoReply" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "If an invite is received from an organizer who does not have permission to invite this user to a meeting, send an auto-decline reply. Note that zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply may further restrict who can receive this reply." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraPrefCalendarSendInviteDeniedAutoReply /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

