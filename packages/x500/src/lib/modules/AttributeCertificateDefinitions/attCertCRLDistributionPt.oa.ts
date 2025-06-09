/* eslint-disable */
import { attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/attributeAuthorityRevocationList.oa.js";
import { attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/attributeCertificateRevocationList.oa.js";
import { eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/eeAttrCertificateRevocationList.oa.js";
import { id_oc_attCertCRLDistributionPts } from "../AttributeCertificateDefinitions/id-oc-attCertCRLDistributionPts.va.js";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { top } from "../InformationFramework/top.oa.js";
export { attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/attributeAuthorityRevocationList.oa.js";
export { attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/attributeCertificateRevocationList.oa.js";
export { eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/eeAttrCertificateRevocationList.oa.js";
export { id_oc_attCertCRLDistributionPts } from "../AttributeCertificateDefinitions/id-oc-attCertCRLDistributionPts.va.js";
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

/* START_OF_SYMBOL_DEFINITION attCertCRLDistributionPt */
/**
 * @summary attCertCRLDistributionPt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attCertCRLDistributionPt OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {attributeCertificateRevocationList |
 *                 eeAttrCertificateRevocationList |
 *                 attributeAuthorityRevocationList}
 *   ID           id-oc-attCertCRLDistributionPts }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const attCertCRLDistributionPt: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        attributeCertificateRevocationList,
        eeAttrCertificateRevocationList,
        attributeAuthorityRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_attCertCRLDistributionPts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attCertCRLDistributionPt */

/* eslint-enable */
