/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetButtonInformationArgument, _decode_GetButtonInformationArgument, _encode_GetButtonInformationArgument } from "../CSTA-get-button-information/GetButtonInformationArgument.ta.mjs";

import { GetButtonInformationResult, _decode_GetButtonInformationResult, _encode_GetButtonInformationResult } from "../CSTA-get-button-information/GetButtonInformationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getButtonInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getButtonInformation OPERATION ::= {    ARGUMENT         GetButtonInformationArgument
 *     RESULT            GetButtonInformationResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 262 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetButtonInformationArgument, GetButtonInformationResult>}
 * @implements {OPERATION<GetButtonInformationArgument, GetButtonInformationResult>}
 */
export
const getButtonInformation: OPERATION<GetButtonInformationArgument, GetButtonInformationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetButtonInformationArgument,
        "&ResultType": _decode_GetButtonInformationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetButtonInformationArgument,
        "&ResultType": _encode_GetButtonInformationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 262 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
