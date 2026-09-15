/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { QueueArgument, _decode_QueueArgument, _encode_QueueArgument } from "../CSTA-queue/QueueArgument.ta.mjs";

import { QueueResult, _decode_QueueResult, _encode_QueueResult } from "../CSTA-queue/QueueResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary queue
 * @description
 *
 * Voice Queue: stores a copy of a Prompt on the Prompt Queue (ECMA-269
 * §26.1.8). Not the Queued event.
 *
 * Computing function → switching function.
 *
 * ROSE local:515. Errors: `universalFailure` (ECMA-285 §24.1.8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * queue OPERATION ::= {    ARGUMENT        QueueArgument
 *     RESULT            QueueResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 515 }
 * ```
 * 
 * @constant
 * @type {OPERATION<QueueArgument, QueueResult>}
 * @implements {OPERATION<QueueArgument, QueueResult>}
 */
export
const queue: OPERATION<QueueArgument, QueueResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_QueueArgument,
        "&ResultType": _decode_QueueResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_QueueArgument,
        "&ResultType": _encode_QueueResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 515 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
