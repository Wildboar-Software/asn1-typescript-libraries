/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_sunUCPreferences } from "../Ldapmigration98nsDummyUwc/id-oc-sunUCPreferences.va.mjs";


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
const sunUCPreferences: OBJECT_CLASS = undefined;

/* eslint-enable */
