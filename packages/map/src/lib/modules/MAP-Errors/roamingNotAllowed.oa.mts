/* eslint-disable */
import { RoamingNotAllowedParam, _decode_RoamingNotAllowedParam, _encode_RoamingNotAllowedParam } from "../MAP-ER-DataTypes/RoamingNotAllowedParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary roamingNotAllowed
 * @description
 * 
 * Returned when a location updating attempt is made in an area not covered by
 * the subscription (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 8. Parameter `RoamingNotAllowedParam` is required (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * roamingNotAllowed  ERROR ::= {
 *     PARAMETER
 *     RoamingNotAllowedParam
 *     CODE    local:8 }
 * ```
 * 
 * @constant
 * @type {ERROR<RoamingNotAllowedParam>}
 * @implements {ERROR<RoamingNotAllowedParam>}
 */
export
const roamingNotAllowed: ERROR<RoamingNotAllowedParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_RoamingNotAllowedParam,
    },
    encoderFor: {
        "&ParameterType": _encode_RoamingNotAllowedParam,
    },
    "&errorCode": { local: 8 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
