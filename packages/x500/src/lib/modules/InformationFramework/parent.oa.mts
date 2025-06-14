/* eslint-disable */
import { id_oc_parent } from "../InformationFramework/id-oc-parent.va.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
/* START_OF_SYMBOL_DEFINITION parent */
/**
 * @summary parent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * parent OBJECT-CLASS ::= {
 *   KIND          abstract
 *   ID            id-oc-parent }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const parent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_parent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION parent */

/* eslint-enable */
