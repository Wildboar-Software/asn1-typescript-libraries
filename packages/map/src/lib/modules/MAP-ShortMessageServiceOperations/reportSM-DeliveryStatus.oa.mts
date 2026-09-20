/* eslint-disable */
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { messageWaitingListFull } from "../MAP-Errors/messageWaitingListFull.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unknownSubscriber } from "../MAP-Errors/unknownSubscriber.oa.mjs";
import { ReportSM_DeliveryStatusArg, _decode_ReportSM_DeliveryStatusArg, _encode_ReportSM_DeliveryStatusArg } from "../MAP-SM-DataTypes/ReportSM-DeliveryStatusArg.ta.mjs";
import { ReportSM_DeliveryStatusRes, _decode_ReportSM_DeliveryStatusRes, _encode_ReportSM_DeliveryStatusRes } from "../MAP-SM-DataTypes/ReportSM-DeliveryStatusRes.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary reportSM_DeliveryStatus
 * @description
 *
 * MAP_REPORT_SM_DELIVERY_STATUS: GMSC or IP-SM-GW sets Message Waiting Data in
 * the HLR, or informs the HLR of successful SM transfer after polling.
 * Confirmed. Typical path: GMSC→HLR. Local opcode 47. Timer class `s` (3 s to
 * 10 s). Distinctive error: `messageWaitingListFull`. (3GPP TS 29.002 V19.1.0
 * clauses 12.3.1, 17.1.2, 17.3.2.21 and 17.6.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reportSM-DeliveryStatus  OPERATION ::= {    --Timer s
 *     ARGUMENT
 *     ReportSM-DeliveryStatusArg
 *     RESULT
 *     ReportSM-DeliveryStatusRes
 *     -- optional
 *     ERRORS {
 *     dataMissing |
 *     unexpectedDataValue |
 *     unknownSubscriber |
 *     messageWaitingListFull}
 *     CODE    local:47 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReportSM_DeliveryStatusArg, ReportSM_DeliveryStatusRes>}
 * @implements {OPERATION<ReportSM_DeliveryStatusArg, ReportSM_DeliveryStatusRes>}
 */
export
const reportSM_DeliveryStatus: OPERATION<ReportSM_DeliveryStatusArg, ReportSM_DeliveryStatusRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReportSM_DeliveryStatusArg,
        "&ResultType": _decode_ReportSM_DeliveryStatusRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReportSM_DeliveryStatusArg,
        "&ResultType": _encode_ReportSM_DeliveryStatusRes,
    },
    "&Errors": [ dataMissing, unexpectedDataValue, unknownSubscriber, messageWaitingListFull, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 47 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
