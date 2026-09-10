import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MoveLegArg, _decode_MoveLegArg, _encode_MoveLegArg } from "../CAP-gsmSSF-gsmSCF-ops-args/MoveLegArg.ta.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { systemFailure } from "../CAP-errortypes/systemFailure.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unexpectedComponentSequence } from "../CAP-errortypes/unexpectedComponentSequence.oa.mjs";
import { unexpectedDataValue } from "../CAP-errortypes/unexpectedDataValue.oa.mjs";
import { unexpectedParameter } from "../CAP-errortypes/unexpectedParameter.oa.mjs";
import { unknownLegID } from "../CAP-errortypes/unknownLegID.oa.mjs";
import { opcode_moveLeg } from "../CAP-operationcodes/opcode-moveLeg.va.mjs";

/**
 * @summary moveLeg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * moveLeg {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	MoveLegArg {bound}
 * 	RETURN RESULT	TRUE
 * 	ERRORS		{missingParameter |
 * 			systemFailure |
 * 			taskRefused |
 * 			unexpectedComponentSequence |
 * 			unexpectedDataValue |
 * 			unexpectedParameter |
 * 			unknownLegID}
 * 	CODE		opcode-moveLeg}
 * ```
 *
 * @constant
 * @type {OPERATION<MoveLegArg>}
 * @implements {OPERATION<MoveLegArg>}
 */
export
const moveLeg: OPERATION<MoveLegArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MoveLegArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_MoveLegArg,
        "&ResultType": undefined,
    },
    "&returnResult": true /* OBJECT_FIELD_SETTING */,
    "&Errors": [ missingParameter, systemFailure, taskRefused, unexpectedComponentSequence, unexpectedDataValue, unexpectedParameter, unknownLegID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_moveLeg /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
