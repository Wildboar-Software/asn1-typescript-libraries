/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetButtonInformationArgument, _decode_SetButtonInformationArgument, _encode_SetButtonInformationArgument } from "../CSTA-set-button-information/SetButtonInformationArgument.ta.mjs";

import { SetButtonInformationResult, _decode_SetButtonInformationResult, _encode_SetButtonInformationResult } from "../CSTA-set-button-information/SetButtonInformationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setButtonInformation
 * @description
 *
 * Set Button Information (ECMA-269 §21.1.14 / ECMA-285 §19.1.14). Direction:
 * CF→SF. ROSE local CODE 273. Errors: `universalFailure`. Generates Button
 * Information. If already at the requested value: positive ack and no event
 * (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setButtonInformation OPERATION ::= {    ARGUMENT         SetButtonInformationArgument
 *     RESULT            SetButtonInformationResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 273 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetButtonInformationArgument, SetButtonInformationResult>}
 * @implements {OPERATION<SetButtonInformationArgument, SetButtonInformationResult>}
 */
export
const setButtonInformation: OPERATION<SetButtonInformationArgument, SetButtonInformationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetButtonInformationArgument,
        "&ResultType": _decode_SetButtonInformationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetButtonInformationArgument,
        "&ResultType": _encode_SetButtonInformationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 273 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
