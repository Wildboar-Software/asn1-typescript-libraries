import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { RequestReportBCSMEventArg, _decode_RequestReportBCSMEventArg, _encode_RequestReportBCSMEventArg } from "../CAP-gsmSSF-gsmSCF-ops-args/RequestReportBCSMEventArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { opcode_requestReportBCSMEvent } from "../CAP-operationcodes/opcode-requestReportBCSMEvent.va.mjs";

/**
 * @summary requestReportBCSMEvent
 * @description
 *
 * gsmSCF requests gsmSSF to monitor for call-related BCSM events (e.g. O_Busy,
 * O_No_Answer) and notify gsmSCF when detected. Every EDP must be explicitly
 * armed; no implicit arming after other operations. Multiple events may be
 * requested in one operation; each is reported in a separate EventReportBCSM.
 * gsmSCF → gsmSSF. Unconfirmed (`RETURN RESULT FALSE`). Local opcode 23. Timer
 * `Trrb` (short: 1 s–10 s; operator-defined within range). (3GPP TS 29.078
 * V19.0.0 clauses 6.1.1 and 11.27).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * requestReportBCSMEvent {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	RequestReportBCSMEventArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownLegID}
 * 	CODE		opcode-requestReportBCSMEvent}
 * ```
 *
 * @constant
 * @type {OPERATION<RequestReportBCSMEventArg>}
 * @implements {OPERATION<RequestReportBCSMEventArg>}
 */
export
const requestReportBCSMEvent: OPERATION<RequestReportBCSMEventArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestReportBCSMEventArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestReportBCSMEventArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_requestReportBCSMEvent /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
