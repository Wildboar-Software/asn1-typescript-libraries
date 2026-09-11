/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DeactivateArgument, _decode_DeactivateArgument, _encode_DeactivateArgument } from "../CSTA-deactivate/DeactivateArgument.ta.mjs";

import { DeactivateResult, _decode_DeactivateResult, _encode_DeactivateResult } from "../CSTA-deactivate/DeactivateResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary deactivate
 * @description
 *
 * Excludes a grammar rule from being considered when matching the speech of a
 * call (ECMA-269 §26.1.4).
 *
 * Computing function → switching function.
 *
 * ROSE local:514. Errors: `universalFailure` (ECMA-285 §24.1.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deactivate OPERATION ::= {    ARGUMENT        DeactivateArgument
 *     RESULT            DeactivateResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 514 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DeactivateArgument, DeactivateResult>}
 * @implements {OPERATION<DeactivateArgument, DeactivateResult>}
 */
export
const deactivate: OPERATION<DeactivateArgument, DeactivateResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DeactivateArgument,
        "&ResultType": _decode_DeactivateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DeactivateArgument,
        "&ResultType": _encode_DeactivateResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 514 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
