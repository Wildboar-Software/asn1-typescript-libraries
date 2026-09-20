/* eslint-disable */
import { UnknownSubscriberParam, _decode_UnknownSubscriberParam, _encode_UnknownSubscriberParam } from "../MAP-ER-DataTypes/UnknownSubscriberParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary unknownSubscriber
 * @description
 * 
 * Returned when no such subscription exists (3GPP TS 29.002 V19.1.0 clause
 * 7.6.1.4).
 *
 * Local code 1. Optional parameter `UnknownSubscriberParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unknownSubscriber  ERROR ::= {
 *     PARAMETER
 *     UnknownSubscriberParam
 *     -- optional
 *     -- UnknownSubscriberParam must not be used in version <3
 *     CODE    local:1 }
 * ```
 * 
 * @constant
 * @type {ERROR<UnknownSubscriberParam>}
 * @implements {ERROR<UnknownSubscriberParam>}
 */
export
const unknownSubscriber: ERROR<UnknownSubscriberParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_UnknownSubscriberParam,
    },
    encoderFor: {
        "&ParameterType": _encode_UnknownSubscriberParam,
    },
    "&errorCode": { local: 1 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
