/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ConsultationCallArgument, _decode_ConsultationCallArgument, _encode_ConsultationCallArgument } from "../CSTA-consultation-call/ConsultationCallArgument.ta.mjs";

import { ConsultationCallResult, _decode_ConsultationCallResult, _encode_ConsultationCallResult } from "../CSTA-consultation-call/ConsultationCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary consultationCall
 * @description
 *
 * Consultation Call (ECMA-269 §17.1.10 / ECMA-285 §15.1.10).
 * Invoked by the computing function on the switching function.
 * `existingCall` must be Connected and becomes Hold; a new call
 * is originated toward `consultedDevice`. `consultOptions`
 * reserves transfer/conference facilities (FR 2–5).
 * `consultedDevice` may be null or end with `;` for multi-stage
 * dialling via Dial Digits (FR 6–7). ROSE local CODE 7. Errors
 * are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * consultationCall OPERATION ::= {     ARGUMENT         ConsultationCallArgument
 *     RESULT             ConsultationCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 7 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ConsultationCallArgument, ConsultationCallResult>}
 * @implements {OPERATION<ConsultationCallArgument, ConsultationCallResult>}
 */
export
const consultationCall: OPERATION<ConsultationCallArgument, ConsultationCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ConsultationCallArgument,
        "&ResultType": _decode_ConsultationCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ConsultationCallArgument,
        "&ResultType": _encode_ConsultationCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 7 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
