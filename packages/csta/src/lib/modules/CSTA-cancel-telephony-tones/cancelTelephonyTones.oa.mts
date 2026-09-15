/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CancelTelephonyTonesArgument, _decode_CancelTelephonyTonesArgument, _encode_CancelTelephonyTonesArgument } from "../CSTA-cancel-telephony-tones/CancelTelephonyTonesArgument.ta.mjs";

import { CancelTelephonyTonesResult, _decode_CancelTelephonyTonesResult, _encode_CancelTelephonyTonesResult } from "../CSTA-cancel-telephony-tones/CancelTelephonyTonesResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary cancelTelephonyTones
 * @description
 *
 * Cancel Telephony Tones (ECMA-269 §18.1.2 / ECMA-285 §16.1.2). Direction:
 * CF→SF. ROSE local CODE 231. Errors: `universalFailure`. Cancels telephony
 * tone generation on `connectionToStopTone`.
 * A Telephony Tones Generated event without `toneGenerated` may
 * report that generation has stopped.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cancelTelephonyTones OPERATION ::= {    ARGUMENT        CancelTelephonyTonesArgument
 *     RESULT            CancelTelephonyTonesResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 231 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CancelTelephonyTonesArgument, CancelTelephonyTonesResult>}
 * @implements {OPERATION<CancelTelephonyTonesArgument, CancelTelephonyTonesResult>}
 */
export
const cancelTelephonyTones: OPERATION<CancelTelephonyTonesArgument, CancelTelephonyTonesResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CancelTelephonyTonesArgument,
        "&ResultType": _decode_CancelTelephonyTonesResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CancelTelephonyTonesArgument,
        "&ResultType": _encode_CancelTelephonyTonesResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 231 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
