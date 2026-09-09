import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ContinueWithArgumentArg, _decode_ContinueWithArgumentArg, _encode_ContinueWithArgumentArg } from "../CAP-gsmSSF-gsmSCF-ops-args/ContinueWithArgumentArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { parameterOutOfRange } from "../CAP-errortypes/parameterOutOfRange.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { opcode_continueWithArgument } from "../CAP-operationcodes/opcode-continueWithArgument.va.mjs";

/**
 * @summary continueWithArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * continueWithArgument OPERATION ::= {
 * 	ARGUMENT	ContinueWithArgumentArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{missingParameter |
 * 			parameterOutOfRange |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownLegID |
 * 			unknownCSID}
 * 	CODE		opcode-continueWithArgument}
 * ```
 *
 * @constant
 * @type {OPERATION<ContinueWithArgumentArg>}
 * @implements {OPERATION<ContinueWithArgumentArg>}
 */
export
const continueWithArgument: OPERATION<ContinueWithArgumentArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ContinueWithArgumentArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ContinueWithArgumentArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, parameterOutOfRange, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_continueWithArgument /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
