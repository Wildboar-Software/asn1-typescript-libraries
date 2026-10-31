/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { id_oc_icsCalendarResource } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarResource.va.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { icsAlias } from "./icsAlias.oa.mjs";
import { icsAutoaccept } from "./icsAutoaccept.oa.mjs";
import { icsCalendar } from "./icsCalendar.oa.mjs";
import { icsCapacity } from "./icsCapacity.oa.mjs";
import { icsContact } from "./icsContact.oa.mjs";
import { icsDWPHost } from "./icsDWPHost.oa.mjs";
import { icsDefaultacl } from "./icsDefaultacl.oa.mjs";
import { icsDoublebooking } from "./icsDoublebooking.oa.mjs";
import { icsExtended } from "./icsExtended.oa.mjs";
import { icsExtendedResourcePrefs } from "./icsExtendedResourcePrefs.oa.mjs";
import { icsGeo } from "./icsGeo.oa.mjs";
import { icsPartition } from "./icsPartition.oa.mjs";
import { icsPreferredHost } from "./icsPreferredHost.oa.mjs";
import { icsQuota } from "./icsQuota.oa.mjs";
import { icsSecondaryowners } from "./icsSecondaryowners.oa.mjs";
import { icsStatus } from "./icsStatus.oa.mjs";
import { icsTimezone } from "./icsTimezone.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, mail, mailAlternateAddress, icsAlias, icsCalendar, icsCapacity, icsContact, icsDWPHost, icsExtended, icsExtendedResourcePrefs, icsGeo, icsPartition, icsPreferredHost, icsQuota, icsStatus, icsTimezone, uid, description, owner, icsSecondaryowners, icsDefaultacl, icsDoublebooking, icsAutoaccept] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["icsCalendarResource"],
    "&ldapDesc": "Standard Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_icsCalendarResource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
