/* eslint-disable */
import { FALSE } from "@wildboar/asn1";

import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";




import { CSTAEventReportArgument, _decode_CSTAEventReportArgument, _encode_CSTAEventReportArgument } from "../CSTA-event-report-definitions/CSTAEventReportArgument.ta.mjs";



/**
 * @summary cSTAEventReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cSTAEventReport OPERATION ::= {    ARGUMENT        CSTAEventReportArgument
 *     ALWAYS RESPONDS        FALSE
 *     CODE            local:21 }
 * ```
 * 
 * @constant
 * @type {OPERATION<CSTAEventReportArgument>}
 * @implements {OPERATION<CSTAEventReportArgument>}
 */
export
const cSTAEventReport: OPERATION<CSTAEventReportArgument> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CSTAEventReportArgument,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CSTAEventReportArgument,
        "&ResultType": undefined,
    },
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 21 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
