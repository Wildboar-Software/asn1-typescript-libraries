/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetCSTAFeatureArgument, _decode_GetCSTAFeatureArgument, _encode_GetCSTAFeatureArgument } from "../CSTA-get-csta-features-service/GetCSTAFeatureArgument.ta.mjs";

import { GetCSTAFeatureResult, _decode_GetCSTAFeatureResult, _encode_GetCSTAFeatureResult } from "../CSTA-get-csta-features-service/GetCSTAFeatureResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getCSTAFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getCSTAFeature OPERATION ::= {     ARGUMENT         GetCSTAFeatureArgument
 *     RESULT             GetCSTAFeatureResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 370 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetCSTAFeatureArgument, GetCSTAFeatureResult>}
 * @implements {OPERATION<GetCSTAFeatureArgument, GetCSTAFeatureResult>}
 */
export
const getCSTAFeature: OPERATION<GetCSTAFeatureArgument, GetCSTAFeatureResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetCSTAFeatureArgument,
        "&ResultType": _decode_GetCSTAFeatureResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetCSTAFeatureArgument,
        "&ResultType": _encode_GetCSTAFeatureResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 370 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
