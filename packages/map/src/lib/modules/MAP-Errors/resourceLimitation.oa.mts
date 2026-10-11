/* eslint-disable */
import { ResourceLimitationParam, _decode_ResourceLimitationParam, _encode_ResourceLimitationParam } from "../MAP-ER-DataTypes/ResourceLimitationParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary resourceLimitation
 * @description
 * 
 * Generic user error indicating resource limitation (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * Local code 51. Optional parameter `ResourceLimitationParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resourceLimitation  ERROR ::= {
 *     PARAMETER
 *     ResourceLimitationParam
 *     -- optional
 *     CODE    local:51 }
 * ```
 * 
 * @constant
 * @type {ERROR<ResourceLimitationParam>}
 * @implements {ERROR<ResourceLimitationParam>}
 */
export
const resourceLimitation: ERROR<ResourceLimitationParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_ResourceLimitationParam,
    },
    encoderFor: {
        "&ParameterType": _encode_ResourceLimitationParam,
    },
    "&errorCode": { local: 51 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
