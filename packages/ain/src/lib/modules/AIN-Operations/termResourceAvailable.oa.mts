/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { TermResourceAvailableArg, _decode_TermResourceAvailableArg, _encode_TermResourceAvailableArg } from "../AIN-Operations/TermResourceAvailableArg.ta.mjs";
// export { TermResourceAvailableArg, _decode_TermResourceAvailableArg, _encode_TermResourceAvailableArg } from "../AIN-Operations/TermResourceAvailableArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary termResourceAvailable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * termResourceAvailable OPERATION ::= {
 *         ARGUMENT
 *         TermResourceAvailableArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --forwardCall,
 *             --sendToResource,
 *             -- continue
 *             -- }
 *         CODE private: 25613
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<TermResourceAvailableArg>}
 * @implements {OPERATION<TermResourceAvailableArg>}
 */
export
const termResourceAvailable: OPERATION<TermResourceAvailableArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TermResourceAvailableArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_TermResourceAvailableArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25613 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
