/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { nswmExtendedUserPrefs } from "../Ldapmigration50nsMail/nswmExtendedUserPrefs.oa.mjs";
import { icsExtendedUserPrefs } from "../Ldapmigration55imsIcal/icsExtendedUserPrefs.oa.mjs";
import { id_oc_sunUCPreferences } from "../Ldapmigration98nsDummyUwc/id-oc-sunUCPreferences.va.mjs";
import { abEventNotificationDestination } from "./abEventNotificationDestination.oa.mjs";
import { sunAbExtendedUserPrefs } from "./sunAbExtendedUserPrefs.oa.mjs";
import { sunUCColorScheme } from "./sunUCColorScheme.oa.mjs";
import { sunUCDateDelimiter } from "./sunUCDateDelimiter.oa.mjs";
import { sunUCDateFormat } from "./sunUCDateFormat.oa.mjs";
import { sunUCDefaultApplication } from "./sunUCDefaultApplication.oa.mjs";
import { sunUCDefaultEmailHandler } from "./sunUCDefaultEmailHandler.oa.mjs";
import { sunUCExtendedClientPrefs } from "./sunUCExtendedClientPrefs.oa.mjs";
import { sunUCExtendedUserPrefs } from "./sunUCExtendedUserPrefs.oa.mjs";
import { sunUCExternalMailProfile } from "./sunUCExternalMailProfile.oa.mjs";
import { sunUCMailSendProfiles } from "./sunUCMailSendProfiles.oa.mjs";
import { sunUCTheme } from "./sunUCTheme.oa.mjs";
import { sunUCTimeFormat } from "./sunUCTimeFormat.oa.mjs";
import { sunUCTimeZone } from "./sunUCTimeZone.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sunUCDefaultApplication, sunUCTheme, sunUCColorScheme, sunUCDefaultEmailHandler, sunUCDateFormat, sunUCDateDelimiter, sunUCTimeFormat, sunUCTimeZone, sunUCMailSendProfiles, sunUCExtendedUserPrefs, nswmExtendedUserPrefs, icsExtendedUserPrefs, sunAbExtendedUserPrefs, sunUCExtendedClientPrefs, sunUCExternalMailProfile, abEventNotificationDestination] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunUCPreferences"],
    "&ldapDesc": "UWC object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunUCPreferences /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
