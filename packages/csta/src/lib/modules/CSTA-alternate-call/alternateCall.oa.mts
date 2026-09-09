/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { AlternateCallArgument, _decode_AlternateCallArgument, _encode_AlternateCallArgument } from "../CSTA-alternate-call/AlternateCallArgument.ta.mjs";

import { AlternateCallResult, _decode_AlternateCallResult, _encode_AlternateCallResult } from "../CSTA-alternate-call/AlternateCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary alternateCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * alternateCall OPERATION ::= {     ARGUMENT         AlternateCallArgument
 *     RESULT             AlternateCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 1 }
 * ```
 * 
 * @constant
 * @type {OPERATION<AlternateCallArgument, AlternateCallResult>}
 * @implements {OPERATION<AlternateCallArgument, AlternateCallResult>}
 */
export
const alternateCall: OPERATION<AlternateCallArgument, AlternateCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AlternateCallArgument,
        "&ResultType": _decode_AlternateCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AlternateCallArgument,
        "&ResultType": _encode_AlternateCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 1 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
