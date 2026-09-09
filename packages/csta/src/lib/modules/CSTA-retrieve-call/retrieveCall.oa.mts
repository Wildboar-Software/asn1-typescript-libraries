/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RetrieveCallArgument, _decode_RetrieveCallArgument, _encode_RetrieveCallArgument } from "../CSTA-retrieve-call/RetrieveCallArgument.ta.mjs";

import { RetrieveCallResult, _decode_RetrieveCallResult, _encode_RetrieveCallResult } from "../CSTA-retrieve-call/RetrieveCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary retrieveCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * retrieveCall OPERATION ::= {     ARGUMENT         RetrieveCallArgument
 *     RESULT             RetrieveCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 14 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RetrieveCallArgument, RetrieveCallResult>}
 * @implements {OPERATION<RetrieveCallArgument, RetrieveCallResult>}
 */
export
const retrieveCall: OPERATION<RetrieveCallArgument, RetrieveCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RetrieveCallArgument,
        "&ResultType": _decode_RetrieveCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RetrieveCallArgument,
        "&ResultType": _encode_RetrieveCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 14 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
