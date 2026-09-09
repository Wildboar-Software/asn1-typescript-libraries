import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { InitiateCallAttemptArg, _decode_InitiateCallAttemptArg, _encode_InitiateCallAttemptArg } from "../CAP-gsmSSF-gsmSCF-ops-args/InitiateCallAttemptArg.ta.mjs";
import { InitiateCallAttemptRes, _decode_InitiateCallAttemptRes, _encode_InitiateCallAttemptRes } from "../CAP-gsmSSF-gsmSCF-ops-args/InitiateCallAttemptRes.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { opcode_initiateCallAttempt } from "../CAP-operationcodes/opcode-initiateCallAttempt.va.mjs";

/**
 * @summary initiateCallAttempt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * initiateCallAttempt OPERATION ::= {
 * 	ARGUMENT	InitiateCallAttemptArg {bound}
 * 	RESULT		InitiateCallAttemptRes {bound}
 * 	ERRORS		{missingParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter
 * 			}
 * 	CODE		opcode-initiateCallAttempt}
 * ```
 *
 * @constant
 * @type {OPERATION<InitiateCallAttemptArg, InitiateCallAttemptRes>}
 * @implements {OPERATION<InitiateCallAttemptArg, InitiateCallAttemptRes>}
 */
export
const initiateCallAttempt: OPERATION<InitiateCallAttemptArg, InitiateCallAttemptRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InitiateCallAttemptArg,
        "&ResultType": _decode_InitiateCallAttemptRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_InitiateCallAttemptArg,
        "&ResultType": _encode_InitiateCallAttemptRes,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_initiateCallAttempt /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
