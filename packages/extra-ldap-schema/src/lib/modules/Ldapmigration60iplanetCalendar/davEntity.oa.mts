/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_davEntity } from "../Ldapmigration60iplanetCalendar/id-oc-davEntity.va.mjs";


/**
 * @summary davEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * davEntity OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mail
 *                               | davStore
 *                               | davAllowedServices
 *                               | davEventNotification
 *                               | davEventNotificationDestination
 *                               | davTimezone
 *                               | davUniqueId }
 *   LDAP-NAME                 {"davEntity"}
 *   LDAP-DESC                 "Common dav object"
 *   ID                        id-oc-davEntity }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const davEntity: OBJECT_CLASS = undefined;

/* eslint-enable */
