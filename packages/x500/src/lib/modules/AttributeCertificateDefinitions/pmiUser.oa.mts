/* eslint-disable */
import { attributeCertificateAttribute } from "../AttributeCertificateDefinitions/attributeCertificateAttribute.oa.mjs";
import { id_oc_pmiUser } from "../AttributeCertificateDefinitions/id-oc-pmiUser.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
/**
 * @summary pmiUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiUser OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {attributeCertificateAttribute}
 *   ID           id-oc-pmiUser }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        attributeCertificateAttribute,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pmiUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
