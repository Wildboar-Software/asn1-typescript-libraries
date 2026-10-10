/* eslint-disable */
import { LongTermDenialParam, _decode_LongTermDenialParam, _encode_LongTermDenialParam } from "../MAP-ER-DataTypes/LongTermDenialParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary longTermDenial
 * @description
 * 
 * Supplementary-services user error; clause 7.6.1.4 refers the definition to
 * 3GPP TS 24.080 (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 30. Optional parameter `LongTermDenialParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * longTermDenial  ERROR ::= {
 *     PARAMETER
 *     LongTermDenialParam
 *     -- optional
 *     CODE    local:30 }
 * ```
 * 
 * @constant
 * @type {ERROR<LongTermDenialParam>}
 * @implements {ERROR<LongTermDenialParam>}
 */
export
const longTermDenial: ERROR<LongTermDenialParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_LongTermDenialParam,
    },
    encoderFor: {
        "&ParameterType": _encode_LongTermDenialParam,
    },
    "&errorCode": { local: 30 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
