/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ClearConnectionArgument, _decode_ClearConnectionArgument, _encode_ClearConnectionArgument } from "../CSTA-clear-connection/ClearConnectionArgument.ta.mjs";

import { ClearConnectionResult, _decode_ClearConnectionResult, _encode_ClearConnectionResult } from "../CSTA-clear-connection/ClearConnectionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary clearConnection
 * @description
 *
 * Clear Connection (ECMA-269 §17.1.8 / ECMA-285 §15.1.8). Invoked
 * by the computing function on the switching function. Releases
 * `connectionToBeCleared` only. In a two-party call this may tear
 * the call down; in a conference it drops one party. Outside
 * devices may remain connected (FR 1). `reason` can be signalled
 * to the peer (e.g. busy) (FR 4). ROSE local CODE 5. Errors are
 * `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * clearConnection OPERATION ::= {     ARGUMENT         ClearConnectionArgument
 *     RESULT             ClearConnectionResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 5 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ClearConnectionArgument, ClearConnectionResult>}
 * @implements {OPERATION<ClearConnectionArgument, ClearConnectionResult>}
 */
export
const clearConnection: OPERATION<ClearConnectionArgument, ClearConnectionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ClearConnectionArgument,
        "&ResultType": _decode_ClearConnectionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ClearConnectionArgument,
        "&ResultType": _encode_ClearConnectionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 5 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
