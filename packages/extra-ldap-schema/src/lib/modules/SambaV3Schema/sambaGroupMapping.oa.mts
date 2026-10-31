/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";


/**
 * @summary sambaGroupMapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaGroupMapping OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {gidNumber | sambaGroupType | sambaSID}
 *     MAY CONTAIN     {description | displayName | sambaSIDList}
 *     LDAP-NAME       {"sambaGroupMapping"}
 *     LDAP-DESC       "Samba Group Mapping"
 *     ID              { 1 3 6 1 4 1 7165 2 2 4 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaGroupMapping: OBJECT_CLASS = undefined;

/* eslint-enable */
