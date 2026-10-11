/* eslint-disable */
import { SM_DeliveryFailureCause, _decode_SM_DeliveryFailureCause, _encode_SM_DeliveryFailureCause } from "../MAP-ER-DataTypes/SM-DeliveryFailureCause.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary sm_DeliveryFailure
 * @description
 * 
 * Short-message delivery failure. Detailed reasons: memory capacity exceeded;
 * MS protocol error; MS not equipped; unknown service centre (SC); SC
 * congestion; invalid SME address; subscriber is not an SC subscriber. Detailed
 * diagnostic information, if present, is coded as specified in 3GPP TS 23.040
 * under SMS-SUBMIT-REPORT and SMS-DELIVERY-REPORT, and shall be forwarded in
 * the MAP_MO_FORWARD_SHORT_MESSAGE and MAP_MT_FORWARD_SHORT_MESSAGE response
 * (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 32. Parameter `SM-DeliveryFailureCause` is required (3GPP TS
 * 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sm-DeliveryFailure  ERROR ::= {
 *     PARAMETER
 *     SM-DeliveryFailureCause
 *     CODE    local:32 }
 * ```
 * 
 * @constant
 * @type {ERROR<SM_DeliveryFailureCause>}
 * @implements {ERROR<SM_DeliveryFailureCause>}
 */
export
const sm_DeliveryFailure: ERROR<SM_DeliveryFailureCause> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_SM_DeliveryFailureCause,
    },
    encoderFor: {
        "&ParameterType": _encode_SM_DeliveryFailureCause,
    },
    "&errorCode": { local: 32 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
