/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { roleOccupant } from "../SelectedAttributeTypes/roleOccupant.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { id_oc_organizationalRole } from "../SelectedObjectClasses/id-oc-organizationalRole.va.mjs";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.mjs";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.mjs";
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
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
export { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
export { roleOccupant } from "../SelectedAttributeTypes/roleOccupant.oa.mjs";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
export { id_oc_organizationalRole } from "../SelectedObjectClasses/id-oc-organizationalRole.va.mjs";
export { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa.mjs";
export { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa.mjs";
export { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa.mjs";

/* START_OF_SYMBOL_DEFINITION organizationalRole */
/**
 * @summary organizationalRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalRole OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {description |
 *                  LocaleAttributeSet |
 *                  organizationalUnitName |
 *                  PostalAttributeSet |
 *                  preferredDeliveryMethod |
 *                  roleOccupant |
 *                  seeAlso |
 *                  TelecommunicationAttributeSet}
 *   LDAP-NAME      {"organizationalRole"}  -- RFC 4519
 *   ID            id-oc-organizationalRole }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organizationalRole: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        ...LocaleAttributeSet,
        organizationalUnitName,
        ...PostalAttributeSet,
        preferredDeliveryMethod,
        roleOccupant,
        seeAlso,
        ...TelecommunicationAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["organizationalRole"],
    "&id": id_oc_organizationalRole /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION organizationalRole */

/* eslint-enable */
