/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SwFunctionCapsChangedArg, _decode_SwFunctionCapsChangedArg, _encode_SwFunctionCapsChangedArg } from "../CSTA-switching-function-capabilities-changed/SwFunctionCapsChangedArg.ta.mjs";

import { SwFunctionCapsChangedRes, _decode_SwFunctionCapsChangedRes, _encode_SwFunctionCapsChangedRes } from "../CSTA-switching-function-capabilities-changed/SwFunctionCapsChangedRes.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary swFunctionCapsChanged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * swFunctionCapsChanged OPERATION ::= {     ARGUMENT         SwFunctionCapsChangedArg
 *     RESULT             SwFunctionCapsChangedRes
 *     ERRORS             {universalFailure }
 *     CODE             local: 212 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SwFunctionCapsChangedArg, SwFunctionCapsChangedRes>}
 * @implements {OPERATION<SwFunctionCapsChangedArg, SwFunctionCapsChangedRes>}
 */
export
const swFunctionCapsChanged: OPERATION<SwFunctionCapsChangedArg, SwFunctionCapsChangedRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SwFunctionCapsChangedArg,
        "&ResultType": _decode_SwFunctionCapsChangedRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SwFunctionCapsChangedArg,
        "&ResultType": _encode_SwFunctionCapsChangedRes,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 212 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
