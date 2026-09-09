/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SetVoiceAttributeArgument, _decode_SetVoiceAttributeArgument, _encode_SetVoiceAttributeArgument } from "../CSTA-set-voice-attribute/SetVoiceAttributeArgument.ta.mjs";

import { SetVoiceAttributeResult, _decode_SetVoiceAttributeResult, _encode_SetVoiceAttributeResult } from "../CSTA-set-voice-attribute/SetVoiceAttributeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary setVoiceAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * setVoiceAttribute OPERATION ::= {    ARGUMENT        SetVoiceAttributeArgument
 *     RESULT            SetVoiceAttributeResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 507 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SetVoiceAttributeArgument, SetVoiceAttributeResult>}
 * @implements {OPERATION<SetVoiceAttributeArgument, SetVoiceAttributeResult>}
 */
export
const setVoiceAttribute: OPERATION<SetVoiceAttributeArgument, SetVoiceAttributeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SetVoiceAttributeArgument,
        "&ResultType": _decode_SetVoiceAttributeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SetVoiceAttributeArgument,
        "&ResultType": _encode_SetVoiceAttributeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 507 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
