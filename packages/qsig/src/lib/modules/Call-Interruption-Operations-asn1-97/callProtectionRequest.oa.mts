/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CPIPRequestArg, _decode_CPIPRequestArg, _encode_CPIPRequestArg } from "../Call-Interruption-Operations-asn1-97/CPIPRequestArg.ta.mjs";
// export { CPIPRequestArg, _decode_CPIPRequestArg, _encode_CPIPRequestArg } from "../Call-Interruption-Operations-asn1-97/CPIPRequestArg.ta.mjs";


/**
 * @summary callProtectionRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callProtectionRequest OPERATION ::= {
 *     ARGUMENT CPIPRequestArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 88
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CPIPRequestArg>}
 * @implements {OPERATION<CPIPRequestArg>}
 */
export
const callProtectionRequest: OPERATION<CPIPRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CPIPRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CPIPRequestArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 88 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
