/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SwFunctionDevicesChangedArg, _decode_SwFunctionDevicesChangedArg, _encode_SwFunctionDevicesChangedArg } from "../CSTA-switching-function-devices-changed/SwFunctionDevicesChangedArg.ta.mjs";

import { SwFunctionDevicesChangedRes, _decode_SwFunctionDevicesChangedRes, _encode_SwFunctionDevicesChangedRes } from "../CSTA-switching-function-devices-changed/SwFunctionDevicesChangedRes.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary swFunctionDevicesChanged
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * swFunctionDevicesChanged OPERATION ::= {     ARGUMENT         SwFunctionDevicesChangedArg
 *     RESULT             SwFunctionDevicesChangedRes
 *     ERRORS             {universalFailure }
 *     CODE             local: 213 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SwFunctionDevicesChangedArg, SwFunctionDevicesChangedRes>}
 * @implements {OPERATION<SwFunctionDevicesChangedArg, SwFunctionDevicesChangedRes>}
 */
export
const swFunctionDevicesChanged: OPERATION<SwFunctionDevicesChangedArg, SwFunctionDevicesChangedRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SwFunctionDevicesChangedArg,
        "&ResultType": _decode_SwFunctionDevicesChangedRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SwFunctionDevicesChangedArg,
        "&ResultType": _encode_SwFunctionDevicesChangedRes,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 213 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
