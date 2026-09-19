/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ReconnectArg, _decode_ReconnectArg, _encode_ReconnectArg } from "../AIN-Operations/ReconnectArg.ta.mjs";
// export { ReconnectArg, _decode_ReconnectArg, _encode_ReconnectArg } from "../AIN-Operations/ReconnectArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary reconnect
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reconnect OPERATION ::= {
 *         ARGUMENT
 *         ReconnectArg
 *         ERRORS{ applicationError
 *         }
 *         CODE private: 25870
 *         --Family Name is "Connection Control (Call Model)"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReconnectArg>}
 * @implements {OPERATION<ReconnectArg>}
 */
export
const reconnect: OPERATION<ReconnectArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReconnectArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReconnectArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25870 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
