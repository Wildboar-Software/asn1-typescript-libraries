/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SuccessOutcomeArg, _decode_SuccessOutcomeArg, _encode_SuccessOutcomeArg } from "../AIN-Operations/SuccessOutcomeArg.ta.mjs";
// export { SuccessOutcomeArg, _decode_SuccessOutcomeArg, _encode_SuccessOutcomeArg } from "../AIN-Operations/SuccessOutcomeArg.ta.mjs";
import { applicationError } from "../AIN-Errors/applicationError.oa.mjs";
// export { applicationError } from "../AIN-Errors/applicationError.oa.mjs";


/**
 * @summary successOutcome
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * successOutcome OPERATION ::= {
 *         ARGUMENT
 *         SuccessOutcomeArg
 *         ERRORS{ applicationError,
 *         failureReport
 *         }
 *         --LINKED{
 *             --acknowledge,
 *             --connectToResource,
 *             --disconnectLeg,
 *             --moveLeg
 *             -- }
 *         CODE private: 25617
 *         }
 * ```
 * 
 * @constant
 * @type {OPERATION<SuccessOutcomeArg>}
 * @implements {OPERATION<SuccessOutcomeArg>}
 */
export
const successOutcome: OPERATION<SuccessOutcomeArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SuccessOutcomeArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SuccessOutcomeArg,
        "&ResultType": undefined,
    },
    "&Errors": [ applicationError, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { private_: 25617 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
