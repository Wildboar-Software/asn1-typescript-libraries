/* eslint-disable */
import { attributeIntegrityInfo } from "../EnhancedSecurity/attributeIntegrityInfo.oa.mjs";
import { id_oc_integrityInfo } from "../EnhancedSecurity/id-oc-integrityInfo.va.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
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
