/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { LocationSessionInfoArgument, _decode_LocationSessionInfoArgument, _encode_LocationSessionInfoArgument } from "../CSTA-location-session-info/LocationSessionInfoArgument.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary locationSessionInfoReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationSessionInfoReport OPERATION ::= {     ARGUMENT        LocationSessionInfoArgument
 *     ERRORS            {universalFailure }
 *     CODE             local: 541}
 * ```
 * 
 * @constant
 * @type {OPERATION<LocationSessionInfoArgument>}
 * @implements {OPERATION<LocationSessionInfoArgument>}
 */
export
const locationSessionInfoReport: OPERATION<LocationSessionInfoArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocationSessionInfoArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocationSessionInfoArgument,
        "&ResultType": undefined,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 541 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
