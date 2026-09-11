/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { MakeCallArgument, _decode_MakeCallArgument, _encode_MakeCallArgument } from "../CSTA-make-call/MakeCallArgument.ta.mjs";

import { MakeCallResult, _decode_MakeCallResult, _encode_MakeCallResult } from "../CSTA-make-call/MakeCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary makeCall
 * @description
 *
 * Make Call (ECMA-269 §17.1.18 / ECMA-285 §15.1.18). Invoked by
 * the computing function on the switching function. Creates a
 * call from `callingDevice` toward `calledDirectoryNumber`.
 * Calling-device Forwarding/DND are not honoured (FR 4–5). A
 * null or `;`-terminated called number stages dialling via Dial
 * Digits (FR 7–8). If the device is already Initiated, the
 * ConnectionID is reused when supported (FR 6). ROSE local
 * CODE 10. Errors are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * makeCall OPERATION ::= {     ARGUMENT         MakeCallArgument
 *     RESULT             MakeCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 10 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MakeCallArgument, MakeCallResult>}
 * @implements {OPERATION<MakeCallArgument, MakeCallResult>}
 */
export
const makeCall: OPERATION<MakeCallArgument, MakeCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MakeCallArgument,
        "&ResultType": _decode_MakeCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_MakeCallArgument,
        "&ResultType": _encode_MakeCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 10 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
