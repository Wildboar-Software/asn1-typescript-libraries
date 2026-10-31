/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_zimbraCalendarResource } from "../LdapZimbra/id-oc-zimbraCalendarResource.va.mjs";


/**
 * @summary zimbraCalendarResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCalendarResource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { displayName
 *                               | zimbraAccountCalendarUserType
 *                               | zimbraCalResType
 *                               | zimbraId }
 *   MAY CONTAIN               { zimbraCalResAutoAcceptDecline
 *                               | zimbraCalResAutoDeclineIfBusy
 *                               | zimbraCalResAutoDeclineRecurring
 *                               | zimbraCalResBuilding
 *                               | zimbraCalResCapacity
 *                               | zimbraCalResContactEmail
 *                               | zimbraCalResContactName
 *                               | zimbraCalResContactPhone
 *                               | zimbraCalResFloor
 *                               | zimbraCalResLocationDisplayName
 *                               | zimbraCalResMaxNumConflictsAllowed
 *                               | zimbraCalResMaxPercentConflictsAllowed
 *                               | zimbraCalResRoom
 *                               | zimbraCalResSite
 *                               | zimbraCreateTimestamp
 *                               | zimbraLocale }
 *   LDAP-NAME                 {"zimbraCalendarResource"}
 *   LDAP-DESC                 "Calendar resource object"
 *   ID                        id-oc-zimbraCalendarResource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraCalendarResource: OBJECT_CLASS = undefined;

/* eslint-enable */
