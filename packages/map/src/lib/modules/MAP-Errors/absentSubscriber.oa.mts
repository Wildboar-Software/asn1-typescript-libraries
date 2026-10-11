/* eslint-disable */
import { AbsentSubscriberParam, _decode_AbsentSubscriberParam, _encode_AbsentSubscriberParam } from "../MAP-ER-DataTypes/AbsentSubscriberParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary absentSubscriber
 * @description
 * 
 * Returned when the subscriber has activated the detach service or the system
 * detects the absence condition. This error may be qualified to indicate
 * whether the subscriber was IMSI detached, in a restricted area, or did not
 * respond to paging (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 27. Optional parameter `AbsentSubscriberParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * absentSubscriber  ERROR ::= {
 *     PARAMETER
 *     AbsentSubscriberParam
 *     -- optional
 *     -- AbsentSubscriberParam must not be used in version <3
 *     CODE    local:27 }
 * ```
 * 
 * @constant
 * @type {ERROR<AbsentSubscriberParam>}
 * @implements {ERROR<AbsentSubscriberParam>}
 */
export
const absentSubscriber: ERROR<AbsentSubscriberParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_AbsentSubscriberParam,
    },
    encoderFor: {
        "&ParameterType": _encode_AbsentSubscriberParam,
    },
    "&errorCode": { local: 27 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
