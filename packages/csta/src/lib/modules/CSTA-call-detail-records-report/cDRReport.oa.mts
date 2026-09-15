/* eslint-disable */


import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CDRReportArgument, _decode_CDRReportArgument, _encode_CDRReportArgument } from "../CSTA-call-detail-records-report/CDRReportArgument.ta.mjs";

import { CDRReportResult, _decode_CDRReportResult, _encode_CDRReportResult } from "../CSTA-call-detail-records-report/CDRReportResult.ta.mjs";

import { universalFailure } from "../CSTA-error-definition/universalFailure.oa.mjs";



/**
 * @summary cDRReport
 * @description
 *
 * Provides CDR information to the computing function after end of call, or as
 * stored records after Send Stored CDR (ECMA-269 §27.1.2).
 *
 * Switching function → computing function.
 *
 * ROSE local:361. Errors: `universalFailure` (ECMA-285 §25.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cDRReport OPERATION ::= {     ARGUMENT        CDRReportArgument
 *     RESULT            CDRReportResult
 *     ERRORS            {universalFailure }
 *     CODE            local: 361 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CDRReportArgument, CDRReportResult>}
 * @implements {OPERATION<CDRReportArgument, CDRReportResult>}
 */
export
const cDRReport: OPERATION<CDRReportArgument, CDRReportResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CDRReportArgument,
        "&ResultType": _decode_CDRReportResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CDRReportArgument,
        "&ResultType": _encode_CDRReportResult,
    },
    "&Errors": [ universalFailure, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 361 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
