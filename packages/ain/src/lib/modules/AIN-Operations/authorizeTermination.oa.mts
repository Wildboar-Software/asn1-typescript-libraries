/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AuthorizeTerminationArg, _decode_AuthorizeTerminationArg, _encode_AuthorizeTerminationArg } from "../AIN-Operations/AuthorizeTerminationArg.ta.mjs";
// export { AuthorizeTerminationArg, _decode_AuthorizeTerminationArg, _encode_AuthorizeTerminationArg } from "../AIN-Operations/AuthorizeTerminationArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary authorizeTermination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authorizeTermination OPERATION ::= {
 *         ARGUMENT
 *         AuthorizeTerminationArg
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 25858
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<AuthorizeTerminationArg>}
 * @implements {OPERATION<AuthorizeTerminationArg>}
 */
export
const authorizeTermination: OPERATION<AuthorizeTerminationArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AuthorizeTerminationArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AuthorizeTerminationArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25858 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
