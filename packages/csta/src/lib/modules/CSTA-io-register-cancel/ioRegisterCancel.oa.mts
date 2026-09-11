/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { IORegisterCancelArgument, _decode_IORegisterCancelArgument, _encode_IORegisterCancelArgument } from "../CSTA-io-register-cancel/IORegisterCancelArgument.ta.mjs";

import { IORegisterCancelResult, _decode_IORegisterCancelResult, _encode_IORegisterCancelResult } from "../CSTA-io-register-cancel/IORegisterCancelResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary ioRegisterCancel
 * @description
 *
 * Cancels a previous I/O registration. After the positive acknowledgement the
 * computing function receives no further I/O requests for that registration; it
 * shall keep processing requests until that acknowledgement (ECMA-269 §24.1.3).
 *
 * Computing function → switching function.
 *
 * ROSE local:342. Errors: `universalFailure` (ECMA-285 §22.1.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ioRegisterCancel OPERATION ::= {    ARGUMENT        IORegisterCancelArgument
 *     RESULT            IORegisterCancelResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 342 }
 * ```
 * 
 * @constant
 * @type {OPERATION<IORegisterCancelArgument, IORegisterCancelResult>}
 * @implements {OPERATION<IORegisterCancelArgument, IORegisterCancelResult>}
 */
export
const ioRegisterCancel: OPERATION<IORegisterCancelArgument, IORegisterCancelResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IORegisterCancelArgument,
        "&ResultType": _decode_IORegisterCancelResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_IORegisterCancelArgument,
        "&ResultType": _encode_IORegisterCancelResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 342 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
