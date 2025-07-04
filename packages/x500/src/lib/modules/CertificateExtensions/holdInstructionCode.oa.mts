/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    HoldInstruction,
    _decode_HoldInstruction,
    _encode_HoldInstruction,
} from "../CertificateExtensions/HoldInstruction.ta.mjs";
import { id_ce_holdInstructionCode } from "../CertificateExtensions/id-ce-holdInstructionCode.va.mjs";
/**
 * @summary holdInstructionCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * holdInstructionCode EXTENSION ::= {
 *   SYNTAX         HoldInstruction
 *   IDENTIFIED BY  id-ce-holdInstructionCode }
 * ```
 *
 * @constant
 * @type {EXTENSION<HoldInstruction>}
 * @implements {EXTENSION<HoldInstruction>}
 */
export const holdInstructionCode: EXTENSION<HoldInstruction> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_HoldInstruction,
    },
    encoderFor: {
        "&ExtnType": _encode_HoldInstruction,
    },
    "&id": id_ce_holdInstructionCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
