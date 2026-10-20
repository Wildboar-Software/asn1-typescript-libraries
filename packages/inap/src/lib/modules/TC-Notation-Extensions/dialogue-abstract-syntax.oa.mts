/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { DialoguePDU, _decode_DialoguePDU, _encode_DialoguePDU } from "../DialoguePDUs/DialoguePDU.ta.mjs";
// export { DialoguePDU, _decode_DialoguePDU, _encode_DialoguePDU } from "../DialoguePDUs/DialoguePDU.ta.mjs";
import { dialogue_as_id } from "../DialoguePDUs/dialogue-as-id.va.mjs";
// export { dialogue_as_id } from "../DialoguePDUs/dialogue-as-id.va.mjs";


/**
 * @summary dialogue_abstract_syntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dialogue-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   DialoguePDU
 *   IDENTIFIED BY  dialogue-as-id
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<DialoguePDU>}
 * @implements {ABSTRACT_SYNTAX<DialoguePDU>}
 */
export
const dialogue_abstract_syntax: ABSTRACT_SYNTAX<DialoguePDU> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_DialoguePDU,
    },
    encoderFor: {
        "&Type": _encode_DialoguePDU,
    },
    "&id": dialogue_as_id /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
