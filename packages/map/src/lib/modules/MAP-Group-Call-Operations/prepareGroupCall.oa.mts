/* eslint-disable */
import { noGroupCallNumberAvailable } from "../MAP-Errors/noGroupCallNumberAvailable.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { PrepareGroupCallArg, _decode_PrepareGroupCallArg, _encode_PrepareGroupCallArg } from "../MAP-GR-DataTypes/PrepareGroupCallArg.ta.mjs";
import { PrepareGroupCallRes, _decode_PrepareGroupCallRes, _encode_PrepareGroupCallRes } from "../MAP-GR-DataTypes/PrepareGroupCallRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary prepareGroupCall
 * @description
 *
 * MAP_PREPARE_GROUP_CALL: Anchor MSC informs the Relay MSC about a group call
 * set-up. Confirmed. Typical path: Anchor MSC→Relay MSC. Local opcode 39. Timer
 * class `m` (15 s to 30 s). Distinctive error: `noGroupCallNumberAvailable`.
 * (3GPP TS 29.002 V19.1.0 clauses 10.4.1, 17.1.2, 17.3.2.30 and 17.6.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * prepareGroupCall  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     PrepareGroupCallArg
 *     RESULT
 *     PrepareGroupCallRes
 *     ERRORS {
 *     systemFailure |
 *     noGroupCallNumberAvailable |
 *     unexpectedDataValue}
 *     CODE    local:39 }
 * ```
 * 
 * @constant
 * @type {OPERATION<PrepareGroupCallArg, PrepareGroupCallRes>}
 * @implements {OPERATION<PrepareGroupCallArg, PrepareGroupCallRes>}
 */
export
const prepareGroupCall: OPERATION<PrepareGroupCallArg, PrepareGroupCallRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PrepareGroupCallArg,
        "&ResultType": _decode_PrepareGroupCallRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_PrepareGroupCallArg,
        "&ResultType": _encode_PrepareGroupCallRes,
    },
    "&Errors": [ systemFailure, noGroupCallNumberAvailable, unexpectedDataValue, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 39 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
