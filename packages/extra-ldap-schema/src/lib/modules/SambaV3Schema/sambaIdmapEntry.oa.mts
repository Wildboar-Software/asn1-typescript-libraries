/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";


/**
 * @summary sambaIdmapEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaIdmapEntry OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MUST CONTAIN    {sambaSID}
 *     MAY CONTAIN     {gidNumber | uidNumber}
 *     LDAP-NAME       {"sambaIdmapEntry"}
 *     LDAP-DESC       "Mapping from a SID to an ID"
 *     ID              { 1 3 6 1 4 1 7165 2 2 8 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaIdmapEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
