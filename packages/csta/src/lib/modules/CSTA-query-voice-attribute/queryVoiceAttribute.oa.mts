/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { QueryVoiceAttributeArgument, _decode_QueryVoiceAttributeArgument, _encode_QueryVoiceAttributeArgument } from "../CSTA-query-voice-attribute/QueryVoiceAttributeArgument.ta.mjs";

import { QueryVoiceAttributeResult, _decode_QueryVoiceAttributeResult, _encode_QueryVoiceAttributeResult } from "../CSTA-query-voice-attribute/QueryVoiceAttributeResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary queryVoiceAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * queryVoiceAttribute OPERATION ::= {    ARGUMENT        QueryVoiceAttributeArgument
 *     RESULT            QueryVoiceAttributeResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 503 }
 * ```
 * 
 * @constant
 * @type {OPERATION<QueryVoiceAttributeArgument, QueryVoiceAttributeResult>}
 * @implements {OPERATION<QueryVoiceAttributeArgument, QueryVoiceAttributeResult>}
 */
export
const queryVoiceAttribute: OPERATION<QueryVoiceAttributeArgument, QueryVoiceAttributeResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_QueryVoiceAttributeArgument,
        "&ResultType": _decode_QueryVoiceAttributeResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_QueryVoiceAttributeArgument,
        "&ResultType": _encode_QueryVoiceAttributeResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 503 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
