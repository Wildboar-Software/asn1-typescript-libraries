import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ConnectSMSArg, _decode_ConnectSMSArg, _encode_ConnectSMSArg } from "../CAP-SMS-ops-args/ConnectSMSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { opcode_connectSMS } from "../CAP-operationcodes/opcode-connectSMS.va.mjs";

/**
 * @summary connectSMS
 * @description
 *
 * Requests the smsSSF to continue SM processing with modified
 * information (route to a destination or deliver to the served
 * subscriber). (3GPP TS 29.078 V19.0.0 clause 12.1).
 *
 * Direction: gsmSCF → smsSSF (MSC or SGSN). Confirmed (class 2).
 * Local opcode 62. Timer Tconsms (Short; 1–20 s, operator-defined).
 *
 * Valid at DP SMS_Collected_Info or SMS_Delivery_Requested while
 * Waiting_for_Instructions. Supplied callingPartysNumber,
 * destinationSubscriberNumber, or smscAddress replace subsequent
 * processing values. No implicit DP arming or disarming. FSM goes
 * Idle if no EDPs armed, else Monitoring.
 * (3GPP TS 29.078 V19.0.0 clauses 7.1 and 12.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * connectSMS {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	ConnectSMSArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter}
 * 	CODE		opcode-connectSMS}
 * ```
 *
 * @constant
 * @type {OPERATION<ConnectSMSArg>}
 * @implements {OPERATION<ConnectSMSArg>}
 */
export
const connectSMS: OPERATION<ConnectSMSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ConnectSMSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ConnectSMSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_connectSMS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
