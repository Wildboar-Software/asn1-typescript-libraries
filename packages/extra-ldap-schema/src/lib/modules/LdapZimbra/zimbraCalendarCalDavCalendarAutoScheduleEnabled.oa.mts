/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_zimbraCalendarCalDavCalendarAutoScheduleEnabled } from "../LdapZimbra/id-at-zimbraCalendarCalDavCalendarAutoScheduleEnabled.va.mjs";


/**
 * @summary zimbraCalendarCalDavCalendarAutoScheduleEnabled
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCalendarCalDavCalendarAutoScheduleEnabled ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraCalendarCalDavCalendarAutoScheduleEnabled"}
 *   LDAP-DESC                 "Enable support for the the ""calendar-auto-schedule"" feature of CalDAV - see RFC6638. If FALSE, the ""calendar-schedule"" feature of CalDAV is advertised instead - see draft-desruisseaux-caldav-sched-03. Note that the value of ""zimbraCalendarCalDavDisableScheduling"" takes precedence over this attribute."
 *   ID                        id-at-zimbraCalendarCalDavCalendarAutoScheduleEnabled }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraCalendarCalDavCalendarAutoScheduleEnabled: ATTRIBUTE<BOOLEAN> = {
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
    "&ldapName": [ "zimbraCalendarCalDavCalendarAutoScheduleEnabled" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Enable support for the the \"calendar-auto-schedule\" feature of CalDAV - see RFC6638. If FALSE, the \"calendar-schedule\" feature of CalDAV is advertised instead - see draft-desruisseaux-caldav-sched-03. Note that the value of \"zimbraCalendarCalDavDisableScheduling\" takes precedence over this attribute." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraCalendarCalDavCalendarAutoScheduleEnabled /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

