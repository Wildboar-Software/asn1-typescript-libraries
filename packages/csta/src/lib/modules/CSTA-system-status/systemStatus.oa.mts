/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SystemStatusArg, _decode_SystemStatusArg, _encode_SystemStatusArg } from "../CSTA-system-status/SystemStatusArg.ta.mjs";

import { SystemStatusRes, _decode_SystemStatusRes, _encode_SystemStatusRes } from "../CSTA-system-status/SystemStatusRes.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary systemStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * systemStatus OPERATION ::= {     ARGUMENT         SystemStatusArg
 *     RESULT             SystemStatusRes
 *     ERRORS             {universalFailure }
 *     CODE             local: 211 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SystemStatusArg, SystemStatusRes>}
 * @implements {OPERATION<SystemStatusArg, SystemStatusRes>}
 */
export
const systemStatus: OPERATION<SystemStatusArg, SystemStatusRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SystemStatusArg,
        "&ResultType": _decode_SystemStatusRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SystemStatusArg,
        "&ResultType": _encode_SystemStatusRes,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 211 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
