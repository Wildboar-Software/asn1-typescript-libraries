import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ResetTimerSMSArg, _decode_ResetTimerSMSArg, _encode_ResetTimerSMSArg } from "../CAP-SMS-ops-args/ResetTimerSMSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { opcode_resetTimerSMS } from "../CAP-operationcodes/opcode-resetTimerSMS.va.mjs";

/**
 * @summary resetTimerSMS
 * @description
 *
 * Refreshes the Tssf application timer so it does not expire at
 * the smsSSF. (3GPP TS 29.078 V19.0.0 clause 12.8).
 *
 * Direction: gsmSCF → smsSSF. Confirmed (class 2). Local opcode
 * 67. Timer Trtsms (Short; 1–20 s, operator-defined).
 *
 * Valid while SM processing is suspended at a DP in
 * Waiting_for_Instructions. Tssf is loaded with timerValue and
 * restarted; no FSM state change. Only timerID `tssf` is
 * permitted. (3GPP TS 29.078 V19.0.0 clauses 7.1 and 12.8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * resetTimerSMS {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	ResetTimerSMSArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			parameterOutOfRange |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter}
 * 	CODE		opcode-resetTimerSMS}
 * ```
 *
 * @constant
 * @type {OPERATION<ResetTimerSMSArg>}
 * @implements {OPERATION<ResetTimerSMSArg>}
 */
export
const resetTimerSMS: OPERATION<ResetTimerSMSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ResetTimerSMSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ResetTimerSMSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_resetTimerSMS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
