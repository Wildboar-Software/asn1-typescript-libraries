/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { IORegisterAbortArgument, _decode_IORegisterAbortArgument, _encode_IORegisterAbortArgument } from "../CSTA-io-register-abort/IORegisterAbortArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary ioRegisterAbort
 * @description
 *
 * Switching function asynchronously cancels an active I/O registration (for
 * example when the associated device goes out of service) (ECMA-269 §24.1.2).
 *
 * Switching function → computing function.
 *
 * Unconfirmed (`ALWAYS RESPONDS FALSE`); no result.
 *
 * ROSE local:341. Errors: `universalFailure` (ECMA-285 §22.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ioRegisterAbort    OPERATION ::= {    ARGUMENT        IORegisterAbortArgument
 *     ERRORS            {universalFailure }
 *     ALWAYS RESPONDS        FALSE
 *     CODE            local: 341 }
 * ```
 * 
 * @constant
 * @type {OPERATION<IORegisterAbortArgument>}
 * @implements {OPERATION<IORegisterAbortArgument>}
 */
export
const ioRegisterAbort: OPERATION<IORegisterAbortArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_IORegisterAbortArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_IORegisterAbortArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 341 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
