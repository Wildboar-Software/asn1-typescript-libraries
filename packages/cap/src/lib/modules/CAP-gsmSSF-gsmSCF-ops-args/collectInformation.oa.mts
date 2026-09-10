import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CollectInformationArg, _decode_CollectInformationArg, _encode_CollectInformationArg } from "../CAP-gsmSSF-gsmSCF-ops-args/CollectInformationArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { opcode_collectInformation } from "../CAP-operationcodes/opcode-collectInformation.va.mjs";

/**
 * @summary collectInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * collectInformation {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT		CollectInformationArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS	{missingParameter |
 * 			parameterOutOfRange |
 * 			SystemFailure	|
 * 			TaskRefused	|
 * 			UnexpectedComponentSequence	|
 * 			UnexpectedDataValue	|
 * 			UnexpectedParameter}
 * 	CODE		opcode-collectInformation}
 * ```
 *
 * @constant
 * @type {OPERATION<CollectInformationArg>}
 * @implements {OPERATION<CollectInformationArg>}
 */
export
const collectInformation: OPERATION<CollectInformationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CollectInformationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CollectInformationArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_collectInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
