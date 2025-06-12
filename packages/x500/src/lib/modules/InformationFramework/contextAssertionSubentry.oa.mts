/* eslint-disable */
import { contextAssertionDefaults } from "../InformationFramework/contextAssertionDefaults.oa.mjs";
import { id_sc_contextAssertionSubentry } from "../InformationFramework/id-sc-contextAssertionSubentry.va.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export { contextAssertionDefaults } from "../InformationFramework/contextAssertionDefaults.oa.mjs";
export { id_sc_contextAssertionSubentry } from "../InformationFramework/id-sc-contextAssertionSubentry.va.mjs";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
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
} from "../InformationFramework/ObjectClassKind.ta.mjs";

/* START_OF_SYMBOL_DEFINITION contextAssertionSubentry */
/**
 * @summary contextAssertionSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextAssertionSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {contextAssertionDefaults}
 *   ID            id-sc-contextAssertionSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const contextAssertionSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        contextAssertionDefaults,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_sc_contextAssertionSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION contextAssertionSubentry */

/* eslint-enable */
