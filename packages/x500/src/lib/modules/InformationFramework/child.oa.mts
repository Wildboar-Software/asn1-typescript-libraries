/* eslint-disable */
import { id_oc_child } from "../InformationFramework/id-oc-child.va.mjs";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
/**
 * @summary child
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * child OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   ID            id-oc-child }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const child: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_child /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
