/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RequestSysStatArg, _decode_RequestSysStatArg, _encode_RequestSysStatArg } from "../CSTA-request-system-status/RequestSysStatArg.ta.mjs";

import { RequestSysStatRes, _decode_RequestSysStatRes, _encode_RequestSysStatRes } from "../CSTA-request-system-status/RequestSysStatRes.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary requestSysStat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * requestSysStat OPERATION ::= {     ARGUMENT         RequestSysStatArg
 *     RESULT             RequestSysStatRes
 *     ERRORS             {universalFailure }
 *     CODE             local: 210 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RequestSysStatArg, RequestSysStatRes>}
 * @implements {OPERATION<RequestSysStatArg, RequestSysStatRes>}
 */
export
const requestSysStat: OPERATION<RequestSysStatArg, RequestSysStatRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestSysStatArg,
        "&ResultType": _decode_RequestSysStatRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestSysStatArg,
        "&ResultType": _encode_RequestSysStatRes,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 210 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
