/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SmsStatusReportArg, _decode_SmsStatusReportArg, _encode_SmsStatusReportArg } from "../Short-Message-Service-Operations-asn1-97/SmsStatusReportArg.ta.mjs";
// export { SmsStatusReportArg, _decode_SmsStatusReportArg, _encode_SmsStatusReportArg } from "../Short-Message-Service-Operations-asn1-97/SmsStatusReportArg.ta.mjs";
import { SmsStatusReportRes, _decode_SmsStatusReportRes, _encode_SmsStatusReportRes } from "../Short-Message-Service-Operations-asn1-97/SmsStatusReportRes.ta.mjs";
// export { SmsStatusReportRes, _decode_SmsStatusReportRes, _encode_SmsStatusReportRes } from "../Short-Message-Service-Operations-asn1-97/SmsStatusReportRes.ta.mjs";
import { smsStatusReportError } from "../Short-Message-Service-Operations-asn1-97/smsStatusReportError.oa.mjs";
// export { smsStatusReportError } from "../Short-Message-Service-Operations-asn1-97/smsStatusReportError.oa.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary smsStatusReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsStatusReport OPERATION ::= {
 *     -- sent from the Service Centre to the Sending User PINX or to the Sending User Message Centre
 *     ARGUMENT SmsStatusReportArg
 *     RESULT SmsStatusReportRes
 *     ERRORS { smsStatusReportError | unspecified }
 *     CODE local: 109
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SmsStatusReportArg, SmsStatusReportRes>}
 * @implements {OPERATION<SmsStatusReportArg, SmsStatusReportRes>}
 */
export
const smsStatusReport: OPERATION<SmsStatusReportArg, SmsStatusReportRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SmsStatusReportArg,
        "&ResultType": _decode_SmsStatusReportRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SmsStatusReportArg,
        "&ResultType": _encode_SmsStatusReportRes,
    },
    "&Errors": [ smsStatusReportError, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 109 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
