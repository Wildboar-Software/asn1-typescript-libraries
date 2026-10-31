/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { inetMailGroup } from "../Ldapmigration56imsSchema/inetMailGroup.oa.mjs";
// export { id_oc_soniaMailingList } from "../Ldapmigration97sonia/id-oc-soniaMailingList.va.mjs";


/**
 * @summary soniaMailingList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaMailingList OBJECT-CLASS ::= {
 *   SUBCLASS OF               { inetMailGroup }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { soniaMailingListBroadcastType
 *                               | soniaMailingListAdministrator
 *                               | soniaMailingListJoinabilityFilter
 *                               | soniaMailingListAllowedBroadcaster }
 *   LDAP-NAME                 {"soniaMailingList"}
 *   ID                        id-oc-soniaMailingList }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaMailingList: OBJECT_CLASS = undefined;

/* eslint-enable */
