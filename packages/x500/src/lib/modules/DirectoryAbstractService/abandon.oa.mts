/* eslint-disable */
import { id_opcode_abandon } from "../CommonProtocolSpecification/id-opcode-abandon.va.mjs";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca.mjs";
import {
    AbandonArgument,
    _decode_AbandonArgument,
    _encode_AbandonArgument,
} from "../DirectoryAbstractService/AbandonArgument.ta.mjs";
import { abandonFailed } from "../DirectoryAbstractService/abandonFailed.oa.mjs";
import {
    AbandonResult,
    _decode_AbandonResult,
    _encode_AbandonResult,
} from "../DirectoryAbstractService/AbandonResult.ta.mjs";
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
