/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SmsSubmitArg, _decode_SmsSubmitArg, _encode_SmsSubmitArg } from "../Short-Message-Service-Operations-asn1-97/SmsSubmitArg.ta.mjs";
import { SmsSubmitRes, _decode_SmsSubmitRes, _encode_SmsSubmitRes } from "../Short-Message-Service-Operations-asn1-97/SmsSubmitRes.ta.mjs";
import { smsSubmitError } from "../Short-Message-Service-Operations-asn1-97/smsSubmitError.oa.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary smsSubmit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsSubmit OPERATION ::= {
 *     -- sent from the Sending User PINX/ Sending User Message Centre to the Service Centre
 *     ARGUMENT SmsSubmitArg
 *     RESULT SmsSubmitRes
 *     ERRORS { smsSubmitError | unspecified }
 *     CODE local: 107
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SmsSubmitArg, SmsSubmitRes>}
 * @implements {OPERATION<SmsSubmitArg, SmsSubmitRes>}
 */
export
const smsSubmit: OPERATION<SmsSubmitArg, SmsSubmitRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SmsSubmitArg,
        "&ResultType": _decode_SmsSubmitRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SmsSubmitArg,
        "&ResultType": _encode_SmsSubmitRes,
    },
    "&Errors": [ smsSubmitError, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 107 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
