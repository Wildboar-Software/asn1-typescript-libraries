/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TDTMFEnteredArg, _decode_TDTMFEnteredArg, _encode_TDTMFEnteredArg } from "../AIN-Operations/TDTMFEnteredArg.ta.mjs";
// export { TDTMFEnteredArg, _decode_TDTMFEnteredArg, _encode_TDTMFEnteredArg } from "../AIN-Operations/TDTMFEnteredArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary tDTMFEntered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tDTMFEntered OPERATION ::= {
 *         ARGUMENT
 *         TDTMFEnteredArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             -- continue,
 *             --disconnect,
 *             --forwardCall,
 *             --sendToResource
 *             -- }
 *         CODE private: 25628
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<TDTMFEnteredArg>}
 * @implements {OPERATION<TDTMFEnteredArg>}
 */
export
const tDTMFEntered: OPERATION<TDTMFEnteredArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TDTMFEnteredArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TDTMFEnteredArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25628 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
