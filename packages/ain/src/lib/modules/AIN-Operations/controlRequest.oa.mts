/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ControlRequestArg, _decode_ControlRequestArg, _encode_ControlRequestArg } from "../AIN-Operations/ControlRequestArg.ta.mjs";
// export { ControlRequestArg, _decode_ControlRequestArg, _encode_ControlRequestArg } from "../AIN-Operations/ControlRequestArg.ta.mjs";


/**
 * @summary controlRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * controlRequest OPERATION ::= {
 *         ARGUMENT
 *         ControlRequestArg
 * 
 *         CODE private: 26885
 *         --Family Name is “Network Management”
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<ControlRequestArg>}
 * @implements {OPERATION<ControlRequestArg>}
 */
export
const controlRequest: OPERATION<ControlRequestArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ControlRequestArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ControlRequestArg,
        "&ResultType": undefined,
    },
    "&operationCode": { private_: 26885 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
