/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_schacPersonalCharacteristics } from "../LdapSchac/id-oc-schacPersonalCharacteristics.va.mjs";


/**
 * @summary schacPersonalCharacteristics
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacPersonalCharacteristics OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacMotherTongue
 *                               | schacGender
 *                               | schacDateOfBirth
 *                               | schacPlaceOfBirth
 *                               | schacCountryOfCitizenship
 *                               | schacSn1
 *                               | schacSn2
 *                               | schacPersonalTitle }
 *   LDAP-NAME                 {"schacPersonalCharacteristics"}
 *   LDAP-DESC                 "Personal characteristics describe the individual person represented by the entry"
 *   ID                        id-oc-schacPersonalCharacteristics }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacPersonalCharacteristics: OBJECT_CLASS = undefined;

/* eslint-enable */
