import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";
import { PromptAndCollectUserInformationArg, _decode_PromptAndCollectUserInformationArg, _encode_PromptAndCollectUserInformationArg } from "../CAP-gsmSCF-gsmSRF-ops-args/PromptAndCollectUserInformationArg.ta.mjs";
import { ReceivedInformationArg, _decode_ReceivedInformationArg, _encode_ReceivedInformationArg } from "../CAP-gsmSCF-gsmSRF-ops-args/ReceivedInformationArg.ta.mjs";
import { canceled } from "../CAP-errortypes/canceled.oa.mjs";
import { improperCallerResponse } from "../CAP-errortypes/improperCallerResponse.oa.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unavailableResource } from "../CAP-errortypes/unavailableResource.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { specializedResourceReport } from "../CAP-gsmSCF-gsmSRF-ops-args/specializedResourceReport.oa.mjs";
import { opcode_promptAndCollectUserInformation } from "../CAP-operationcodes/opcode-promptAndCollectUserInformation.va.mjs";

/**
 * @summary promptAndCollectUserInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * promptAndCollectUserInformation OPERATION ::= {
 * 	ARGUMENT	PromptAndCollectUserInformationArg {bound}
 * 	RESULT		ReceivedInformationArg {bound}
 * 	ERRORS		{canceled |
 * 			improperCallerResponse |
 * 			missingParameter |
 * 			parameterOutOfRange |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unavailableResource |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownCSID}
 * 	LINKED		{specializedResourceReport}
 * 	CODE		opcode-promptAndCollectUserInformation}
 * ```
 *
 * @constant
 * @type {OPERATION<PromptAndCollectUserInformationArg, ReceivedInformationArg>}
 * @implements {OPERATION<PromptAndCollectUserInformationArg, ReceivedInformationArg>}
 */
export
const promptAndCollectUserInformation: OPERATION<PromptAndCollectUserInformationArg, ReceivedInformationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PromptAndCollectUserInformationArg,
        "&ResultType": _decode_ReceivedInformationArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_PromptAndCollectUserInformationArg,
        "&ResultType": _encode_ReceivedInformationArg,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ canceled, improperCallerResponse, missingParameter, parameterOutOfRange, systemFailure, taskRefused, unexpectedComponentSequence, unavailableResource, unexpectedDataValue, unexpectedParameter, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&Linked": [ specializedResourceReport, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_promptAndCollectUserInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
