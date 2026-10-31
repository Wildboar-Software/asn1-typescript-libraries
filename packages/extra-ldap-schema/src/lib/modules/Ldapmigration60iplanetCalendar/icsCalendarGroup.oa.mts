/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { groupid } from "../Ldapmigration56imsSchema/groupid.oa.mjs";
// export { id_oc_icsCalendarGroup } from "../Ldapmigration60iplanetCalendar/id-oc-icsCalendarGroup.va.mjs";


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
const icsCalendarGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
