/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SuspendArgument, _decode_SuspendArgument, _encode_SuspendArgument } from "../CSTA-suspend/SuspendArgument.ta.mjs";

import { SuspendResult, _decode_SuspendResult, _encode_SuspendResult } from "../CSTA-suspend/SuspendResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary suspend
 * @description
 *
 * Voice Suspend: temporarily stops playing or recording the current message
 * (ECMA-269 §26.1.16).
 *
 * Computing function → switching function.
 *
 * ROSE local:509. Errors: `universalFailure` (ECMA-285 §24.1.16).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * suspend    OPERATION ::= {    ARGUMENT        SuspendArgument
 *     RESULT            SuspendResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 509 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SuspendArgument, SuspendResult>}
 * @implements {OPERATION<SuspendArgument, SuspendResult>}
 */
export
const suspend: OPERATION<SuspendArgument, SuspendResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SuspendArgument,
        "&ResultType": _decode_SuspendResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SuspendArgument,
        "&ResultType": _encode_SuspendResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 509 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
