/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SingleStepConfArgument, _decode_SingleStepConfArgument, _encode_SingleStepConfArgument } from "../CSTA-single-step-conference/SingleStepConfArgument.ta.mjs";

import { SingleStepConfResult, _decode_SingleStepConfResult, _encode_SingleStepConfResult } from "../CSTA-single-step-conference/SingleStepConfResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary singleStepConf
 * @description
 *
 * Single Step Conference (ECMA-269 §17.1.25 / ECMA-285
 * §15.1.24). Invoked by the computing function on the switching
 * function. Adds `deviceToJoin` to `activeCall` without a
 * consultative call. Result CallID matches the original call.
 * ROSE local CODE 20. Errors are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * singleStepConf OPERATION ::= {     ARGUMENT         SingleStepConfArgument
 *     RESULT             SingleStepConfResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 20 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SingleStepConfArgument, SingleStepConfResult>}
 * @implements {OPERATION<SingleStepConfArgument, SingleStepConfResult>}
 */
export
const singleStepConf: OPERATION<SingleStepConfArgument, SingleStepConfResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SingleStepConfArgument,
        "&ResultType": _decode_SingleStepConfResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SingleStepConfArgument,
        "&ResultType": _encode_SingleStepConfResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 20 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
