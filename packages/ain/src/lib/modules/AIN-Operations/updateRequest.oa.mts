/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { UpdateRequestArg, _decode_UpdateRequestArg, _encode_UpdateRequestArg } from "../AIN-Operations/UpdateRequestArg.ta.mjs";
// export { UpdateRequestArg, _decode_UpdateRequestArg, _encode_UpdateRequestArg } from "../AIN-Operations/UpdateRequestArg.ta.mjs";
import { _decode_updateRequest_ResultType, _encode_updateRequest_ResultType, updateRequest_ResultType } from "../AIN-Operations/updateRequest-ResultType.ta.mjs";
// export { updateRequest_ResultType, _decode_updateRequest_ResultType, _encode_updateRequest_ResultType } from "../AIN-Operations/updateRequest-ResultType.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary updateRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * updateRequest OPERATION ::= {
 *         ARGUMENT
 *         UpdateRequestArg
 *         RESULT SEQUENCE{
 *             failureCause FailureCause OPTIONAL
 *         }
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 26625
 *         --Family Name is "Information Revision"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<UpdateRequestArg, updateRequest_ResultType>}
 * @implements {OPERATION<UpdateRequestArg, updateRequest_ResultType>}
 */
export
const updateRequest: OPERATION<UpdateRequestArg, updateRequest_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateRequestArg,
        "&ResultType": _decode_updateRequest_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateRequestArg,
        "&ResultType": _encode_updateRequest_ResultType,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26625 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
