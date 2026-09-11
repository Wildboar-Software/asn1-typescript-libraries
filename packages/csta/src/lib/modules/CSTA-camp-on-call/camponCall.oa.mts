/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CamponCallArgument, _decode_CamponCallArgument, _encode_CamponCallArgument } from "../CSTA-camp-on-call/CamponCallArgument.ta.mjs";

import { CamponCallResult, _decode_CamponCallResult, _encode_CamponCallResult } from "../CSTA-camp-on-call/CamponCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary camponCall
 * @description
 *
 * Camp On Call (ECMA-269 §17.1.6 / ECMA-285 §15.1.6). Invoked by
 * the computing function on the switching function. The called
 * connection is typically Fail and becomes Queued; the calling
 * connection stays Connected. Unlike Call Back, the original call
 * is not cleared. Cancel via Clear Connection/Call or on-hook
 * (FR 2). ROSE local CODE 217. Errors are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * camponCall OPERATION ::= {     ARGUMENT         CamponCallArgument
 *     RESULT             CamponCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 217 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CamponCallArgument, CamponCallResult>}
 * @implements {OPERATION<CamponCallArgument, CamponCallResult>}
 */
export
const camponCall: OPERATION<CamponCallArgument, CamponCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CamponCallArgument,
        "&ResultType": _decode_CamponCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CamponCallArgument,
        "&ResultType": _encode_CamponCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 217 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
