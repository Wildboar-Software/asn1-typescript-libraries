/* eslint-disable */
import { ShortTermDenialParam, _decode_ShortTermDenialParam, _encode_ShortTermDenialParam } from "../MAP-ER-DataTypes/ShortTermDenialParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary shortTermDenial
 * @description
 * 
 * Supplementary-services user error; clause 7.6.1.4 refers the definition to
 * 3GPP TS 24.080 (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 29. Optional parameter `ShortTermDenialParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * shortTermDenial  ERROR ::= {
 *     PARAMETER
 *     ShortTermDenialParam
 *     -- optional
 *     CODE    local:29 }
 * ```
 * 
 * @constant
 * @type {ERROR<ShortTermDenialParam>}
 * @implements {ERROR<ShortTermDenialParam>}
 */
export
const shortTermDenial: ERROR<ShortTermDenialParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_ShortTermDenialParam,
    },
    encoderFor: {
        "&ParameterType": _encode_ShortTermDenialParam,
    },
    "&errorCode": { local: 29 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
