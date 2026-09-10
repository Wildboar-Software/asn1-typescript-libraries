import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { AssistRequestInstructionsArg, _decode_AssistRequestInstructionsArg, _encode_AssistRequestInstructionsArg } from "../CAP-gsmSSF-gsmSCF-ops-args/AssistRequestInstructionsArg.ta.mjs";
import { missingCustomerRecord } from "../CAP-errortypes/missingCustomerRecord.oa.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { opcode_assistRequestInstructions } from "../CAP-operationcodes/opcode-assistRequestInstructions.va.mjs";

/**
 * @summary assistRequestInstructions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * assistRequestInstructions {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	AssistRequestInstructionsArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingCustomerRecord |
 * 			missingParameter |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter}
 * 	CODE		opcode-assistRequestInstructions}
 * ```
 *
 * @constant
 * @type {OPERATION<AssistRequestInstructionsArg>}
 * @implements {OPERATION<AssistRequestInstructionsArg>}
 */
export
const assistRequestInstructions: OPERATION<AssistRequestInstructionsArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AssistRequestInstructionsArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AssistRequestInstructionsArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingCustomerRecord, missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_assistRequestInstructions /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
