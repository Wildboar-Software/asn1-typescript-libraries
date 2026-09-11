/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CallBackMessageArgument, _decode_CallBackMessageArgument, _encode_CallBackMessageArgument } from "../CSTA-call-back-message-call-related/CallBackMessageArgument.ta.mjs";

import { CallBackMessageResult, _decode_CallBackMessageResult, _encode_CallBackMessageResult } from "../CSTA-call-back-message-call-related/CallBackMessageResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary callBackMessage
 * @description
 *
 * Call Back Message Call-Related (ECMA-269 §17.1.5 / ECMA-285
 * §15.1.5). Invoked by the computing function on the switching
 * function. Unlike Call Back, the calling device does not retry; a
 * message is left at the called device (FR 3). Content and
 * notification method are switching-function defined (FR 4). ROSE
 * local CODE 216. Errors are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callBackMessage OPERATION ::= {     ARGUMENT         CallBackMessageArgument
 *     RESULT             CallBackMessageResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 216 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallBackMessageArgument, CallBackMessageResult>}
 * @implements {OPERATION<CallBackMessageArgument, CallBackMessageResult>}
 */
export
const callBackMessage: OPERATION<CallBackMessageArgument, CallBackMessageResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallBackMessageArgument,
        "&ResultType": _decode_CallBackMessageResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallBackMessageArgument,
        "&ResultType": _encode_CallBackMessageResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 216 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
