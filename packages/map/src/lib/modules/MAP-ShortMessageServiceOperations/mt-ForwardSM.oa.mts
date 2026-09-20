/* eslint-disable */
import { absentSubscriberSM } from "../MAP-Errors/absentSubscriberSM.oa.mjs";
import { dataMissing } from "../MAP-Errors/dataMissing.oa.mjs";
import { facilityNotSupported } from "../MAP-Errors/facilityNotSupported.oa.mjs";
import { illegalEquipment } from "../MAP-Errors/illegalEquipment.oa.mjs";
import { illegalSubscriber } from "../MAP-Errors/illegalSubscriber.oa.mjs";
import { sm_DeliveryFailure } from "../MAP-Errors/sm-DeliveryFailure.oa.mjs";
import { subscriberBusyForMT_SMS } from "../MAP-Errors/subscriberBusyForMT-SMS.oa.mjs";
import { systemFailure } from "../MAP-Errors/systemFailure.oa.mjs";
import { unexpectedDataValue } from "../MAP-Errors/unexpectedDataValue.oa.mjs";
import { unidentifiedSubscriber } from "../MAP-Errors/unidentifiedSubscriber.oa.mjs";
import { MT_ForwardSM_Arg, _decode_MT_ForwardSM_Arg, _encode_MT_ForwardSM_Arg } from "../MAP-SM-DataTypes/MT-ForwardSM-Arg.ta.mjs";
import { MT_ForwardSM_Res, _decode_MT_ForwardSM_Res, _encode_MT_ForwardSM_Res } from "../MAP-SM-DataTypes/MT-ForwardSM-Res.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary mt_ForwardSM
 * @description
 *
 * MAP_MT_FORWARD_SHORT_MESSAGE: GMSC forwards a mobile-terminated short message
 * to the serving MSC or SGSN (transiting an SMS Router, if present) or to the
 * IP-SM-GW. Confirmed. Typical path: GMSC→MSC or GMSC→SGSN. Local opcode 44.
 * Timer class `ml` (1 min to 10 min); the timer value may be negotiated between
 * GMSC and IP-SM-GW. Distinctive errors: `subscriberBusyForMT-SMS`,
 * `sm-DeliveryFailure`, `absentSubscriberSM`. (3GPP TS 29.002 V19.1.0 clauses
 * 12.9.1, 17.1.2, 17.3.2.26 and 17.6.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mt-ForwardSM  OPERATION ::= {    --Timer ml
 *     -- the timer value may be subject to negotiation between GMSC and IP-SM-GW
 *     ARGUMENT
 *     MT-ForwardSM-Arg
 *     RESULT
 *     MT-ForwardSM-Res
 *     -- optional
 *     ERRORS {
 *     systemFailure |
 *     dataMissing |
 *     unexpectedDataValue |
 *     facilityNotSupported |
 *     unidentifiedSubscriber |
 *     illegalSubscriber |
 *     illegalEquipment |
 *     subscriberBusyForMT-SMS |
 *     sm-DeliveryFailure |
 *     absentSubscriberSM}
 *     CODE    local:44 }
 * ```
 * 
 * @constant
 * @type {OPERATION<MT_ForwardSM_Arg, MT_ForwardSM_Res>}
 * @implements {OPERATION<MT_ForwardSM_Arg, MT_ForwardSM_Res>}
 */
export
const mt_ForwardSM: OPERATION<MT_ForwardSM_Arg, MT_ForwardSM_Res> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MT_ForwardSM_Arg,
        "&ResultType": _decode_MT_ForwardSM_Res,
    },
    encoderFor: {
        "&ArgumentType": _encode_MT_ForwardSM_Arg,
        "&ResultType": _encode_MT_ForwardSM_Res,
    },
    "&Errors": [ systemFailure, dataMissing, unexpectedDataValue, facilityNotSupported, unidentifiedSubscriber, illegalSubscriber, illegalEquipment, subscriberBusyForMT_SMS, sm_DeliveryFailure, absentSubscriberSM, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 44 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
