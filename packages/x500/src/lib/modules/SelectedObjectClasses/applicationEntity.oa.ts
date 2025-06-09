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
import { presentationAddress } from "../SelectedAttributeTypes/presentationAddress.oa.js";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.js";
import { supportedApplicationContext } from "../SelectedAttributeTypes/supportedApplicationContext.oa.js";
import { id_oc_applicationEntity } from "../SelectedObjectClasses/id-oc-applicationEntity.va.js";
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
export { presentationAddress } from "../SelectedAttributeTypes/presentationAddress.oa.js";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.js";
export { supportedApplicationContext } from "../SelectedAttributeTypes/supportedApplicationContext.oa.js";
export { id_oc_applicationEntity } from "../SelectedObjectClasses/id-oc-applicationEntity.va.js";

/* START_OF_SYMBOL_DEFINITION applicationEntity */
/**
 * @summary applicationEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applicationEntity OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName |
 *                  presentationAddress}
 *   MAY CONTAIN   {description |
 *                  localityName |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  seeAlso |
 *                  supportedApplicationContext}
 *   LDAP-NAME     {"applicationEntity"} -- RFC 2256
 *   ID            id-oc-applicationEntity }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const applicationEntity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        commonName,
        presentationAddress,
    ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        localityName,
        organizationName,
        organizationalUnitName,
        seeAlso,
        supportedApplicationContext,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["applicationEntity"],
    "&id": id_oc_applicationEntity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION applicationEntity */

/* eslint-enable */
