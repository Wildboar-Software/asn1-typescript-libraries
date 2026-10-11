/* eslint-disable */
import { StatusReportArg, _decode_StatusReportArg, _encode_StatusReportArg } from "../MAP-CH-DataTypes/StatusReportArg.ta.mjs";
import { StatusReportRes, _decode_StatusReportRes, _encode_StatusReportRes } from "../MAP-CH-DataTypes/StatusReportRes.ta.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary statusReport
 * @description
 *
 * MAP_STATUS_REPORT: VLR reports an event or call outcome to the HLR.
 * Confirmed. Typical path: VLR→HLR. Local opcode 74. Timer class `m` (15 s to
 * 30 s). (3GPP TS 29.002 V19.1.0 clauses 10.11.1, 17.1.2, 17.3.2.37 and
 * 17.6.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * statusReport  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     StatusReportArg
 *     RESULT
 *     StatusReportRes
 *     -- optional
 *     ERRORS {
 *     unknownSubscriber |
 *     systemFailure |
 *     unexpectedDataValue |
 *     dataMissing}
 *     CODE    local:74 }
 * ```
 * 
 * @constant
 * @type {OPERATION<StatusReportArg, StatusReportRes>}
 * @implements {OPERATION<StatusReportArg, StatusReportRes>}
 */
export
const statusReport: OPERATION<StatusReportArg, StatusReportRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_StatusReportArg,
        "&ResultType": _decode_StatusReportRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_StatusReportArg,
        "&ResultType": _encode_StatusReportRes,
    },
    "&Errors": [ unknownSubscriber, systemFailure, unexpectedDataValue, dataMissing, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 74 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
