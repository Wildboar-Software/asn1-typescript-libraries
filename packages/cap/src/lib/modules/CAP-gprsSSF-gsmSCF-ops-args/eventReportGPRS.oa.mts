import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EventReportGPRSArg, _decode_EventReportGPRSArg, _encode_EventReportGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/EventReportGPRSArg.ta.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_eventReportGPRS } from "../CAP-operationcodes/opcode-eventReportGPRS.va.mjs";

/**
 * @summary eventReportGPRS
 * @description
 *
 * Notifies the gsmSCF of a GPRS Session or PDP Context event
 * previously armed by RequestReportGPRSEvent.
 * (3GPP TS 29.078 V19.0.0 clause 13.8).
 *
 * Direction: gprsSSF → gsmSCF. Confirmed (class 1). Local opcode
 * 80. Timer Tereg (Short; 1–20 s, operator-defined).
 *
 * Notification with remaining EDPs or pending reports stays in
 * Monitoring; otherwise Idle. Request (interrupted) →
 * Waiting_for_Instructions and processing is interrupted. An
 * EDP-R that releases the session or PDP Context disarms all
 * related EDPs. Timer expiry or Tssf expiry on a request: abort
 * TC and apply default GPRS handling. Only error: unknownPDPID.
 * (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * eventReportGPRS {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	EventReportGPRSArg {bound}
 * 	RETURN RESULT	TRUE
 * 	ERRORS		{unknownPDPID}
 * 	CODE		opcode-eventReportGPRS}
 * ```
 *
 * @constant
 * @type {OPERATION<EventReportGPRSArg>}
 * @implements {OPERATION<EventReportGPRSArg>}
 */
export
const eventReportGPRS: OPERATION<EventReportGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EventReportGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_EventReportGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_eventReportGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
