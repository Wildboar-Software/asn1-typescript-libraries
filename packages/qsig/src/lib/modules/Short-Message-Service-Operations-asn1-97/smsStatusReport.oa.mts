/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SmsStatusReportArg, _decode_SmsStatusReportArg, _encode_SmsStatusReportArg } from "../Short-Message-Service-Operations-asn1-97/SmsStatusReportArg.ta.mjs";
import { SmsStatusReportRes, _decode_SmsStatusReportRes, _encode_SmsStatusReportRes } from "../Short-Message-Service-Operations-asn1-97/SmsStatusReportRes.ta.mjs";
import { smsStatusReportError } from "../Short-Message-Service-Operations-asn1-97/smsStatusReportError.oa.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary smsStatusReport
 * @description
 *
 * Status report for a submitted Short Message or Command (ECMA-325 §6.5.1.1.3,
 * §6.5.3.1.3). Direction: Service Centre to the Sending User PINX or Sending
 * User Message Centre. ROSE local CODE 109. These procedures run independently
 * of ordinary Short Message transfer (NOTE 5).
 *
 * Sent from SMS-SC-SR-Idle on an internal request. The Service Centre starts
 * timer T5 (4 to 6 seconds, §6.9.5) and enters SMS-SC-SR-Wait.
 * `messageReference` is the earlier submit or command reference, except an
 * Enquiry report uses the command's `messageNumber`. `dischargeTime` is when
 * delivery succeeded, was attempted, or the Service Centre disposed of the
 * Short Message. `serviceCentreTimeStamp` is the stamp assigned to the
 * original submit.
 *
 * The Sending User side indicates the report to the Sending User and returns a
 * result (§6.5.1.1.3). The Service Centre then stops T5 and returns to
 * SMS-SC-SR-Idle.
 *
 * Errors: `smsStatusReportError` and `unspecified`. On error the Sending User
 * side returns `failureCause` and stays in SMS-Send-Idle (§6.5.1.2.3). A
 * return error, a reject, or T5 expiry returns the Service Centre to
 * SMS-SC-SR-Idle. It may then resend the report. The text points that resend
 * at §6.5.3.1.1 rather than §6.5.3.1.3 (§6.5.3.2.3).
 *
 * Carried on a call-independent signalling connection. The entity that sends
 * the invoke sets that connection up and clears it. NFE `destinationEntity` is
 * `endPINX`. Interpretation is omitted or `rejectAnyUnrecognizedInvokeAPDU`
 * (0) (ECMA-325 §6.3.2.1). The Service Centre sets up this connection
 * (§6.5.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
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
