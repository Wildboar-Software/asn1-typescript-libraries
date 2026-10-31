/* eslint-disable */
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_sc_accessControlSubentry } from "../InformationFramework/id-sc-accessControlSubentry.va.mjs";
import { type OBJECT_CLASS } from "./OBJECT-CLASS.oca.mjs";

/**
 * @summary accessControlSubentry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * accessControlSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   ID            id-sc-accessControlSubentry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const accessControlSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_sc_accessControlSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
