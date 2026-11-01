/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_icsCalendarResource } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarResource.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { icsAlias } from "../Ldapmigration60iplanetCalendar/icsAlias.oa.mjs";
import { icsCapacity } from "../Ldapmigration60iplanetCalendar/icsCapacity.oa.mjs";
import { icsContact } from "../Ldapmigration60iplanetCalendar/icsContact.oa.mjs";
import { icsDWPHost } from "../Ldapmigration60iplanetCalendar/icsDWPHost.oa.mjs";
import { icsExtended } from "../Ldapmigration60iplanetCalendar/icsExtended.oa.mjs";
import { icsExtendedResourcePrefs } from "../Ldapmigration60iplanetCalendar/icsExtendedResourcePrefs.oa.mjs";
import { icsGeo } from "../Ldapmigration60iplanetCalendar/icsGeo.oa.mjs";
import { icsPartition } from "../Ldapmigration60iplanetCalendar/icsPartition.oa.mjs";
import { icsPreferredHost } from "../Ldapmigration60iplanetCalendar/icsPreferredHost.oa.mjs";
import { icsQuota } from "../Ldapmigration60iplanetCalendar/icsQuota.oa.mjs";
import { icsStatus } from "../Ldapmigration60iplanetCalendar/icsStatus.oa.mjs";
import { icsTimezone } from "../Ldapmigration60iplanetCalendar/icsTimezone.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { icsSecondaryowners } from "../Ldapmigration60iplanetCalendar/icsSecondaryowners.oa.mjs";
import { icsDefaultacl } from "../Ldapmigration60iplanetCalendar/icsDefaultacl.oa.mjs";
import { icsDoublebooking } from "../Ldapmigration60iplanetCalendar/icsDoublebooking.oa.mjs";
import { icsAutoaccept } from "../Ldapmigration60iplanetCalendar/icsAutoaccept.oa.mjs";
import { icsCalendar } from "../Ldapmigration60iplanetCalendar/icsCalendar.oa.mjs";


/**
 * @summary icsCalendarResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * icsCalendarResource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { commonName
 *                               | mail
 *                               | mailAlternateAddress
 *                               | icsAlias
 *                               | icsCalendar
 *                               | icsCapacity
 *                               | icsContact
 *                               | icsDWPHost
 *                               | icsExtended
 *                               | icsExtendedResourcePrefs
 *                               | icsGeo
 *                               | icsPartition
 *                               | icsPreferredHost
 *                               | icsQuota
 *                               | icsStatus
 *                               | icsTimezone
 *                               | uid
 *                               | description
 *                               | owner
 *                               | icsSecondaryowners
 *                               | icsDefaultacl
 *                               | icsDoublebooking
 *                               | icsAutoaccept }
 *   LDAP-NAME                 {"icsCalendarResource"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-icsCalendarResource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const icsCalendarResource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, mail, mailAlternateAddress, icsAlias, icsCalendar, icsCapacity, icsContact, icsDWPHost, icsExtended, icsExtendedResourcePrefs, icsGeo, icsPartition, icsPreferredHost, icsQuota, icsStatus, icsTimezone, uid, description, owner, icsSecondaryowners, icsDefaultacl, icsDoublebooking, icsAutoaccept, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "icsCalendarResource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Standard Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_icsCalendarResource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

