/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SmsDeliverArg, _decode_SmsDeliverArg, _encode_SmsDeliverArg } from "../Short-Message-Service-Operations-asn1-97/SmsDeliverArg.ta.mjs";
import { SmsDeliverRes, _decode_SmsDeliverRes, _encode_SmsDeliverRes } from "../Short-Message-Service-Operations-asn1-97/SmsDeliverRes.ta.mjs";
import { smsDeliverError } from "../Short-Message-Service-Operations-asn1-97/smsDeliverError.oa.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary smsDeliver
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsDeliver OPERATION ::= {
 *     -- sent from the Service Centre to the Receiving User PINX or to the Receiving User Message Centre
 *     ARGUMENT SmsDeliverArg
 *     RESULT SmsDeliverRes
 *     ERRORS { smsDeliverError | unspecified }
 *     CODE local: 108
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SmsDeliverArg, SmsDeliverRes>}
 * @implements {OPERATION<SmsDeliverArg, SmsDeliverRes>}
 */
export
const smsDeliver: OPERATION<SmsDeliverArg, SmsDeliverRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SmsDeliverArg,
        "&ResultType": _decode_SmsDeliverRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SmsDeliverArg,
        "&ResultType": _encode_SmsDeliverRes,
    },
    "&Errors": [ smsDeliverError, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 108 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
