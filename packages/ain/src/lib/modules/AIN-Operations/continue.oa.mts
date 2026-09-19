/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ContinueArg, _decode_ContinueArg, _encode_ContinueArg } from "../AIN-Operations/ContinueArg.ta.mjs";
// export { ContinueArg, _decode_ContinueArg, _encode_ContinueArg } from "../AIN-Operations/ContinueArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary continue_
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * continue OPERATION ::= {
 *         ARGUMENT
 *         ContinueArg
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 25869
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<ContinueArg>}
 * @implements {OPERATION<ContinueArg>}
 */
export
const continue_: OPERATION<ContinueArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ContinueArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ContinueArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25869 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
