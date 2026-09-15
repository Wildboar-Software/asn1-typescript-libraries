/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { StopCDRTransmissionArgument, _decode_StopCDRTransmissionArgument, _encode_StopCDRTransmissionArgument } from "../CSTA-stop-call-detail-records/StopCDRTransmissionArgument.ta.mjs";

import { StopCDRTransmissionResult, _decode_StopCDRTransmissionResult, _encode_StopCDRTransmissionResult } from "../CSTA-stop-call-detail-records/StopCDRTransmissionResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary stopCDRTransmission
 * @description
 *
 * Cancels a previously started CDR transmission. Either the computing function
 * or the switching function may issue it. Positive acknowledgement invalidates
 * `cdrCrossRefID` (ECMA-269 §27.1.5).
 *
 * Bidirectional: computing function or switching function may invoke.
 *
 * ROSE local:364. Errors: `universalFailure` (ECMA-285 §25.1.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * stopCDRTransmission OPERATION ::= {    ARGUMENT        StopCDRTransmissionArgument
 *     RESULT            StopCDRTransmissionResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 364 }
 * ```
 * 
 * @constant
 * @type {OPERATION<StopCDRTransmissionArgument, StopCDRTransmissionResult>}
 * @implements {OPERATION<StopCDRTransmissionArgument, StopCDRTransmissionResult>}
 */
export
const stopCDRTransmission: OPERATION<StopCDRTransmissionArgument, StopCDRTransmissionResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StopCDRTransmissionArgument,
        "&ResultType": _decode_StopCDRTransmissionResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_StopCDRTransmissionArgument,
        "&ResultType": _encode_StopCDRTransmissionResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 364 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
