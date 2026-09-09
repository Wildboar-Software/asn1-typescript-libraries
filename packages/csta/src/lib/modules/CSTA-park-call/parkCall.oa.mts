/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ParkCallArgument, _decode_ParkCallArgument, _encode_ParkCallArgument } from "../CSTA-park-call/ParkCallArgument.ta.mjs";

import { ParkCallResult, _decode_ParkCallResult, _encode_ParkCallResult } from "../CSTA-park-call/ParkCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary parkCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * parkCall OPERATION ::= {     ARGUMENT         ParkCallArgument
 *     RESULT             ParkCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 18 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ParkCallArgument, ParkCallResult>}
 * @implements {OPERATION<ParkCallArgument, ParkCallResult>}
 */
export
const parkCall: OPERATION<ParkCallArgument, ParkCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ParkCallArgument,
        "&ResultType": _decode_ParkCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ParkCallArgument,
        "&ResultType": _encode_ParkCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 18 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
