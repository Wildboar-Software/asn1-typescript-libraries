/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { sambaShareName } from "../SambaV3Schema/sambaShareName.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary sambaShare
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaShare OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {sambaShareName}
 *     MAY CONTAIN     {description}
 *     LDAP-NAME       {"sambaShare"}
 *     LDAP-DESC       "Samba Share Section"
 *     ID              { 1 3 6 1 4 1 7165 2 2 11 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaShare: OBJECT_CLASS = undefined;

/* eslint-enable */
