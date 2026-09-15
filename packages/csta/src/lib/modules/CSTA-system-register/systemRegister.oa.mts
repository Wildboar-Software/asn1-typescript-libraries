/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SystemRegisterArgument, _decode_SystemRegisterArgument, _encode_SystemRegisterArgument } from "../CSTA-system-register/SystemRegisterArgument.ta.mjs";

import { SystemRegisterResult, _decode_SystemRegisterResult, _encode_SystemRegisterResult } from "../CSTA-system-register/SystemRegisterResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary systemRegister
 * @description
 *
 * System Register (ECMA-269 §14.1.2 / ECMA-285 §12.1.2). Direction: CF→SF. ROSE
 * local CODE 207. Errors: `universalFailure`. Registers for System Status,
 * Request System Status, Switching
 * Function Capabilities Changed, and/or Switching Function
 * Devices Changed. `requestedStatusFilter` is mandatory iff
 * System Status is requested.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * systemRegister OPERATION ::= {     ARGUMENT         SystemRegisterArgument
 *     RESULT             SystemRegisterResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 207 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SystemRegisterArgument, SystemRegisterResult>}
 * @implements {OPERATION<SystemRegisterArgument, SystemRegisterResult>}
 */
export
const systemRegister: OPERATION<SystemRegisterArgument, SystemRegisterResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SystemRegisterArgument,
        "&ResultType": _decode_SystemRegisterResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SystemRegisterArgument,
        "&ResultType": _encode_SystemRegisterResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 207 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
