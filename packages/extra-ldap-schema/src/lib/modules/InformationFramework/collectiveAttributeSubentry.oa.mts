/* eslint-disable */
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_sc_collectiveAttributeSubentry } from "../InformationFramework/id-sc-collectiveAttributeSubentry.va.mjs";
import { type OBJECT_CLASS } from "./OBJECT-CLASS.oca.mjs";

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
export
const collectiveAttributeSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_sc_collectiveAttributeSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
