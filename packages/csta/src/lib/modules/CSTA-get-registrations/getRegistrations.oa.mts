/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetRegistrationsArg, _decode_GetRegistrationsArg, _encode_GetRegistrationsArg } from "../CSTA-get-registrations/GetRegistrationsArg.ta.mjs";

import { GetRegistrationsRes, _decode_GetRegistrationsRes, _encode_GetRegistrationsRes } from "../CSTA-get-registrations/GetRegistrationsRes.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getRegistrations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getRegistrations OPERATION ::= {     ARGUMENT         GetRegistrationsArg
 *     RESULT             GetRegistrationsRes
 *     ERRORS             {universalFailure }
 *     CODE             local: 371 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetRegistrationsArg, GetRegistrationsRes>}
 * @implements {OPERATION<GetRegistrationsArg, GetRegistrationsRes>}
 */
export
const getRegistrations: OPERATION<GetRegistrationsArg, GetRegistrationsRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetRegistrationsArg,
        "&ResultType": _decode_GetRegistrationsRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetRegistrationsArg,
        "&ResultType": _encode_GetRegistrationsRes,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 371 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
