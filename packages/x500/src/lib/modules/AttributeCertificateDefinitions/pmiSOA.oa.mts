/* eslint-disable */
import { attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/attributeAuthorityRevocationList.oa.mjs";
import { attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/attributeCertificateRevocationList.oa.mjs";
import { attributeDescriptorCertificate } from "../AttributeCertificateDefinitions/attributeDescriptorCertificate.oa.mjs";
import { eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/eeAttrCertificateRevocationList.oa.mjs";
import { id_oc_pmiSOA } from "../AttributeCertificateDefinitions/id-oc-pmiSOA.va.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
/* START_OF_SYMBOL_DEFINITION pmiSOA */
/**
 * @summary pmiSOA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiSOA OBJECT-CLASS ::= { -- a PMI Source of Authority
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {attributeCertificateRevocationList |
 *                 eeAttrCertificateRevocationList |
 *                 attributeAuthorityRevocationList |
 *                 attributeDescriptorCertificate}
 *   ID           id-oc-pmiSOA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiSOA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        attributeCertificateRevocationList,
        eeAttrCertificateRevocationList,
        attributeAuthorityRevocationList,
        attributeDescriptorCertificate,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pmiSOA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pmiSOA */

/* eslint-enable */
