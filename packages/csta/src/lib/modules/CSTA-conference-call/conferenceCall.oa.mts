/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ConferenceCallArgument, _decode_ConferenceCallArgument, _encode_ConferenceCallArgument } from "../CSTA-conference-call/ConferenceCallArgument.ta.mjs";

import { ConferenceCallResult, _decode_ConferenceCallResult, _encode_ConferenceCallResult } from "../CSTA-conference-call/ConferenceCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary conferenceCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * conferenceCall OPERATION ::= {     ARGUMENT         ConferenceCallArgument
 *     RESULT             ConferenceCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 6 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ConferenceCallArgument, ConferenceCallResult>}
 * @implements {OPERATION<ConferenceCallArgument, ConferenceCallResult>}
 */
export
const conferenceCall: OPERATION<ConferenceCallArgument, ConferenceCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ConferenceCallArgument,
        "&ResultType": _decode_ConferenceCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ConferenceCallArgument,
        "&ResultType": _encode_ConferenceCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 6 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
