/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { ProvideSubscriberInfoArg, _decode_ProvideSubscriberInfoArg, _encode_ProvideSubscriberInfoArg } from "../MAP-MS-DataTypes/ProvideSubscriberInfoArg.ta.mjs";
import { ProvideSubscriberInfoRes, _decode_ProvideSubscriberInfoRes, _encode_ProvideSubscriberInfoRes } from "../MAP-MS-DataTypes/ProvideSubscriberInfoRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary provideSubscriberInfo
 * @description
 *
 * MAP_PROVIDE_SUBSCRIBER_INFO: request information (e.g. subscriber state and
 * location) from the VLR, SGSN or MME (via IWF) at any time. Confirmed. Typical
 * path: HLR→VLR or HLR→SGSN. Local opcode 70. Timer class `m` (15 s to 30 s).
 * (3GPP TS 29.002 V19.1.0 clauses 8.11.2.1, 17.1.2, 17.3.2.28 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * provideSubscriberInfo  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     ProvideSubscriberInfoArg
 *     RESULT
 *     ProvideSubscriberInfoRes
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue}
 *     CODE    local:70 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ProvideSubscriberInfoArg, ProvideSubscriberInfoRes>}
 * @implements {OPERATION<ProvideSubscriberInfoArg, ProvideSubscriberInfoRes>}
 */
export
const provideSubscriberInfo: OPERATION<ProvideSubscriberInfoArg, ProvideSubscriberInfoRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ProvideSubscriberInfoArg,
        "&ResultType": _decode_ProvideSubscriberInfoRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ProvideSubscriberInfoArg,
        "&ResultType": _encode_ProvideSubscriberInfoRes,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 70 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
