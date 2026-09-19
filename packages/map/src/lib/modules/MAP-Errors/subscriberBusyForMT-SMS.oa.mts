/* eslint-disable */
import { SubBusyForMT_SMS_Param, _decode_SubBusyForMT_SMS_Param, _encode_SubBusyForMT_SMS_Param } from "../MAP-ER-DataTypes/SubBusyForMT-SMS-Param.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary subscriberBusyForMT_SMS
 * @description
 * 
 * Returned when the mobile terminated short message transfer cannot be
 * completed because another MT SM transfer is going on and the delivery node
 * does not support message buffering; or another MT SM transfer is going on and
 * it is not possible to buffer the message for later delivery; or the message
 * was buffered but it is not possible to deliver the message before the expiry
 * of the buffering time defined in 3GPP TS 23.040 (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * Local code 31. Optional parameter `SubBusyForMT-SMS-Param` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subscriberBusyForMT-SMS  ERROR ::= {
 *     PARAMETER
 *     SubBusyForMT-SMS-Param
 *     -- optional
 *     CODE    local:31 }
 * ```
 * 
 * @constant
 * @type {ERROR<SubBusyForMT_SMS_Param>}
 * @implements {ERROR<SubBusyForMT_SMS_Param>}
 */
export
const subscriberBusyForMT_SMS: ERROR<SubBusyForMT_SMS_Param> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_SubBusyForMT_SMS_Param,
    },
    encoderFor: {
        "&ParameterType": _encode_SubBusyForMT_SMS_Param,
    },
    "&errorCode": { local: 31 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
