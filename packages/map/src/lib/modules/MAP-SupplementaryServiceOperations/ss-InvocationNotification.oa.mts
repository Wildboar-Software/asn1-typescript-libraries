/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { SS_InvocationNotificationArg, _decode_SS_InvocationNotificationArg, _encode_SS_InvocationNotificationArg } from "../MAP-SS-DataTypes/SS-InvocationNotificationArg.ta.mjs";
import { SS_InvocationNotificationRes, _decode_SS_InvocationNotificationRes, _encode_SS_InvocationNotificationRes } from "../MAP-SS-DataTypes/SS-InvocationNotificationRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary ss_InvocationNotification
 * @description
 *
 * MAP_SS_INVOCATION_NOTIFY: MSC informs gsmSCF when the subscriber invokes Call
 * Deflection (CD), Explicit Call Transfer (ECT) or Multi Party (MPTY). HLR
 * informs gsmSCF when the subscriber invokes CCBS. Typical path: MSC→gsmSCF or
 * HLR→gsmSCF. Local opcode 72. Timer class `m` (15 s to 30 s). (3GPP TS 29.002
 * V19.1.0 clauses 11.12.1, 17.1.2, 17.3.2.36 and 17.6.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ss-InvocationNotification  OPERATION ::= {    --Timer m
 *     ARGUMENT
 *     SS-InvocationNotificationArg
 *     RESULT
 *     SS-InvocationNotificationRes
 *     -- optional
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber}
 *     CODE    local:72 }
 * ```
 * 
 * @constant
 * @type {OPERATION<SS_InvocationNotificationArg, SS_InvocationNotificationRes>}
 * @implements {OPERATION<SS_InvocationNotificationArg, SS_InvocationNotificationRes>}
 */
export
const ss_InvocationNotification: OPERATION<SS_InvocationNotificationArg, SS_InvocationNotificationRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SS_InvocationNotificationArg,
        "&ResultType": _decode_SS_InvocationNotificationRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SS_InvocationNotificationArg,
        "&ResultType": _encode_SS_InvocationNotificationRes,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, unknownSubscriber, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 72 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
