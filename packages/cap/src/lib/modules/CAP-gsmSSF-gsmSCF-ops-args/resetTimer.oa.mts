import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { ResetTimerArg, _decode_ResetTimerArg, _encode_ResetTimerArg } from "../CAP-gsmSSF-gsmSCF-ops-args/ResetTimerArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { opcode_resetTimer } from "../CAP-operationcodes/opcode-resetTimer.va.mjs";

/**
 * @summary resetTimer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * resetTimer OPERATION ::= {
 * 	ARGUMENT	ResetTimerArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			parameterOutOfRange |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownCSID}
 * 	CODE		opcode-resetTimer}
 * ```
 *
 * @constant
 * @type {OPERATION<ResetTimerArg>}
 * @implements {OPERATION<ResetTimerArg>}
 */
export
const resetTimer: OPERATION<ResetTimerArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ResetTimerArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ResetTimerArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_resetTimer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
