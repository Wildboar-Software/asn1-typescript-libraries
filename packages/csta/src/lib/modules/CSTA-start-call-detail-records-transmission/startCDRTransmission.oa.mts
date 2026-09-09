/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { StartCDRTransmissionArgument, _decode_StartCDRTransmissionArgument, _encode_StartCDRTransmissionArgument } from "../CSTA-start-call-detail-records-transmission/StartCDRTransmissionArgument.ta.mjs";

import { StartCDRTransmissionResult, _decode_StartCDRTransmissionResult, _encode_StartCDRTransmissionResult } from "../CSTA-start-call-detail-records-transmission/StartCDRTransmissionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary startCDRTransmission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * startCDRTransmission OPERATION ::= {     ARGUMENT        StartCDRTransmissionArgument
 *     RESULT            StartCDRTransmissionResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 363 }
 * ```
 * 
 * @constant
 * @type {OPERATION<StartCDRTransmissionArgument, StartCDRTransmissionResult>}
 * @implements {OPERATION<StartCDRTransmissionArgument, StartCDRTransmissionResult>}
 */
export
const startCDRTransmission: OPERATION<StartCDRTransmissionArgument, StartCDRTransmissionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StartCDRTransmissionArgument,
        "&ResultType": _decode_StartCDRTransmissionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StartCDRTransmissionArgument,
        "&ResultType": _encode_StartCDRTransmissionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 363 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
