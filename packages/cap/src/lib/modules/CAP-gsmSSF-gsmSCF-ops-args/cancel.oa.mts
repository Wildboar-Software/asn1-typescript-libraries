import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CancelArg, _decode_CancelArg, _encode_CancelArg } from "../CAP-gsmSSF-gsmSCF-ops-args/CancelArg.ta.mjs";
import { cancelFailed } from "../CAP-errortypes/cancelFailed.oa.mjs";
import { missingParameter } from "../CAP-errortypes/missingParameter.oa.mjs";
import { taskRefused } from "../CAP-errortypes/taskRefused.oa.mjs";
import { unknownCSID } from "../CAP-errortypes/unknownCSID.oa.mjs";
import { opcode_cancel } from "../CAP-operationcodes/opcode-cancel.va.mjs";

/**
 * @summary cancel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cancel {PARAMETERS-BOUND : bound} OPERATION ::= {
 * 	ARGUMENT	CancelArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ERRORS		{cancelFailed |
 * 			missingParameter |
 * 			taskRefused |
 * 			unknownCSID}
 * 	CODE		opcode-cancel}
 * ```
 *
 * @constant
 * @type {OPERATION<CancelArg>}
 * @implements {OPERATION<CancelArg>}
 */
export
const cancel: OPERATION<CancelArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ cancelFailed, missingParameter, taskRefused, unknownCSID, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_cancel /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
