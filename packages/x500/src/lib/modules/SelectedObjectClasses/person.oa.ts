/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.js";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { top } from "../InformationFramework/top.oa.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
import { description } from "../SelectedAttributeTypes/description.oa.js";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.js";
import { surname } from "../SelectedAttributeTypes/surname.oa.js";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.js";
import { id_oc_person } from "../SelectedObjectClasses/id-oc-person.va.js";
export { userPassword } from "../AuthenticationFramework/userPassword.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta.js";
export { top } from "../InformationFramework/top.oa.js";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
export { description } from "../SelectedAttributeTypes/description.oa.js";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.js";
export { surname } from "../SelectedAttributeTypes/surname.oa.js";
export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.js";
export { id_oc_person } from "../SelectedObjectClasses/id-oc-person.va.js";

/* START_OF_SYMBOL_DEFINITION person */
/**
 * @summary person
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * person OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName |
 *                  surname}
 *   MAY CONTAIN   {description |
 *                  telephoneNumber |
 *                  userPassword |
 *                  seeAlso}
 *   LDAP-NAME     {"person"}  -- RFC 4519
 *   ID            id-oc-person }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const person: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, surname] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        telephoneNumber,
        userPassword,
        seeAlso,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["person"],
    "&id": id_oc_person /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION person */

/* eslint-enable */
