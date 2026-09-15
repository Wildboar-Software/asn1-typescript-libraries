/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { SystemRegisterCancelArgument, _decode_SystemRegisterCancelArgument, _encode_SystemRegisterCancelArgument } from "../CSTA-system-register-cancel/SystemRegisterCancelArgument.ta.mjs";

import { SystemRegisterCancelResult, _decode_SystemRegisterCancelResult, _encode_SystemRegisterCancelResult } from "../CSTA-system-register-cancel/SystemRegisterCancelResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary systemRegisterCancel
 * @description
 *
 * System Register Cancel (ECMA-269 §14.1.4 / ECMA-285 §12.1.4). Direction:
 * CF→SF. ROSE local CODE 209. Errors: `universalFailure`. CF shall keep
 * processing outstanding SF system requests until
 * this is positively acknowledged. The SF shall not send further
 * system requests for the registration after that ack.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * systemRegisterCancel OPERATION ::= {     ARGUMENT         SystemRegisterCancelArgument
 *     RESULT             SystemRegisterCancelResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 209 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SystemRegisterCancelArgument, SystemRegisterCancelResult>}
 * @implements {OPERATION<SystemRegisterCancelArgument, SystemRegisterCancelResult>}
 */
export
const systemRegisterCancel: OPERATION<SystemRegisterCancelArgument, SystemRegisterCancelResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SystemRegisterCancelArgument,
        "&ResultType": _decode_SystemRegisterCancelResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_SystemRegisterCancelArgument,
        "&ResultType": _encode_SystemRegisterCancelResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 209 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
