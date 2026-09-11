/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { DeflectCallArgument, _decode_DeflectCallArgument, _encode_DeflectCallArgument } from "../CSTA-deflect-call/DeflectCallArgument.ta.mjs";

import { DeflectCallResult, _decode_DeflectCallResult, _encode_DeflectCallResult } from "../CSTA-deflect-call/DeflectCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary deflectCall
 * @description
 *
 * Deflect Call (ECMA-269 §17.1.11 / ECMA-285 §15.1.11). Invoked
 * by the computing function on the switching function. Unlike
 * Pickup, the new destination is not immediately connected
 * (FR 1). CallID is unchanged (FR 4). Multiple destinations may
 * alert together; answering one clears the others with cause
 * Multiple Alerting (FR 9–10). ROSE local CODE 218. Errors are
 * `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deflectCall OPERATION ::= {     ARGUMENT         DeflectCallArgument
 *     RESULT             DeflectCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 218 }
 * ```
 * 
 * @constant
 * @type {OPERATION<DeflectCallArgument, DeflectCallResult>}
 * @implements {OPERATION<DeflectCallArgument, DeflectCallResult>}
 */
export
const deflectCall: OPERATION<DeflectCallArgument, DeflectCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DeflectCallArgument,
        "&ResultType": _decode_DeflectCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_DeflectCallArgument,
        "&ResultType": _encode_DeflectCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 218 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
