/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { id_oc_person } from "../SelectedObjectClasses/id-oc-person.va.mjs";
export { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
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
} from "../InformationFramework/ObjectClassKind.ta.mjs";
export { top } from "../InformationFramework/top.oa.mjs";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
export { description } from "../SelectedAttributeTypes/description.oa.mjs";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
export { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
export { id_oc_person } from "../SelectedObjectClasses/id-oc-person.va.mjs";

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
