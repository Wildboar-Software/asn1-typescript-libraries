import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ApplyChargingArg, _decode_ApplyChargingArg, _encode_ApplyChargingArg } from "../CAP-gsmSSF-gsmSCF-ops-args/ApplyChargingArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { opcode_applyCharging } from "../CAP-operationcodes/opcode-applyCharging.va.mjs";

/**
 * @summary applyCharging
 * @description
 *
 * gsmSCF uses this to interact with gsmSSF "CSE control of call duration".
 * ApplyChargingReport is the feedback. gsmSCF → gsmSSF. Unconfirmed (`RETURN
 * RESULT FALSE`). Local opcode 35. Timer `Tac` (short: 1 s–10 s;
 * operator-defined within range). `taskRefused` if a previous call-period
 * duration is pending for this leg or srfConnection, or a tariffSwitchInterval
 * is given while one is already pending. (3GPP TS 29.078 V19.0.0 clauses 6.1.1
 * and 11.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applyCharging {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	ApplyChargingArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			unexpectedComponentSequence |
 * 			unexpectedParameter |
 * 			unexpectedDataValue |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unknownLegID |
 * 			unknownCSID}
 * 	CODE		opcode-applyCharging}
 * ```
 *
 * @constant
 * @type {OPERATION<ApplyChargingArg>}
 * @implements {OPERATION<ApplyChargingArg>}
 */
export
const applyCharging: OPERATION<ApplyChargingArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ApplyChargingArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ApplyChargingArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, unexpectedComponentSequence, unexpectedParameter, unexpectedDataValue, parameterOutOfRange, systemFailure, taskRefused, unknownLegID, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_applyCharging /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
