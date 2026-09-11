import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { InitialDPArg, _decode_InitialDPArg, _encode_InitialDPArg } from "../CAP-gsmSSF-gsmSCF-ops-args/InitialDPArg.ta.mjs";
import { missingCustomerRecord } from "../CAP-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { opcode_initialDP } from "../CAP-operationcodes/opcode-initialDP.va.mjs";

/**
 * @summary initialDP
 * @description
 *
 * gsmSSF uses this after a TDP-R in the BCSM to request gsmSCF instructions to
 * complete the call. gsmSSF → gsmSCF. Unconfirmed (`RETURN RESULT FALSE`).
 * Local opcode 0. Timer `Tidp` (short: 1 s–10 s; operator-defined within
 * range). Tssf is started when this is sent. If gsmSCF is unreachable, apply
 * Default Call Handling from CSI. (3GPP TS 29.078 V19.0.0 clauses 6.1.1 and
 * 11.20).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * initialDP {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	InitialDPArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingCustomerRecord |
 * 			missingParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter}
 * 	CODE		opcode-initialDP}
 * ```
 *
 * @constant
 * @type {OPERATION<InitialDPArg>}
 * @implements {OPERATION<InitialDPArg>}
 */
export
const initialDP: OPERATION<InitialDPArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InitialDPArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_InitialDPArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_initialDP /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
