/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { TransferCallArgument, _decode_TransferCallArgument, _encode_TransferCallArgument } from "../CSTA-transfer-call/TransferCallArgument.ta.mjs";

import { TransferCallResult, _decode_TransferCallResult, _encode_TransferCallResult } from "../CSTA-transfer-call/TransferCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary transferCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * transferCall OPERATION ::= {     ARGUMENT         TransferCallArgument
 *     RESULT             TransferCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 16 }
 * ```
 * 
 * @constant
 * @type {OPERATION<TransferCallArgument, TransferCallResult>}
 * @implements {OPERATION<TransferCallArgument, TransferCallResult>}
 */
export
const transferCall: OPERATION<TransferCallArgument, TransferCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TransferCallArgument,
        "&ResultType": _decode_TransferCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_TransferCallArgument,
        "&ResultType": _encode_TransferCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 16 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
