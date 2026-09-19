/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SendToResourceArg, _decode_SendToResourceArg, _encode_SendToResourceArg } from "../AIN-Operations/SendToResourceArg.ta.mjs";
// export { SendToResourceArg, _decode_SendToResourceArg, _encode_SendToResourceArg } from "../AIN-Operations/SendToResourceArg.ta.mjs";
import { _decode_sendToResource_ResultType, _encode_sendToResource_ResultType, sendToResource_ResultType } from "../AIN-Operations/sendToResource-ResultType.ta.mjs";
// export { sendToResource_ResultType, _decode_sendToResource_ResultType, _encode_sendToResource_ResultType } from "../AIN-Operations/sendToResource-ResultType.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary sendToResource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendToResource OPERATION ::= {
 *         ARGUMENT
 *         SendToResourceArg
 *         RESULT SEQUENCE{
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 *         ERRORS{ applicationError
 *         }
 *         --LINKED{
 *             --resourceClear,
 *             --callInfoFromResource
 *             -- }
 *         CODE private: 26113
 *         --Family Name is "Caller Interaction"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendToResourceArg, sendToResource_ResultType>}
 * @implements {OPERATION<SendToResourceArg, sendToResource_ResultType>}
 */
export
const sendToResource: OPERATION<SendToResourceArg, sendToResource_ResultType> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendToResourceArg,
        "&ResultType": _decode_sendToResource_ResultType,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendToResourceArg,
        "&ResultType": _encode_sendToResource_ResultType,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 26113 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
