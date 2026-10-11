/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";
import { InsertSubscriberDataArg, _decode_InsertSubscriberDataArg, _encode_InsertSubscriberDataArg } from "../MAP-MS-DataTypes/InsertSubscriberDataArg.ta.mjs";
import { InsertSubscriberDataRes, _decode_InsertSubscriberDataRes, _encode_InsertSubscriberDataRes } from "../MAP-MS-DataTypes/InsertSubscriberDataRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary insertSubscriberData
 * @description
 *
 * MAP_INSERT_SUBSCRIBER_DATA: HLR updates a VLR (or SGSN) with subscriber data
 * after subscription/ODB/SS-data change, or at location updating / restoration.
 * Not used to withdraw a basic or supplementary service. Super-Charger may omit
 * subscriber parameters at location updating (3GPP TS 23.116). Confirmed.
 * Typical path: HLR→VLR or HLR→SGSN (also CSS as initiator of stand-alone SDM).
 * Local opcode 7. Timer class `m` (15 s to 30 s). (3GPP TS 29.002 V19.1.0
 * clauses 8.8.1.1, 17.1.2, 17.3.2.17 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * insertSubscriberData  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     InsertSubscriberDataArg
 *     RESULT
 *     InsertSubscriberDataRes
 *     -- optional
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue |
 *     unidentifiedSubscriber}
 *     CODE    local:7 }
 * ```
 * 
 * @constant
 * @type {OPERATION<InsertSubscriberDataArg, InsertSubscriberDataRes>}
 * @implements {OPERATION<InsertSubscriberDataArg, InsertSubscriberDataRes>}
 */
export
const insertSubscriberData: OPERATION<InsertSubscriberDataArg, InsertSubscriberDataRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_InsertSubscriberDataArg,
        "&ResultType": _decode_InsertSubscriberDataRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_InsertSubscriberDataArg,
        "&ResultType": _encode_InsertSubscriberDataRes,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, unidentifiedSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 7 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
