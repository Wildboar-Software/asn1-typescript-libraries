import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SendChargingInformationGPRSArg, _decode_SendChargingInformationGPRSArg, _encode_SendChargingInformationGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/SendChargingInformationGPRSArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unknownPDPID } from "../CAP-errortypes/unknownPDPID.oa.mjs";
import { opcode_sendChargingInformationGPRS } from "../CAP-operationcodes/opcode-sendChargingInformationGPRS.va.mjs";

/**
 * @summary sendChargingInformationGPRS
 * @description
 *
 * Instructs the gprsSSF on Advice of Charge information to send to
 * the MS (if the SGSN supports AoC). May be invoked more than
 * once. (3GPP TS 29.078 V19.0.0 clause 13.14).
 *
 * Direction: gsmSCF → gprsSSF. Confirmed (class 2). Local opcode
 * 83. Timer Tscig (Short; 1–20 s, operator-defined).
 *
 * With CSE control of duration/volume, send ApplyChargingGPRS then
 * this operation in the same TC-CONTINUE or TC-BEGIN.
 * tariffSwitchInterval may appear in one of the two, not both
 * (prefer ApplyChargingGPRS). TaskRefused if a
 * tariffSwitchInterval is already pending. unknownPDPID if PDPID
 * unknown. (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.14).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sendChargingInformationGPRS {PARAMETERS-BOUND: bound} OPERATION ::= {
 * 	ARGUMENT	SendChargingInformationGPRSArg { bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			unexpectedComponentSequence |
 * 			unexpectedParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedDataValue |
 * 			unknownPDPID}
 * 	CODE		opcode-sendChargingInformationGPRS}
 * ```
 *
 * @constant
 * @type {OPERATION<SendChargingInformationGPRSArg>}
 * @implements {OPERATION<SendChargingInformationGPRSArg>}
 */
export
const sendChargingInformationGPRS: OPERATION<SendChargingInformationGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendChargingInformationGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendChargingInformationGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unexpectedComponentSequence, unexpectedParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedDataValue, unknownPDPID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_sendChargingInformationGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
