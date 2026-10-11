/* eslint-disable */
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { AuthenticationFailureReportArg, _decode_AuthenticationFailureReportArg, _encode_AuthenticationFailureReportArg } from "../MAP-MS-DataTypes/AuthenticationFailureReportArg.ta.mjs";
import { AuthenticationFailureReportRes, _decode_AuthenticationFailureReportRes, _encode_AuthenticationFailureReportRes } from "../MAP-MS-DataTypes/AuthenticationFailureReportRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary authenticationFailureReport
 * @description
 *
 * MAP_AUTHENTICATION_FAILURE_REPORT: reports authentication failures to the
 * HLR. Typical path: VLR→HLR or SGSN→HLR. Local opcode 15. Timer class `m` (15
 * s to 30 s). (3GPP TS 29.002 V19.1.0 clauses 8.5.3.1, 17.1.2, 17.3.2.49 and
 * 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authenticationFailureReport  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     AuthenticationFailureReportArg
 *     RESULT
 *     AuthenticationFailureReportRes
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     unexpectedDataValue |
 *     unknownSubscriber}
 *     CODE    local:15 }
 * ```
 * 
 * @constant
 * @type {OPERATION<AuthenticationFailureReportArg, AuthenticationFailureReportRes>}
 * @implements {OPERATION<AuthenticationFailureReportArg, AuthenticationFailureReportRes>}
 */
export
const authenticationFailureReport: OPERATION<AuthenticationFailureReportArg, AuthenticationFailureReportRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AuthenticationFailureReportArg,
        "&ResultType": _decode_AuthenticationFailureReportRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_AuthenticationFailureReportArg,
        "&ResultType": _encode_AuthenticationFailureReportRes,
    },
    "&Errors": [ systemFailure, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 15 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
