/* eslint-disable */
import { id_opcode_abandon } from "../CommonProtocolSpecification/id-opcode-abandon.va.js";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
import {
    AbandonArgument,
    _decode_AbandonArgument,
    _encode_AbandonArgument,
} from "../DirectoryAbstractService/AbandonArgument.ta.js";
import { abandonFailed } from "../DirectoryAbstractService/abandonFailed.oa.js";
import {
    AbandonResult,
    _decode_AbandonResult,
    _encode_AbandonResult,
} from "../DirectoryAbstractService/AbandonResult.ta.js";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta.js";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca.js";
export { id_opcode_abandon } from "../CommonProtocolSpecification/id-opcode-abandon.va.js";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.js";
export {
    AbandonArgument,
    _decode_AbandonArgument,
    _encode_AbandonArgument,
} from "../DirectoryAbstractService/AbandonArgument.ta.js";
export { abandonFailed } from "../DirectoryAbstractService/abandonFailed.oa.js";
export {
    AbandonResult,
    _decode_AbandonResult,
    _encode_AbandonResult,
} from "../DirectoryAbstractService/AbandonResult.ta.js";

/* START_OF_SYMBOL_DEFINITION abandon */
/**
 * @summary abandon
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * abandon OPERATION ::= {
 *   ARGUMENT  AbandonArgument
 *   RESULT    AbandonResult
 *   ERRORS    {abandonFailed}
 *   CODE      id-opcode-abandon }
 * ```
 *
 * @constant
 * @type {OPERATION<AbandonArgument, AbandonResult>}
 * @implements {OPERATION<AbandonArgument, AbandonResult>}
 */
export const abandon: OPERATION<AbandonArgument, AbandonResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AbandonArgument,
        "&ResultType": _decode_AbandonResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AbandonArgument,
        "&ResultType": _encode_AbandonResult,
    },
    "&Errors": [abandonFailed] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_abandon /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION abandon */

/* eslint-enable */
