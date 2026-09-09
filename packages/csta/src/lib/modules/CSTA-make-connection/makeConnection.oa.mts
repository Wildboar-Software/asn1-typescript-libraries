/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { MakeConnectionArgument, _decode_MakeConnectionArgument, _encode_MakeConnectionArgument } from "../CSTA-make-connection/MakeConnectionArgument.ta.mjs";

import { MakeConnectionResult, _decode_MakeConnectionResult, _encode_MakeConnectionResult } from "../CSTA-make-connection/MakeConnectionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary makeConnection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * makeConnection OPERATION ::= {     ARGUMENT         MakeConnectionArgument
 *     RESULT             MakeConnectionResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 375 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MakeConnectionArgument, MakeConnectionResult>}
 * @implements {OPERATION<MakeConnectionArgument, MakeConnectionResult>}
 */
export
const makeConnection: OPERATION<MakeConnectionArgument, MakeConnectionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MakeConnectionArgument,
        "&ResultType": _decode_MakeConnectionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_MakeConnectionArgument,
        "&ResultType": _encode_MakeConnectionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 375 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
