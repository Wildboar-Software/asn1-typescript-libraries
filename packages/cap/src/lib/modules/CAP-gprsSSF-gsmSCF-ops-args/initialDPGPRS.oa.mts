import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
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
 * ### ASN.1 Definition:
 *
 * ```asn1
 * initialDPGPRS OPERATION ::= {
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
