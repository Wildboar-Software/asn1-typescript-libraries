/* eslint-disable */
import { GuidanceInfo, _decode_GuidanceInfo, _encode_GuidanceInfo } from "../MAP-SS-DataTypes/GuidanceInfo.ta.mjs";
import { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary getPassword
 * @description
 *
 * MAP_GET_PASSWORD: HLR, having received a subscriber request for an SS
 * operation that requires a password, obtains the password. Used HLR→VLR and
 * VLR→MSC; the VLR relays to the MSC. Confirmed. Typical MAP path: HLR→VLR.
 * Local opcode 18. Timer class `m` (15 s to 30 s). No user errors in the ASN.1.
 * (3GPP TS 29.002 V19.1.0 clauses 11.8.1, 17.1.2, 17.3.2.19 and 17.6.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getPassword  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     GuidanceInfo
 *     RESULT
 *     Password
 *     CODE    local:18 }
 * ```
 * 
 * @constant
 * @type {OPERATION<GuidanceInfo, Password>}
 * @implements {OPERATION<GuidanceInfo, Password>}
 */
export
const getPassword: OPERATION<GuidanceInfo, Password> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GuidanceInfo,
        "&ResultType": _decode_Password,
    },
    encoderFor: {
        "&ArgumentType": _encode_GuidanceInfo,
        "&ResultType": _encode_Password,
    },
    "&operationCode": { local: 18 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
