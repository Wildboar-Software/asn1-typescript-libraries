/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { sambaOptionName } from "../SambaV3Schema/sambaOptionName.oa.mjs";


/**
 * @summary sambaConfigOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaConfigOption OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {sambaOptionName}
 *     MAY CONTAIN     {sambaBoolOption | sambaIntegerOption | sambaStringListOption | sambaStringOption | description}
 *     LDAP-NAME       {"sambaConfigOption"}
 *     LDAP-DESC       "Samba Configuration Option"
 *     ID              { 1 3 6 1 4 1 7165 2 2 12 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaConfigOption: OBJECT_CLASS = undefined;

/* eslint-enable */
