/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { GroupPickupCallArgument, _decode_GroupPickupCallArgument, _encode_GroupPickupCallArgument } from "../CSTA-group-pickup-call/GroupPickupCallArgument.ta.mjs";

import { GroupPickupCallResult, _decode_GroupPickupCallResult, _encode_GroupPickupCallResult } from "../CSTA-group-pickup-call/GroupPickupCallResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary groupPickupCall
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupPickupCall OPERATION ::= {     ARGUMENT         GroupPickupCallArgument
 *     RESULT             GroupPickupCallResult
 *     ERRORS             {universalFailure }
 *     CODE             local: 221 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GroupPickupCallArgument, GroupPickupCallResult>}
 * @implements {OPERATION<GroupPickupCallArgument, GroupPickupCallResult>}
 */
export
const groupPickupCall: OPERATION<GroupPickupCallArgument, GroupPickupCallResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GroupPickupCallArgument,
        "&ResultType": _decode_GroupPickupCallResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_GroupPickupCallArgument,
        "&ResultType": _encode_GroupPickupCallResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 221 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
