/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { OriginateCallArg, _decode_OriginateCallArg, _encode_OriginateCallArg } from "../AIN-Operations/OriginateCallArg.ta.mjs";
// export { OriginateCallArg, _decode_OriginateCallArg, _encode_OriginateCallArg } from "../AIN-Operations/OriginateCallArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary originateCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * originateCall OPERATION ::= {
 *         ARGUMENT
 *         OriginateCallArg
 *             ERRORS{ applicationError
 *         }
 *         --LINKED{
 *             --failureOutcome
 *             -- }
 *         CODE private: 25867
 *         --Family Name is "Connection Control (Call Model)"
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<OriginateCallArg>}
 * @implements {OPERATION<OriginateCallArg>}
 */
export
const originateCall: OPERATION<OriginateCallArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_OriginateCallArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_OriginateCallArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25867 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
