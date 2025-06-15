/* eslint-disable */
import { delegationPath } from "../AttributeCertificateDefinitions/delegationPath.oa.mjs";
import { id_oc_pmiDelegationPath } from "../AttributeCertificateDefinitions/id-oc-pmiDelegationPath.va.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
/**
 * @summary pmiDelegationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiDelegationPath OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {delegationPath}
 *   ID           id-oc-pmiDelegationPath }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiDelegationPath: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [delegationPath] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pmiDelegationPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
