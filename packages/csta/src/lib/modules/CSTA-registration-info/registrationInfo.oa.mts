/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { RegistrationInfoArg, _decode_RegistrationInfoArg, _encode_RegistrationInfoArg } from "../CSTA-registration-info/RegistrationInfoArg.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary registrationInfo
 * @description
 *
 * Switching-function-to-computing-function operation that delivers Registration
 * Info segments. ECMA-269 §14.2.6.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * registrationInfo OPERATION ::= {     ARGUMENT         RegistrationInfoArg
 *     ERRORS             {universalFailure }
 *     CODE             local: 372 }
 * ```
 * 
 * @constant
 * @type {OPERATION<RegistrationInfoArg>}
 * @implements {OPERATION<RegistrationInfoArg>}
 */
export
const registrationInfo: OPERATION<RegistrationInfoArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RegistrationInfoArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_RegistrationInfoArg,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 372 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
