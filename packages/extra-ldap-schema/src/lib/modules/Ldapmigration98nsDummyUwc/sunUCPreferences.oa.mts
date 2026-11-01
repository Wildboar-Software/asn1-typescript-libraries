/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunUCPreferences } from "../Ldapmigration98nsDummyUwc/id-oc-sunUCPreferences.va.mjs";

import { sunUCDefaultApplication } from "../Ldapmigration98nsDummyUwc/sunUCDefaultApplication.oa.mjs";
import { sunUCTheme } from "../Ldapmigration98nsDummyUwc/sunUCTheme.oa.mjs";
import { sunUCColorScheme } from "../Ldapmigration98nsDummyUwc/sunUCColorScheme.oa.mjs";
import { sunUCDefaultEmailHandler } from "../Ldapmigration98nsDummyUwc/sunUCDefaultEmailHandler.oa.mjs";
import { sunUCDateFormat } from "../Ldapmigration98nsDummyUwc/sunUCDateFormat.oa.mjs";
import { sunUCDateDelimiter } from "../Ldapmigration98nsDummyUwc/sunUCDateDelimiter.oa.mjs";
import { sunUCTimeFormat } from "../Ldapmigration98nsDummyUwc/sunUCTimeFormat.oa.mjs";
import { sunUCTimeZone } from "../Ldapmigration98nsDummyUwc/sunUCTimeZone.oa.mjs";
import { sunUCMailSendProfiles } from "../Ldapmigration98nsDummyUwc/sunUCMailSendProfiles.oa.mjs";
import { sunUCExtendedUserPrefs } from "../Ldapmigration98nsDummyUwc/sunUCExtendedUserPrefs.oa.mjs";
import { nswmExtendedUserPrefs } from "../Ldapmigration50nsMail/nswmExtendedUserPrefs.oa.mjs";
import { icsExtendedUserPrefs } from "../Ldapmigration55imsIcal/icsExtendedUserPrefs.oa.mjs";
import { sunAbExtendedUserPrefs } from "../Ldapmigration98nsDummyUwc/sunAbExtendedUserPrefs.oa.mjs";
import { sunUCExtendedClientPrefs } from "../Ldapmigration98nsDummyUwc/sunUCExtendedClientPrefs.oa.mjs";
import { sunUCExternalMailProfile } from "../Ldapmigration98nsDummyUwc/sunUCExternalMailProfile.oa.mjs";
import { abEventNotificationDestination } from "../Ldapmigration98nsDummyUwc/abEventNotificationDestination.oa.mjs";
/**
 * @summary sunUCPreferences
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunUCPreferences OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { sunUCDefaultApplication
 *                               | sunUCTheme
 *                               | sunUCColorScheme
 *                               | sunUCDefaultEmailHandler
 *                               | sunUCDateFormat
 *                               | sunUCDateDelimiter
 *                               | sunUCTimeFormat
 *                               | sunUCTimeZone
 *                               | sunUCMailSendProfiles
 *                               | sunUCExtendedUserPrefs
 *                               | nswmExtendedUserPrefs
 *                               | icsExtendedUserPrefs
 *                               | sunAbExtendedUserPrefs
 *                               | sunUCExtendedClientPrefs
 *                               | sunUCExternalMailProfile
 *                               | abEventNotificationDestination }
 *   LDAP-NAME                 {"sunUCPreferences"}
 *   LDAP-DESC                 "UWC object class"
 *   ID                        id-oc-sunUCPreferences }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunUCPreferences: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunUCDefaultApplication, sunUCTheme, sunUCColorScheme, sunUCDefaultEmailHandler, sunUCDateFormat, sunUCDateDelimiter, sunUCTimeFormat, sunUCTimeZone, sunUCMailSendProfiles, sunUCExtendedUserPrefs, nswmExtendedUserPrefs, icsExtendedUserPrefs, sunAbExtendedUserPrefs, sunUCExtendedClientPrefs, sunUCExternalMailProfile, abEventNotificationDestination, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunUCPreferences" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "UWC object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunUCPreferences /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
