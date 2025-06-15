/* eslint-disable */
import { contextAssertionDefaults } from "../InformationFramework/contextAssertionDefaults.oa.mjs";
import { id_sc_contextAssertionSubentry } from "../InformationFramework/id-sc-contextAssertionSubentry.va.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
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

/* eslint-enable */
