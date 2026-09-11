/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetLocationInformationArgument, _decode_GetLocationInformationArgument, _encode_GetLocationInformationArgument } from "../CSTA-get-location-information/GetLocationInformationArgument.ta.mjs";

import { GetLocationInformationResult, _decode_GetLocationInformationResult, _encode_GetLocationInformationResult } from "../CSTA-get-location-information/GetLocationInformationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getLocationInformation
 * @description
 *
 * Obtains location information associated with a device, whether or not it is
 * in a call. LocationInfo is PIDF-LO (RFC-4119/5139) (ECMA-269 §28.1.1 / §6.8.1
 * / §12.2.18).
 *
 * Computing function → switching function.
 *
 * ROSE local:530. Errors: `universalFailure` (ECMA-285 §26.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getLocationInformation OPERATION ::= {     ARGUMENT        GetLocationInformationArgument
 *     RESULT             GetLocationInformationResult
 *     ERRORS                 {universalFailure }
 *     CODE            local: 530}
 * ```
 * 
 * @constant
 * @type {OPERATION<GetLocationInformationArgument, GetLocationInformationResult>}
 * @implements {OPERATION<GetLocationInformationArgument, GetLocationInformationResult>}
 */
export
const getLocationInformation: OPERATION<GetLocationInformationArgument, GetLocationInformationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetLocationInformationArgument,
        "&ResultType": _decode_GetLocationInformationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetLocationInformationArgument,
        "&ResultType": _encode_GetLocationInformationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 530 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
