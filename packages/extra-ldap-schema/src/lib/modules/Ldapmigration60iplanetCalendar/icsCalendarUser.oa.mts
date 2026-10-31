/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_icsCalendarUser } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarUser.va.mjs";


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
const icsCalendarUser: OBJECT_CLASS = undefined;

/* eslint-enable */
