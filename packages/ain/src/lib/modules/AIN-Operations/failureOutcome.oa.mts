/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { FailureOutcomeArg, _decode_FailureOutcomeArg, _encode_FailureOutcomeArg } from "../AIN-Operations/FailureOutcomeArg.ta.mjs";
// export { FailureOutcomeArg, _decode_FailureOutcomeArg, _encode_FailureOutcomeArg } from "../AIN-Operations/FailureOutcomeArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary failureOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * failureOutcome OPERATION ::= {
 *         ARGUMENT
 *             FailureOutcomeArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --acknowledge,
 *             --connectToResource,
 *             --disconnect,
 *             --mergeCall
 *             -- }
 *         CODE private: 25604
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<FailureOutcomeArg>}
 * @implements {OPERATION<FailureOutcomeArg>}
 */
export
const failureOutcome: OPERATION<FailureOutcomeArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_FailureOutcomeArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_FailureOutcomeArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25604 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
