/* eslint-disable */
import { attributeIntegrityInfo } from "../EnhancedSecurity/attributeIntegrityInfo.oa.js";
import { id_oc_integrityInfo } from "../EnhancedSecurity/id-oc-integrityInfo.va.js";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { top } from "../InformationFramework/top.oa.js";
export { attributeIntegrityInfo } from "../EnhancedSecurity/attributeIntegrityInfo.oa.js";
export { id_oc_integrityInfo } from "../EnhancedSecurity/id-oc-integrityInfo.va.js";
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

/* START_OF_SYMBOL_DEFINITION integrityInfo */
/**
 * @summary integrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integrityInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {attributeIntegrityInfo}
 *   ID            id-oc-integrityInfo }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const integrityInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [attributeIntegrityInfo] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_integrityInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION integrityInfo */

/* eslint-enable */
