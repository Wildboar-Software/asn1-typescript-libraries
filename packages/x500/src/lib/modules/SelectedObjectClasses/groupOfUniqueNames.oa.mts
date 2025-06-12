/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { uniqueMember } from "../SelectedAttributeTypes/uniqueMember.oa.mjs";
import { id_oc_groupOfUniqueNames } from "../SelectedObjectClasses/id-oc-groupOfUniqueNames.va.mjs";
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
export { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
export { description } from "../SelectedAttributeTypes/description.oa.mjs";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
export { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
export { owner } from "../SelectedAttributeTypes/owner.oa.mjs";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
export { uniqueMember } from "../SelectedAttributeTypes/uniqueMember.oa.mjs";
export { id_oc_groupOfUniqueNames } from "../SelectedObjectClasses/id-oc-groupOfUniqueNames.va.mjs";

/* START_OF_SYMBOL_DEFINITION groupOfUniqueNames */
/**
 * @summary groupOfUniqueNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * groupOfUniqueNames OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName |
 *                  uniqueMember}
 *   MAY CONTAIN   {description |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  owner |
 *                  seeAlso |
 *                  businessCategory}
 *   LDAP-NAME     {"groupOfUniqueNames"}  -- RFC 4519
 *   ID            id-oc-groupOfUniqueNames }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const groupOfUniqueNames: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        commonName,
        uniqueMember,
    ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        organizationName,
        organizationalUnitName,
        owner,
        seeAlso,
        businessCategory,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["groupOfUniqueNames"],
    "&id": id_oc_groupOfUniqueNames /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION groupOfUniqueNames */

/* eslint-enable */
