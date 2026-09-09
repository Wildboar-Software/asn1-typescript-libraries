/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetLocationInformationArgument, _decode_SetLocationInformationArgument, _encode_SetLocationInformationArgument } from "../CSTA-set-location-information/SetLocationInformationArgument.ta.mjs";

import { SetLocationInformationResult, _decode_SetLocationInformationResult, _encode_SetLocationInformationResult } from "../CSTA-set-location-information/SetLocationInformationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setLocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setLocationInformation OPERATION ::= {     ARGUMENT        SetLocationInformationArgument
 *     RESULT            SetLocationInformationResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 531}
 * ```
 * 
 * @constant
 * @type {OPERATION<SetLocationInformationArgument, SetLocationInformationResult>}
 * @implements {OPERATION<SetLocationInformationArgument, SetLocationInformationResult>}
 */
export
const setLocationInformation: OPERATION<SetLocationInformationArgument, SetLocationInformationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetLocationInformationArgument,
        "&ResultType": _decode_SetLocationInformationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetLocationInformationArgument,
        "&ResultType": _encode_SetLocationInformationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 531 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
