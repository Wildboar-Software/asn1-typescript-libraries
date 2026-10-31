/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { person } from "../SelectedObjectClasses/person.oa.mjs";
// export { id_oc_organizationalPerson } from "../SelectedObjectClasses/id-oc-organizationalPerson.va.mjs";


/**
 * @summary organizationalPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationalPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF  {person}
 *   MAY CONTAIN  {LocaleAttributeSet |
 *                 PostalAttributeSet |
 *                 TelecommunicationAttributeSet |
 *                 organizationalUnitName |
 *                 title}
 *   LDAP-NAME    {"organizationalPerson"}  -- RFC 4519
 *   ID           id-oc-organizationalPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const organizationalPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
