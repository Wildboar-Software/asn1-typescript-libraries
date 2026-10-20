/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { AocDivChargeReqArg, _decode_AocDivChargeReqArg, _encode_AocDivChargeReqArg } from "../SS-AOC-Operations-asn1-97/AocDivChargeReqArg.ta.mjs";

/**
 * @summary aocDivChargeReq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * aocDivChargeReq OPERATION ::= {
 *     ARGUMENT AocDivChargeReqArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 65
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AocDivChargeReqArg>}
 * @implements {OPERATION<AocDivChargeReqArg>}
 */
export
const aocDivChargeReq: OPERATION<AocDivChargeReqArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AocDivChargeReqArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_AocDivChargeReqArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 65 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
