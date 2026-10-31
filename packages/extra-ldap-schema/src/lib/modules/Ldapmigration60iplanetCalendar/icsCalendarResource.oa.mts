/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_icsCalendarResource } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarResource.va.mjs";


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
const icsCalendarResource: OBJECT_CLASS = undefined;

/* eslint-enable */
