/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { FailureReportArg, _decode_FailureReportArg, _encode_FailureReportArg } from "../MAP-MS-DataTypes/FailureReportArg.ta.mjs";
import { FailureReportRes, _decode_FailureReportRes, _encode_FailureReportRes } from "../MAP-MS-DataTypes/FailureReportRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary failureReport
 * @description
 *
 * MAP_FAILURE_REPORT: GGSN informs the HLR that network-requested PDP-context
 * activation has failed. Typical path: GGSN→HLR. Local opcode 25. Timer class
 * `m` (15 s to 30 s). (3GPP TS 29.002 V19.1.0 clauses 13.2.1, 17.1.2, 17.3.2.34
 * and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * failureReport  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     FailureReportArg
 *     RESULT
 *     FailureReportRes
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber}
 *     CODE    local:25 }
 * ```
 * 
 * @constant
 * @type {OPERATION<FailureReportArg, FailureReportRes>}
 * @implements {OPERATION<FailureReportArg, FailureReportRes>}
 */
export
const failureReport: OPERATION<FailureReportArg, FailureReportRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_FailureReportArg,
        "&ResultType": _decode_FailureReportRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_FailureReportArg,
        "&ResultType": _encode_FailureReportRes,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 25 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
