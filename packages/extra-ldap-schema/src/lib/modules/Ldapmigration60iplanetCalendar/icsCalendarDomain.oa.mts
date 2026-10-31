/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_icsCalendarDomain } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarDomain.va.mjs";


/**
 * @summary icsCalendarDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * icsCalendarDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { icsAllowedServiceAccess
 *                               | icsAllowRights
 *                               | icsAnonymousAllowWrite
 *                               | icsAnonymousCalendar
 *                               | icsAnonymousDefaultSet
 *                               | icsAnonymousLogin
 *                               | icsAnonymousSet
 *                               | icsDWPBackEndHosts
 *                               | icsExtended
 *                               | icsExtendedDomainPrefs
 *                               | icsDefaultAccess
 *                               | icsDomainAllowed
 *                               | icsDomainNames
 *                               | icsDomainNotAllowed
 *                               | icsMandatorySubscribed
 *                               | icsMandatoryView
 *                               | icsPreferredHost
 *                               | icsQuota
 *                               | icsRecurrenceBound
 *                               | icsRecurrenceDate
 *                               | icsSessionTimeout
 *                               | icsSourceHtml
 *                               | icsStatus
 *                               | icsTimezone
 *                               | davAllowedServices
 *                               | icsDomainAcl }
 *   LDAP-NAME                 {"icsCalendarDomain"}
 *   LDAP-DESC                 "Standard Object Class"
 *   ID                        id-oc-icsCalendarDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const icsCalendarDomain: OBJECT_CLASS = undefined;

/* eslint-enable */
