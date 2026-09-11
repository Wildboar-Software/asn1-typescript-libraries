/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { EscapeRegisterCancelArgument, _decode_EscapeRegisterCancelArgument, _encode_EscapeRegisterCancelArgument } from "../CSTA-escape-register-cancel/EscapeRegisterCancelArgument.ta.mjs";

import { EscapeRegisterCancelResult, _decode_EscapeRegisterCancelResult, _encode_EscapeRegisterCancelResult } from "../CSTA-escape-register-cancel/EscapeRegisterCancelResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary escapeRegisterCancel
 * @description
 *
 * Unregisters the computing function for escape services. After the positive
 * acknowledgement the switching function sends no further Escape requests for
 * that registration (ECMA-269 §29.1.3 / §9.4.2.1).
 *
 * Computing function → switching function.
 *
 * ROSE local:367. Errors: `universalFailure` (ECMA-285 §27.1.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * escapeRegisterCancel OPERATION ::= {    ARGUMENT        EscapeRegisterCancelArgument
 *     RESULT            EscapeRegisterCancelResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 367 }
 * ```
 * 
 * @constant
 * @type {OPERATION<EscapeRegisterCancelArgument, EscapeRegisterCancelResult>}
 * @implements {OPERATION<EscapeRegisterCancelArgument, EscapeRegisterCancelResult>}
 */
export
const escapeRegisterCancel: OPERATION<EscapeRegisterCancelArgument, EscapeRegisterCancelResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EscapeRegisterCancelArgument,
        "&ResultType": _decode_EscapeRegisterCancelResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_EscapeRegisterCancelArgument,
        "&ResultType": _encode_EscapeRegisterCancelResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 367 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
