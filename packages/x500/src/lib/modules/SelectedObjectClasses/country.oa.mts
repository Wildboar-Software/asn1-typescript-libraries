/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.mjs";
import { id_oc_country } from "../SelectedObjectClasses/id-oc-country.va.mjs";
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
export { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
export { description } from "../SelectedAttributeTypes/description.oa.mjs";
export { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa.mjs";
export { id_oc_country } from "../SelectedObjectClasses/id-oc-country.va.mjs";

/* START_OF_SYMBOL_DEFINITION country */
/**
 * @summary country
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * country OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {countryName}
 *   MAY CONTAIN   {description |
 *                  searchGuide}
 *   LDAP-NAME     {"country"}  -- RFC 4519
 *   ID            id-oc-country }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const country: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [countryName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        searchGuide,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["country"],
    "&id": id_oc_country /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION country */

/* eslint-enable */
