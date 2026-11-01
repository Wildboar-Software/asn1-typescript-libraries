/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { groupid } from "../Ldapmigration56imsSchema/groupid.oa.mjs";
import { id_oc_icsCalendarGroup } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarGroup.va.mjs";

import { icsSecondaryowners } from "../Ldapmigration60iplanetCalendar/icsSecondaryowners.oa.mjs";
import { icsDefaultacl } from "../Ldapmigration60iplanetCalendar/icsDefaultacl.oa.mjs";
import { icsCalendar } from "../Ldapmigration60iplanetCalendar/icsCalendar.oa.mjs";
import { icsStatus } from "../Ldapmigration60iplanetCalendar/icsStatus.oa.mjs";
import { icsTimezone } from "../Ldapmigration60iplanetCalendar/icsTimezone.oa.mjs";
import { icsDWPHost } from "../Ldapmigration60iplanetCalendar/icsDWPHost.oa.mjs";
import { icsDoublebooking } from "../Ldapmigration60iplanetCalendar/icsDoublebooking.oa.mjs";
import { icsAutoaccept } from "../Ldapmigration60iplanetCalendar/icsAutoaccept.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
/**
 * @summary icsCalendarGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * icsCalendarGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { groupid }
 *   MAY CONTAIN               { icsSecondaryowners
 *                               | icsDefaultacl
 *                               | icsCalendar
 *                               | icsStatus
 *                               | icsTimezone
 *                               | icsDWPHost
 *                               | icsDoublebooking
 *                               | icsAutoaccept
 *                               | mail }
 *   LDAP-NAME                 {"icsCalendarGroup"}
 *   LDAP-DESC                 "Calendar Group object"
 *   ID                        id-oc-icsCalendarGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const icsCalendarGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ groupid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ icsSecondaryowners, icsDefaultacl, icsCalendar, icsStatus, icsTimezone, icsDWPHost, icsDoublebooking, icsAutoaccept, mail, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "icsCalendarGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Calendar Group object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_icsCalendarGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
