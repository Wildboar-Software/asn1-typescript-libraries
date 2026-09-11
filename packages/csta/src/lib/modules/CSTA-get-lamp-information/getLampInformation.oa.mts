/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetLampInformationArgument, _decode_GetLampInformationArgument, _encode_GetLampInformationArgument } from "../CSTA-get-lamp-information/GetLampInformationArgument.ta.mjs";

import { GetLampInformationResult, _decode_GetLampInformationResult, _encode_GetLampInformationResult } from "../CSTA-get-lamp-information/GetLampInformationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getLampInformation
 * @description
 *
 * Get Lamp Information (ECMA-269 §21.1.6 / ECMA-285 §19.1.6). Direction: CF→SF.
 * ROSE local CODE 265. Errors: `universalFailure`. Atomic acknowledgement.
 * All-lamps includes lamps with no button (§21.1.6.3.4 FR 1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getLampInformation OPERATION ::= {    ARGUMENT         GetLampInformationArgument
 *     RESULT            GetLampInformationResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 265 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetLampInformationArgument, GetLampInformationResult>}
 * @implements {OPERATION<GetLampInformationArgument, GetLampInformationResult>}
 */
export
const getLampInformation: OPERATION<GetLampInformationArgument, GetLampInformationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetLampInformationArgument,
        "&ResultType": _decode_GetLampInformationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetLampInformationArgument,
        "&ResultType": _encode_GetLampInformationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 265 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
