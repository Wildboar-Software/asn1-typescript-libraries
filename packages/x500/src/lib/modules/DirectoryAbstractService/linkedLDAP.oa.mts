/* eslint-disable */
import { id_opcode_linkedLDAP } from "../CommonProtocolSpecification/id-opcode-linkedLDAP.va.mjs";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import {
    LinkedArgument,
    _decode_LinkedArgument,
    _encode_LinkedArgument,
} from "../DirectoryAbstractService/LinkedArgument.ta.mjs";
import {
    LinkedResult,
    _decode_LinkedResult,
    _encode_LinkedResult,
} from "../DirectoryAbstractService/LinkedResult.ta.mjs";
/* START_OF_SYMBOL_DEFINITION linkedLDAP */
/**
 * @summary linkedLDAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * linkedLDAP OPERATION ::= {
 *   ARGUMENT    LinkedArgument
 *   RESULT      LinkedResult
 *   CODE        id-opcode-linkedLDAP }
 * ```
 *
 * @constant
 * @type {OPERATION<LinkedArgument, LinkedResult>}
 * @implements {OPERATION<LinkedArgument, LinkedResult>}
 */
export const linkedLDAP: OPERATION<LinkedArgument, LinkedResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LinkedArgument,
        "&ResultType": _decode_LinkedResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_LinkedArgument,
        "&ResultType": _encode_LinkedResult,
    },
    "&operationCode": id_opcode_linkedLDAP /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION linkedLDAP */

/* eslint-enable */
