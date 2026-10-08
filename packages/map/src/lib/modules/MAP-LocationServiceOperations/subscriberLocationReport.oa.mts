/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { resourceLimitation } from "../MAP-Errors/resourceLimitation.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unauthorizedRequestingNetwork } from "../MAP-Errors/unauthorizedRequestingNetwork.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownOrUnreachableLCSClient } from "../MAP-Errors/unknownOrUnreachableLCSClient.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { SubscriberLocationReport_Arg, _decode_SubscriberLocationReport_Arg, _encode_SubscriberLocationReport_Arg } from "../MAP-LCS-DataTypes/SubscriberLocationReport-Arg.ta.mjs";
import { SubscriberLocationReport_Res, _decode_SubscriberLocationReport_Res, _encode_SubscriberLocationReport_Res } from "../MAP-LCS-DataTypes/SubscriberLocationReport-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary subscriberLocationReport
 * @description
 *
 * MAP_SUBSCRIBER_LOCATION_REPORT: VMSC or SGSN provides the location of a
 * target MS to a GMLC when a location request is implicitly administered or was
 * made earlier. Confirmed. Typical path: MSC→GMLC or SGSN→GMLC. Local opcode
 * 86. Timer class `m` (15 s to 30 s). Distinctive error:
 * `unknownOrUnreachableLCSClient`. (3GPP TS 29.002 V19.1.0 clauses 13A.3.1,
 * 17.1.2, 17.3.2.40 and 17.6.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subscriberLocationReport  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     SubscriberLocationReport-Arg
 *     RESULT
 *     SubscriberLocationReport-Res
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     resourceLimitation |
 *     unexpectedDataValue |
 *     unknownSubscriber |
 *     unauthorizedRequestingNetwork |
 *     unknownOrUnreachableLCSClient}
 *     CODE    local:86 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SubscriberLocationReport_Arg, SubscriberLocationReport_Res>}
 * @implements {OPERATION<SubscriberLocationReport_Arg, SubscriberLocationReport_Res>}
 */
export
const subscriberLocationReport: OPERATION<SubscriberLocationReport_Arg, SubscriberLocationReport_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SubscriberLocationReport_Arg,
        "&ResultType": _decode_SubscriberLocationReport_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_SubscriberLocationReport_Arg,
        "&ResultType": _encode_SubscriberLocationReport_Res,
    },
    "&Errors": [ systemFailure, dataMissing, resourceLimitation, unexpectedDataValue, unknownSubscriber, unauthorizedRequestingNetwork, unknownOrUnreachableLCSClient, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 86 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
