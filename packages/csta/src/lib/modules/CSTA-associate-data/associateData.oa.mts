/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { AssociateDataArgument, _decode_AssociateDataArgument, _encode_AssociateDataArgument } from "../CSTA-associate-data/AssociateDataArgument.ta.mjs";

import { AssociateDataResult, _decode_AssociateDataResult, _encode_AssociateDataResult } from "../CSTA-associate-data/AssociateDataResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary associateData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * associateData OPERATION ::= {    ARGUMENT        AssociateDataArgument
 *     RESULT            AssociateDataResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 230 }
 * ```
 * 
 * @constant
 * @type {OPERATION<AssociateDataArgument, AssociateDataResult>}
 * @implements {OPERATION<AssociateDataArgument, AssociateDataResult>}
 */
export
const associateData: OPERATION<AssociateDataArgument, AssociateDataResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AssociateDataArgument,
        "&ResultType": _decode_AssociateDataResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AssociateDataArgument,
        "&ResultType": _encode_AssociateDataResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 230 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
