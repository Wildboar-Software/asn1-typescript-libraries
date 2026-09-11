/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetLocationInformationArgument, _decode_SetLocationInformationArgument, _encode_SetLocationInformationArgument } from "../CSTA-set-location-information/SetLocationInformationArgument.ta.mjs";

import { SetLocationInformationResult, _decode_SetLocationInformationResult, _encode_SetLocationInformationResult } from "../CSTA-set-location-information/SetLocationInformationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setLocationInformation
 * @description
 *
 * Associates application-specified location information with a device. Absent
 * `locationInfo` clears stored location. `replaceMode` selects replace-all
 * (default) or replace matching person/device/tuple components (ECMA-269
 * §28.1.2 / §6.8.5).
 *
 * Computing function → switching function.
 *
 * ROSE local:531. Errors: `universalFailure` (ECMA-285 §26.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
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
