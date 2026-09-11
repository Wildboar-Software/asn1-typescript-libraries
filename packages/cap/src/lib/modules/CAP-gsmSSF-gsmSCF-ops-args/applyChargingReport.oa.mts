import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ApplyChargingReportArg, _decode_ApplyChargingReportArg, _encode_ApplyChargingReportArg } from "../CAP-gsmSSF-gsmSCF-ops-args/ApplyChargingReportArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { opcode_applyChargingReport } from "../CAP-operationcodes/opcode-applyChargingReport.va.mjs";

/**
 * @summary applyChargingReport
 * @description
 *
 * gsmSSF reports charging-related information requested by a prior
 * ApplyCharging. On a CPH connection-configuration change this also tells
 * gsmSCF that supervision of that part of the connection is finished (durations
 * in later AC/ACR cycles are not accumulated). gsmSSF → gsmSCF. Unconfirmed
 * (`RETURN RESULT FALSE`). Local opcode 36. Timer `Tacr` (short: 1 s–10 s;
 * operator-defined within range). (3GPP TS 29.078 V19.0.0 clauses 6.1.1 and
 * 11.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applyChargingReport {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	ApplyChargingReportArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			unexpectedComponentSequence |
 * 			unexpectedParameter |
 * 			unexpectedDataValue |
 * 			unknownCSID |
 * 			unknownLegID |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused}
 * 	CODE		opcode-applyChargingReport}
 * ```
 *
 * @constant
 * @type {OPERATION<ApplyChargingReportArg>}
 * @implements {OPERATION<ApplyChargingReportArg>}
 */
export
const applyChargingReport: OPERATION<ApplyChargingReportArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ApplyChargingReportArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ApplyChargingReportArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, unknownCSID, unknownLegID, parameterOutOfRange, systemFailure, taskRefused, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_applyChargingReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
