/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SingleStepTransArgument, _decode_SingleStepTransArgument, _encode_SingleStepTransArgument } from "../CSTA-single-step-transfer/SingleStepTransArgument.ta.mjs";

import { SingleStepTransResult, _decode_SingleStepTransResult, _encode_SingleStepTransResult } from "../CSTA-single-step-transfer/SingleStepTransResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary singleStepTrans
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * singleStepTrans OPERATION ::= {     ARGUMENT         SingleStepTransArgument
 *     RESULT             SingleStepTransResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 50 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SingleStepTransArgument, SingleStepTransResult>}
 * @implements {OPERATION<SingleStepTransArgument, SingleStepTransResult>}
 */
export
const singleStepTrans: OPERATION<SingleStepTransArgument, SingleStepTransResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SingleStepTransArgument,
        "&ResultType": _decode_SingleStepTransResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SingleStepTransArgument,
        "&ResultType": _encode_SingleStepTransResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 50 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
