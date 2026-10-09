/* eslint-disable */
import { IllegalSubscriberParam, _decode_IllegalSubscriberParam, _encode_IllegalSubscriberParam } from "../MAP-ER-DataTypes/IllegalSubscriberParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary illegalSubscriber
 * @description
 * 
 * Returned when illegality of the access has been established by use of the
 * authentication procedure (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 9. Optional parameter `IllegalSubscriberParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * illegalSubscriber  ERROR ::= {
 *     PARAMETER
 *     IllegalSubscriberParam
 *     -- optional
 *     -- IllegalSubscriberParam must not be used in version <3
 *     CODE    local:9 }
 * ```
 * 
 * @constant
 * @type {ERROR<IllegalSubscriberParam>}
 * @implements {ERROR<IllegalSubscriberParam>}
 */
export
const illegalSubscriber: ERROR<IllegalSubscriberParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_IllegalSubscriberParam,
    },
    encoderFor: {
        "&ParameterType": _encode_IllegalSubscriberParam,
    },
    "&errorCode": { local: 9 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
