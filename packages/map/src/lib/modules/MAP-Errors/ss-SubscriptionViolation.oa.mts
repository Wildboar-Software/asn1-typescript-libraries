/* eslint-disable */
import { SS_SubscriptionViolationParam, _decode_SS_SubscriptionViolationParam, _encode_SS_SubscriptionViolationParam } from "../MAP-ER-DataTypes/SS-SubscriptionViolationParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary ss_SubscriptionViolation
 * @description
 * 
 * Supplementary-services user error; clause 7.6.1.4 refers the definition to
 * 3GPP TS 24.080 (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 19. Optional parameter `SS-SubscriptionViolationParam` must not be
 * used in version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ss-SubscriptionViolation  ERROR ::= {
 *     PARAMETER
 *     SS-SubscriptionViolationParam
 *     -- optional
 *     -- SS-SubscriptionViolationParam must not be used in version <3
 *     CODE    local:19 }
 * ```
 * 
 * @constant
 * @type {ERROR<SS_SubscriptionViolationParam>}
 * @implements {ERROR<SS_SubscriptionViolationParam>}
 */
export
const ss_SubscriptionViolation: ERROR<SS_SubscriptionViolationParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_SS_SubscriptionViolationParam,
    },
    encoderFor: {
        "&ParameterType": _encode_SS_SubscriptionViolationParam,
    },
    "&errorCode": { local: 19 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
