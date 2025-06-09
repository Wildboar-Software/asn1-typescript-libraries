/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { top } from "../InformationFramework/top.oa.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
import { description } from "../SelectedAttributeTypes/description.oa.js";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.js";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.js";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.js";
import { owner } from "../SelectedAttributeTypes/owner.oa.js";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.js";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.js";
import { id_oc_device } from "../SelectedObjectClasses/id-oc-device.va.js";
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
export { localityName } from "../SelectedAttributeTypes/localityName.oa.js";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.js";
export { organizationName } from "../SelectedAttributeTypes/organizationName.oa.js";
export { owner } from "../SelectedAttributeTypes/owner.oa.js";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.js";
export { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.js";
export { id_oc_device } from "../SelectedObjectClasses/id-oc-device.va.js";

/* START_OF_SYMBOL_DEFINITION device */
/**
 * @summary device
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * device OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {description |
 *                  localityName |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  owner |
 *                  seeAlso |
 *                  serialNumber}
 *   LDAP-NAME      {"device"}  -- RFC 4519
 *   ID            id-oc-device }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const device: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        localityName,
        organizationName,
        organizationalUnitName,
        owner,
        seeAlso,
        serialNumber,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["device"],
    "&id": id_oc_device /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION device */

/* eslint-enable */
