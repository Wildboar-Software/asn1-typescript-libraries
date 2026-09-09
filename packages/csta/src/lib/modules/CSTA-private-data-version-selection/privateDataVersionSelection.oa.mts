/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    PrivateDataVersionSelectionArgument,
    _decode_PrivateDataVersionSelectionArgument,
    _encode_PrivateDataVersionSelectionArgument
} from "../CSTA-private-data-version-selection/PrivateDataVersionSelectionArgument.ta.mjs";

import {
    PrivateDataVersionSelectionResult,
    _decode_PrivateDataVersionSelectionResult,
    _encode_PrivateDataVersionSelectionResult
} from "../CSTA-private-data-version-selection/PrivateDataVersionSelectionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary privateDataVersionSelection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * privateDataVersionSelection OPERATION ::= {     ARGUMENT        PrivateDataVersionSelectionArgument
 *     RESULT            PrivateDataVersionSelectionResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 368 }
 * ```
 * 
 * @constant
 * @type {OPERATION<PrivateDataVersionSelectionArgument, PrivateDataVersionSelectionResult>}
 * @implements {OPERATION<PrivateDataVersionSelectionArgument, PrivateDataVersionSelectionResult>}
 */
export
const privateDataVersionSelection: OPERATION<PrivateDataVersionSelectionArgument, PrivateDataVersionSelectionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PrivateDataVersionSelectionArgument,
        "&ResultType": _decode_PrivateDataVersionSelectionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_PrivateDataVersionSelectionArgument,
        "&ResultType": _encode_PrivateDataVersionSelectionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 368 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
