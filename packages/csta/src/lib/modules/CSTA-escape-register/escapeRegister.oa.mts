/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { EscapeRegisterArgument, _decode_EscapeRegisterArgument, _encode_EscapeRegisterArgument } from "../CSTA-escape-register/EscapeRegisterArgument.ta.mjs";

import { EscapeRegisterResult, _decode_EscapeRegisterResult, _encode_EscapeRegisterResult } from "../CSTA-escape-register/EscapeRegisterResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary escapeRegister
 * @description
 *
 * Registers the computing function for escape services. Required before
 * receiving Escape requests if the SF supports escape registration. The
 * computing function never needs a registration to send Escape (ECMA-269
 * §29.1.1 / §9.4.2.1).
 *
 * Computing function → switching function.
 *
 * ROSE local:365. Errors: `universalFailure` (ECMA-285 §27.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * escapeRegister OPERATION ::= {     ARGUMENT        EscapeRegisterArgument
 *     RESULT            EscapeRegisterResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 365 }
 * ```
 * 
 * @constant
 * @type {OPERATION<EscapeRegisterArgument, EscapeRegisterResult>}
 * @implements {OPERATION<EscapeRegisterArgument, EscapeRegisterResult>}
 */
export
const escapeRegister: OPERATION<EscapeRegisterArgument, EscapeRegisterResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EscapeRegisterArgument,
        "&ResultType": _decode_EscapeRegisterResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_EscapeRegisterArgument,
        "&ResultType": _encode_EscapeRegisterResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 365 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
