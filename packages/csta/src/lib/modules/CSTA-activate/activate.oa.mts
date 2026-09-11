/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { ActivateArgument, _decode_ActivateArgument, _encode_ActivateArgument } from "../CSTA-activate/ActivateArgument.ta.mjs";

import { ActivateResult, _decode_ActivateResult, _encode_ActivateResult } from "../CSTA-activate/ActivateResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary activate
 * @description
 *
 * Enables a grammar rule to be considered when matching the speech of a call
 * (ECMA-269 §26.1.1).
 *
 * Computing function → switching function.
 *
 * ROSE local:512. Errors: `universalFailure` (ECMA-285 §24.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activate OPERATION ::= {    ARGUMENT        ActivateArgument
 *     RESULT            ActivateResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 512 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ActivateArgument, ActivateResult>}
 * @implements {OPERATION<ActivateArgument, ActivateResult>}
 */
export
const activate: OPERATION<ActivateArgument, ActivateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ActivateArgument,
        "&ResultType": _decode_ActivateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ActivateArgument,
        "&ResultType": _encode_ActivateResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 512 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
