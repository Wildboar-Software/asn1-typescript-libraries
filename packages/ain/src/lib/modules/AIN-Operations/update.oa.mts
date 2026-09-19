/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { UpdateArg, _decode_UpdateArg, _encode_UpdateArg } from "../AIN-Operations/UpdateArg.ta.mjs";
// export { UpdateArg, _decode_UpdateArg, _encode_UpdateArg } from "../AIN-Operations/UpdateArg.ta.mjs";
import { _decode_update_ResultType, _encode_update_ResultType, update_ResultType } from "../AIN-Operations/update-ResultType.ta.mjs";
// export { update_ResultType, _decode_update_ResultType, _encode_update_ResultType } from "../AIN-Operations/update-ResultType.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary update
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * update OPERATION ::= {
 *         ARGUMENT
 *         UpdateArg
 *         RESULT SEQUENCE{
 *             amp1                          Amp1 OPTIONAL,
 *             amp2                          Amp2 OPTIONAL,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             resultCause                   ResultCause OPTIONAL
 *         }
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         CODE private: 26627
 *         --Family Name is "Information Revision"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<UpdateArg, update_ResultType>}
 * @implements {OPERATION<UpdateArg, update_ResultType>}
 */
export
const update: OPERATION<UpdateArg, update_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateArg,
        "&ResultType": _decode_update_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateArg,
        "&ResultType": _encode_update_ResultType,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26627 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
