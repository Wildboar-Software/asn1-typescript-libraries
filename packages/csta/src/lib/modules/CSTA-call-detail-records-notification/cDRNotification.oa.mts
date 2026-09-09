/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CDRNotificationArgument, _decode_CDRNotificationArgument, _encode_CDRNotificationArgument } from "../CSTA-call-detail-records-notification/CDRNotificationArgument.ta.mjs";

import { CDRNotificationResult, _decode_CDRNotificationResult, _encode_CDRNotificationResult } from "../CSTA-call-detail-records-notification/CDRNotificationResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary cDRNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cDRNotification OPERATION ::= {    ARGUMENT        CDRNotificationArgument
 *     RESULT            CDRNotificationResult
 *     ERRORS          {universalFailure }
 *     CODE            local: 360
 *  }
 * ```
 * 
 * @constant
 * @type {OPERATION<CDRNotificationArgument, CDRNotificationResult>}
 * @implements {OPERATION<CDRNotificationArgument, CDRNotificationResult>}
 */
export
const cDRNotification: OPERATION<CDRNotificationArgument, CDRNotificationResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CDRNotificationArgument,
        "&ResultType": _decode_CDRNotificationResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CDRNotificationArgument,
        "&ResultType": _encode_CDRNotificationResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 360 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
