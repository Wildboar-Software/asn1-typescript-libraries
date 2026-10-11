/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";
import { SendIdentificationArg, _decode_SendIdentificationArg, _encode_SendIdentificationArg } from "../MAP-MS-DataTypes/SendIdentificationArg.ta.mjs";
import { SendIdentificationRes, _decode_SendIdentificationRes, _encode_SendIdentificationRes } from "../MAP-MS-DataTypes/SendIdentificationRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary sendIdentification
 * @description
 *
 * MAP_SEND_IDENTIFICATION: a VLR retrieves IMSI and authentication data from a
 * previous VLR for a subscriber registering afresh; may also send the MSC
 * number to the previous VLR. Confirmed. Typical path: VLR→VLR. Local opcode
 * 55. Timer class `s` (3 s to 10 s). Distinctive error:
 * `unidentifiedSubscriber`. (3GPP TS 29.002 V19.1.0 clauses 8.1.4.1, 17.1.2,
 * 17.3.2.16 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendIdentification  OPERATION ::= {    --Timer s
 *     ARGUMENT
 *     SendIdentificationArg
 *     RESULT
 *     SendIdentificationRes
 *     ERRORS {
 *     dataMissing |
 *     unidentifiedSubscriber}
 *     CODE    local:55 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendIdentificationArg, SendIdentificationRes>}
 * @implements {OPERATION<SendIdentificationArg, SendIdentificationRes>}
 */
export
const sendIdentification: OPERATION<SendIdentificationArg, SendIdentificationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendIdentificationArg,
        "&ResultType": _decode_SendIdentificationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendIdentificationArg,
        "&ResultType": _encode_SendIdentificationRes,
    },
    "&Errors": [ dataMissing, unidentifiedSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 55 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
