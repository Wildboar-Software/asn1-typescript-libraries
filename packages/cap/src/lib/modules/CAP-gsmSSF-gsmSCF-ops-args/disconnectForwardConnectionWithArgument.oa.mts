import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DisconnectForwardConnectionWithArgumentArg, _decode_DisconnectForwardConnectionWithArgumentArg, _encode_DisconnectForwardConnectionWithArgumentArg } from "../CAP-gsmSSF-gsmSCF-ops-args/DisconnectForwardConnectionWithArgumentArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { opcode_dFCWithArgument } from "../CAP-operationcodes/opcode-dFCWithArgument.va.mjs";

/**
 * @summary disconnectForwardConnectionWithArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * disconnectForwardConnectionWithArgument {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	DisconnectForwardConnectionWithArgumentArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownCSID}
 * 	CODE		opcode-dFCWithArgument}
 * ```
 *
 * @constant
 * @type {OPERATION<DisconnectForwardConnectionWithArgumentArg>}
 * @implements {OPERATION<DisconnectForwardConnectionWithArgumentArg>}
 */
export
const disconnectForwardConnectionWithArgument: OPERATION<DisconnectForwardConnectionWithArgumentArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DisconnectForwardConnectionWithArgumentArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DisconnectForwardConnectionWithArgumentArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_dFCWithArgument /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
