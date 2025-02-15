/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta";
import { top } from "../InformationFramework/top.oa";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
import { id_oc_organizationalUnit } from "../SelectedObjectClasses/id-oc-organizationalUnit.va";
import { OrganizationalAttributeSet } from "../SelectedObjectClasses/OrganizationalAttributeSet.osa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
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
} from "../InformationFramework/ObjectClassKind.ta";
export { top } from "../InformationFramework/top.oa";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
export { id_oc_organizationalUnit } from "../SelectedObjectClasses/id-oc-organizationalUnit.va";
export { OrganizationalAttributeSet } from "../SelectedObjectClasses/OrganizationalAttributeSet.osa";

/* START_OF_SYMBOL_DEFINITION organizationalUnit */
/**
 * @summary organizationalUnit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {organizationalUnitName}
 *   MAY CONTAIN   {OrganizationalAttributeSet}
 *   LDAP-NAME     {"organizationalUnit"}  -- RFC 4519
 *   ID            id-oc-organizationalUnit }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organizationalUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        ...OrganizationalAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["organizationalUnit"],
    "&id": id_oc_organizationalUnit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION organizationalUnit */

/* eslint-enable */
