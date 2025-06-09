/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { top } from "../InformationFramework/top.oa.js";
import { contentUrl } from "../SelectedAttributeTypes/contentUrl.oa.js";
import { epc } from "../SelectedAttributeTypes/epc.oa.js";
import { epcInUrn } from "../SelectedAttributeTypes/epcInUrn.oa.js";
import { tagLocation } from "../SelectedAttributeTypes/tagLocation.oa.js";
import { id_oc_epcTagInfoObj } from "../SelectedObjectClasses/id-oc-epcTagInfoObj.va.js";
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
export { contentUrl } from "../SelectedAttributeTypes/contentUrl.oa.js";
export { epc } from "../SelectedAttributeTypes/epc.oa.js";
export { epcInUrn } from "../SelectedAttributeTypes/epcInUrn.oa.js";
export { tagLocation } from "../SelectedAttributeTypes/tagLocation.oa.js";
export { id_oc_epcTagInfoObj } from "../SelectedObjectClasses/id-oc-epcTagInfoObj.va.js";

/* START_OF_SYMBOL_DEFINITION epcTagInfoObj */
/**
 * @summary epcTagInfoObj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcTagInfoObj OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { epc |
 *                  epcInUrn |
 *                  contentUrl |
 *                  tagLocation }
 *   LDAP-NAME    {"epcTagInfoObj"}
 *   ID           id-oc-epcTagInfoObj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const epcTagInfoObj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        epc,
        epcInUrn,
        contentUrl,
        tagLocation,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["epcTagInfoObj"],
    "&id": id_oc_epcTagInfoObj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION epcTagInfoObj */

/* eslint-enable */
