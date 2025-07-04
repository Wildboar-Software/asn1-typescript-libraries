/* eslint-disable */
import { id_sc_collectiveAttributeSubentry } from "../InformationFramework/id-sc-collectiveAttributeSubentry.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
/**
 * @summary collectiveAttributeSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectiveAttributeSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   ID            id-sc-collectiveAttributeSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const collectiveAttributeSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_sc_collectiveAttributeSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
