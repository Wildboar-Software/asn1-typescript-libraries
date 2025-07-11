/* eslint-disable */
import type { OBJECT_CLASS } from "@wildboar/x500/InformationFramework";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "@wildboar/x500/InformationFramework";
import { top } from "@wildboar/x500/InformationFramework";
import { pkcs_9_oc_pkcsEntity } from "../PKCS-9/pkcs-9-oc-pkcsEntity.va.mjs";
import { PKCSEntityAttributeSet } from "../PKCS-9/PKCSEntityAttributeSet.osa.mjs";


/**
 * @summary pkcsEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcsEntity OBJECT-CLASS ::= {
 *         SUBCLASS OF     { top }
 *         KIND            auxiliary
 *         MAY CONTAIN     { PKCSEntityAttributeSet }
 *         ID              pkcs-9-oc-pkcsEntity
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pkcsEntity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        ...PKCSEntityAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": pkcs_9_oc_pkcsEntity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
