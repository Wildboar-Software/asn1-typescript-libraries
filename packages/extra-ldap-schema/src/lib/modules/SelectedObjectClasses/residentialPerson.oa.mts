/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { person } from "../SelectedObjectClasses/person.oa.mjs";
// export { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
// export { id_oc_residentialPerson } from "../SelectedObjectClasses/id-oc-residentialPerson.va.mjs";


/**
 * @summary residentialPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * residentialPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF   {person}
 *   MUST CONTAIN  {localityName}
 *   MAY CONTAIN   {LocaleAttributeSet |
 *                  PostalAttributeSet |
 *                  preferredDeliveryMethod |
 *                  TelecommunicationAttributeSet |
 *                  businessCategory}
 *   LDAP-NAME     {"residentialPerson"}  -- RFC 4519
 *   ID            id-oc-residentialPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const residentialPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
