/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { JoinCallArgument, _decode_JoinCallArgument, _encode_JoinCallArgument } from "../CSTA-join-call/JoinCallArgument.ta.mjs";

import { JoinCallResult, _decode_JoinCallResult, _encode_JoinCallResult } from "../CSTA-join-call/JoinCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary joinCall
 * @description
 *
 * Join Call (ECMA-269 §17.1.17 / ECMA-285 §15.1.17). Invoked by
 * the computing function on the switching function. Adds
 * `joiningDevice` to `activeCall`. The resulting CallID is
 * inherited from the original call (FR 6). Forwarding and DND at
 * the joining device are not honoured (FR 5). ROSE local
 * CODE 223. Errors are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * joinCall OPERATION ::= {     ARGUMENT         JoinCallArgument
 *     RESULT             JoinCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 223 }
 * ```
 * 
 * @constant
 * @type {OPERATION<JoinCallArgument, JoinCallResult>}
 * @implements {OPERATION<JoinCallArgument, JoinCallResult>}
 */
export
const joinCall: OPERATION<JoinCallArgument, JoinCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_JoinCallArgument,
        "&ResultType": _decode_JoinCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_JoinCallArgument,
        "&ResultType": _encode_JoinCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 223 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
