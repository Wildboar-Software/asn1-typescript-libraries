import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ConnectGPRSArg, _decode_ConnectGPRSArg, _encode_ConnectGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/ConnectGPRSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { opcode_connectGPRS } from "../CAP-operationcodes/opcode-connectGPRS.va.mjs";

/**
 * @summary connectGPRS
 * @description
 *
 * Provides an APN for the gprsSSF to use when establishing a PDP
 * Context. (3GPP TS 29.078 V19.0.0 clause 13.5).
 *
 * Direction: gsmSCF → gprsSSF. Confirmed (class 2). Local opcode
 * 74. Timer Tcong (Short; 1–20 s, operator-defined).
 *
 * Valid in a control relationship at DP PDP_Context_Establishment
 * while Waiting_for_Instructions. Stops Tssf. No implicit DP
 * arming or disarming. FSM → Idle if no EDPs armed, else
 * Monitoring. unknownPDPID if PDPID unknown.
 * (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.5).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * connectGPRS {PARAMETERS-BOUND: bound} OPERATION ::= {
 * 	ARGUMENT	ConnectGPRSArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			parameterOutOfRange |
 * 			unknownPDPID |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter}
 * 	CODE		opcode-connectGPRS}
 * ```
 *
 * @constant
 * @type {OPERATION<ConnectGPRSArg>}
 * @implements {OPERATION<ConnectGPRSArg>}
 */
export
const connectGPRS: OPERATION<ConnectGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ConnectGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ConnectGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, unknownPDPID, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_connectGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
