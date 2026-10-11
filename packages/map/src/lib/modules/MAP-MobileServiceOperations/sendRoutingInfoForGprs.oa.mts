/* eslint-disable */
import { absentSubscriber } from "../MAP-Errors/absentSubscriber.oa.mjs";
import { callBarred } from "../MAP-Errors/callBarred.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { SendRoutingInfoForGprsArg, _decode_SendRoutingInfoForGprsArg, _encode_SendRoutingInfoForGprsArg } from "../MAP-MS-DataTypes/SendRoutingInfoForGprsArg.ta.mjs";
import { SendRoutingInfoForGprsRes, _decode_SendRoutingInfoForGprsRes, _encode_SendRoutingInfoForGprsRes } from "../MAP-MS-DataTypes/SendRoutingInfoForGprsRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary sendRoutingInfoForGprs
 * @description
 *
 * MAP_SEND_ROUTING_INFO_FOR_GPRS: GGSN requests GPRS routing information from
 * the HLR. Typical path: GGSN→HLR. Local opcode 24. Timer class `m` (15 s to 30
 * s). Distinctive errors: `absentSubscriber`, `callBarred`. (3GPP TS 29.002
 * V19.1.0 clauses 13.1.1, 17.1.2, 17.3.2.33 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendRoutingInfoForGprs  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     SendRoutingInfoForGprsArg
 *     RESULT
 *     SendRoutingInfoForGprsRes
 *     ERRORS {
 *     absentSubscriber |
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber |
 *     callBarred }
 *     CODE    local:24 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SendRoutingInfoForGprsArg, SendRoutingInfoForGprsRes>}
 * @implements {OPERATION<SendRoutingInfoForGprsArg, SendRoutingInfoForGprsRes>}
 */
export
const sendRoutingInfoForGprs: OPERATION<SendRoutingInfoForGprsArg, SendRoutingInfoForGprsRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SendRoutingInfoForGprsArg,
        "&ResultType": _decode_SendRoutingInfoForGprsRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SendRoutingInfoForGprsArg,
        "&ResultType": _encode_SendRoutingInfoForGprsRes,
    },
    "&Errors": [ absentSubscriber, systemFailure, dataMissing, unexpectedDataValue, unknownSubscriber, callBarred, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 24 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
