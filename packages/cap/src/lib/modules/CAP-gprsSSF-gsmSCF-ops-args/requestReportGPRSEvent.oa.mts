import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { RequestReportGPRSEventArg, _decode_RequestReportGPRSEventArg, _encode_RequestReportGPRSEventArg } from "../CAP-gprsSSF-gsmSCF-ops-args/RequestReportGPRSEventArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_requestReportGPRSEvent } from "../CAP-operationcodes/opcode-requestReportGPRSEvent.va.mjs";

/**
 * @summary requestReportGPRSEvent
 * @description
 *
 * Requests the gprsSSF to monitor GPRS Session or PDP Context
 * events (e.g. attach or PDP Context activation) and notify the
 * gsmSCF when detected. Several events may be armed in one invoke;
 * each is reported in a separate EventReportGPRS.
 * (3GPP TS 29.078 V19.0.0 clause 13.12).
 *
 * Direction: gsmSCF → gprsSSF. Confirmed (class 2). Local opcode
 * 81. Timer Trrqe (Short; 1–20 s, operator-defined).
 *
 * In Monitoring, only disarm (transparent) or notifyAndContinue
 * are accepted. unknownPDPID if PDPID unknown.
 * (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.12).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * requestReportGPRSEvent {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	RequestReportGPRSEventArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownPDPID}
 * 	CODE		opcode-requestReportGPRSEvent}
 * ```
 *
 * @constant
 * @type {OPERATION<RequestReportGPRSEventArg>}
 * @implements {OPERATION<RequestReportGPRSEventArg>}
 */
export
const requestReportGPRSEvent: OPERATION<RequestReportGPRSEventArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestReportGPRSEventArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestReportGPRSEventArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_requestReportGPRSEvent /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
