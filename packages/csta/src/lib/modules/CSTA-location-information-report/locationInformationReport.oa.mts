/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import {
    LocationInformationReportArgument,
    _decode_LocationInformationReportArgument,
    _encode_LocationInformationReportArgument
} from "../CSTA-location-information-report/LocationInformationReportArgument.ta.mjs";

import { LocationInformationReportResult, _decode_LocationInformationReportResult, _encode_LocationInformationReportResult } from "../CSTA-location-information-report/LocationInformationReportResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary locationInformationReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationInformationReport OPERATION ::= {     ARGUMENT        LocationInformationReportArgument
 *     RESULT            LocationInformationReportResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 535}
 * ```
 * 
 * @constant
 * @type {OPERATION<LocationInformationReportArgument, LocationInformationReportResult>}
 * @implements {OPERATION<LocationInformationReportArgument, LocationInformationReportResult>}
 */
export
const locationInformationReport: OPERATION<LocationInformationReportArgument, LocationInformationReportResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocationInformationReportArgument,
        "&ResultType": _decode_LocationInformationReportResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocationInformationReportArgument,
        "&ResultType": _encode_LocationInformationReportResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 535 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
