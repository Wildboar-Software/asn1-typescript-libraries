/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";



/**
 * @summary uniDialogue_abstract_syntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uniDialogue-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   UniDialoguePDU
 *   IDENTIFIED BY  uniDialogue-as-id
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<UniDialoguePDU>}
 * @implements {ABSTRACT_SYNTAX<UniDialoguePDU>}
 */
export
const uniDialogue_abstract_syntax: ABSTRACT_SYNTAX<UniDialoguePDU> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_UniDialoguePDU,
    },
    encoderFor: {
        "&Type": _encode_UniDialoguePDU,
    },
    "&id": uniDialogue_as_id /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
