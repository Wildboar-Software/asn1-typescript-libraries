/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CPIRequestArg, _decode_CPIRequestArg, _encode_CPIRequestArg } from "../Call-Interruption-Operations-asn1-97/CPIRequestArg.ta.mjs";
// export { CPIRequestArg, _decode_CPIRequestArg, _encode_CPIRequestArg } from "../Call-Interruption-Operations-asn1-97/CPIRequestArg.ta.mjs";


/**
 * @summary callInterruptionRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callInterruptionRequest OPERATION ::= {
 *     ARGUMENT CPIRequestArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 87
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CPIRequestArg>}
 * @implements {OPERATION<CPIRequestArg>}
 */
export
const callInterruptionRequest: OPERATION<CPIRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CPIRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CPIRequestArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 87 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
