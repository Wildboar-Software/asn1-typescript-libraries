/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GetDisplayArgument, _decode_GetDisplayArgument, _encode_GetDisplayArgument } from "../CSTA-get-display/GetDisplayArgument.ta.mjs";

import { GetDisplayResult, _decode_GetDisplayResult, _encode_GetDisplayResult } from "../CSTA-get-display/GetDisplayResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary getDisplay
 * @description
 *
 * Get Display (ECMA-269 §21.1.4 / ECMA-285 §19.1.4). Direction: CF→SF. ROSE
 * local CODE 263. Errors: `universalFailure`. Atomic acknowledgement.
 * `contentsOfDisplay` always has `logicalRows * logicalColumns` characters
 * (§21.1.4.3.4 FR 1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getDisplay OPERATION ::= {    ARGUMENT         GetDisplayArgument
 *     RESULT            GetDisplayResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 263 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetDisplayArgument, GetDisplayResult>}
 * @implements {OPERATION<GetDisplayArgument, GetDisplayResult>}
 */
export
const getDisplay: OPERATION<GetDisplayArgument, GetDisplayResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetDisplayArgument,
        "&ResultType": _decode_GetDisplayResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetDisplayArgument,
        "&ResultType": _encode_GetDisplayResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 263 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
