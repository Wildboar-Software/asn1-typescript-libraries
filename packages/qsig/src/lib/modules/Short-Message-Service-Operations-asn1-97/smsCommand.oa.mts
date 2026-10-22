/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SmsCommandArg, _decode_SmsCommandArg, _encode_SmsCommandArg } from "../Short-Message-Service-Operations-asn1-97/SmsCommandArg.ta.mjs";
import { SmsCommandRes, _decode_SmsCommandRes, _encode_SmsCommandRes } from "../Short-Message-Service-Operations-asn1-97/SmsCommandRes.ta.mjs";
import { smsCommandError } from "../Short-Message-Service-Operations-asn1-97/smsCommandError.oa.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary smsCommand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsCommand OPERATION ::= {
 *     -- sent from the Sending User PINX or the Sending User Message Centre to the Service Centre
 *     ARGUMENT SmsCommandArg
 *     RESULT SmsCommandRes
 *     ERRORS { smsCommandError | unspecified }
 *     CODE local: 110
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SmsCommandArg, SmsCommandRes>}
 * @implements {OPERATION<SmsCommandArg, SmsCommandRes>}
 */
export
const smsCommand: OPERATION<SmsCommandArg, SmsCommandRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SmsCommandArg,
        "&ResultType": _decode_SmsCommandRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SmsCommandArg,
        "&ResultType": _encode_SmsCommandRes,
    },
    "&Errors": [ smsCommandError, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 110 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
