/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { nswcalDisallowAccess } from "../LdapNsWcal/nswcalDisallowAccess.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { icsExtendedUserPrefs } from "../Ldapmigration55imsIcal/icsExtendedUserPrefs.oa.mjs";
import { aclGroupAddr } from "../Ldapmigration56imsSchema/aclGroupAddr.oa.mjs";
import { id_oc_icsCalendarUser } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarUser.va.mjs";
import { mailAlternateAddress } from "../QMailSchema/mailAlternateAddress.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { icsAllowedServiceAccess } from "./icsAllowedServiceAccess.oa.mjs";
import { icsCalendar } from "./icsCalendar.oa.mjs";
import { icsCalendarOwned } from "./icsCalendarOwned.oa.mjs";
import { icsDWPHost } from "./icsDWPHost.oa.mjs";
import { icsDefaultSet } from "./icsDefaultSet.oa.mjs";
import { icsExtended } from "./icsExtended.oa.mjs";
import { icsFirstDay } from "./icsFirstDay.oa.mjs";
import { icsFreeBusy } from "./icsFreeBusy.oa.mjs";
import { icsGeo } from "./icsGeo.oa.mjs";
import { icsPartition } from "./icsPartition.oa.mjs";
import { icsPreferredHost } from "./icsPreferredHost.oa.mjs";
import { icsQuota } from "./icsQuota.oa.mjs";
import { icsSet } from "./icsSet.oa.mjs";
import { icsStatus } from "./icsStatus.oa.mjs";
import { icsSubscribed } from "./icsSubscribed.oa.mjs";
import { icsTimezone } from "./icsTimezone.oa.mjs";

/**
 * @summary icsCalendarUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * icsCalendarUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { commonName
 *                               | givenName
 *                               | mail
 *                               | mailAlternateAddress
 *                               | preferredLanguage
 *                               | surname
 *                               | uid
 *                               | userPassword
 *                               | icsAllowedServiceAccess
 *                               | icsCalendar
 *                               | icsCalendarOwned
 *                               | icsDefaultSet
 *                               | icsDWPHost
 *                               | icsExtended
 *                               | icsExtendedUserPrefs
 *                               | icsFirstDay
 *                               | icsFreeBusy
 *                               | icsGeo
 *                               | icsPartition
 *                               | icsPreferredHost
 *                               | icsQuota
 *                               | icsSet
 *                               | icsStatus
 *                               | icsSubscribed
 *                               | icsTimezone
 *                               | nswcalDisallowAccess
 *                               | aclGroupAddr }
 *   LDAP-NAME                 {"icsCalendarUser"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-icsCalendarUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const icsCalendarUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, givenName, mail, mailAlternateAddress, preferredLanguage, surname, uid, userPassword, icsAllowedServiceAccess, icsCalendar, icsCalendarOwned, icsDefaultSet, icsDWPHost, icsExtended, icsExtendedUserPrefs, icsFirstDay, icsFreeBusy, icsGeo, icsPartition, icsPreferredHost, icsQuota, icsSet, icsStatus, icsSubscribed, icsTimezone, nswcalDisallowAccess, aclGroupAddr] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["icsCalendarUser"],
    "&ldapDesc": "Standard Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_icsCalendarUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
