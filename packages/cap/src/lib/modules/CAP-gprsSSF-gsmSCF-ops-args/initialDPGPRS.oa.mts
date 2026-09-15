import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { InitialDPGPRSArg, _decode_InitialDPGPRSArg, _encode_InitialDPGPRSArg } from "../CAP-gprsSSF-gsmSCF-ops-args/InitialDPGPRSArg.ta.mjs";
import { missingCustomerRecord } from "../CAP-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { opcode_initialDPGPRS } from "../CAP-operationcodes/opcode-initialDPGPRS.va.mjs";

/**
 * @summary initialDPGPRS
 * @description
 *
 * Sent after a TDP-R in the GPRS Session or PDP Context state
 * machine to request gsmSCF instructions. Session TDPs: Attach,
 * Change of Position Session. PDP Context TDPs: PDP Context
 * Establishment, Establishment Acknowledgement, Change of Position
 * Context. (3GPP TS 29.078 V19.0.0 clause 13.10).
 *
 * Direction: gprsSSF → gsmSCF. Confirmed (class 2). Local opcode
 * 78. Timer Tidpg (Short; 1–20 s, operator-defined).
 *
 * Not sent if a GPRS dialogue already exists for that session (PDP
 * TDP) or PDP Context (Establishment Ack TDP). gsmSCF address from
 * CSI; Tssf started. Unreachable gsmSCF, Tssf expiry, or MS
 * abandon before the TC dialogue: abort and apply Default GPRS
 * Handling. (3GPP TS 29.078 V19.0.0 clauses 8.1 and 13.10).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * initialDPGPRS {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	InitialDPGPRSArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingCustomerRecord |
 * 			missingParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter}
 * 	CODE		opcode-initialDPGPRS}
 * ```
 *
 * @constant
 * @type {OPERATION<InitialDPGPRSArg>}
 * @implements {OPERATION<InitialDPGPRSArg>}
 */
export
const initialDPGPRS: OPERATION<InitialDPGPRSArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InitialDPGPRSArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InitialDPGPRSArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_initialDPGPRS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
