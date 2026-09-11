/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { TransferCallArgument, _decode_TransferCallArgument, _encode_TransferCallArgument } from "../CSTA-transfer-call/TransferCallArgument.ta.mjs";

import { TransferCallResult, _decode_TransferCallResult, _encode_TransferCallResult } from "../CSTA-transfer-call/TransferCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary transferCall
 * @description
 *
 * Transfer Call (ECMA-269 §17.1.27 / ECMA-285 §15.1.27). Invoked
 * by the computing function on the switching function. Merges
 * `heldCall` and `activeCall` at the transferring device and
 * drops that device from the resulting call. Prepare via
 * Consultation with consultOptions Transfer Only or Unrestricted
 * (FR 1). Conference consultOptions yields a negative ack
 * (FR 2). ROSE local CODE 16. Errors are `universalFailure`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
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
