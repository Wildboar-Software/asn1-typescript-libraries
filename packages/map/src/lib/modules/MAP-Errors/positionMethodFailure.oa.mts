/* eslint-disable */
import { PositionMethodFailure_Param, _decode_PositionMethodFailure_Param, _encode_PositionMethodFailure_Param } from "../MAP-ER-DataTypes/PositionMethodFailure-Param.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary positionMethodFailure
 * @description
 * 
 * Location services user error. Detailed reasons: Congestion; Insufficient
 * resources; Insufficient Measurement Data; Inconsistent Measurement Data;
 * Location procedure not completed; QoS not attainable; Position Method Not
 * Available in Network; Position Method Not Available in Location Area (3GPP TS
 * 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 54. Optional parameter `PositionMethodFailure-Param` (3GPP TS
 * 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * positionMethodFailure  ERROR ::= {
 *     PARAMETER
 *     PositionMethodFailure-Param
 *     -- optional
 *     CODE    local:54 }
 * ```
 * 
 * @constant
 * @type {ERROR<PositionMethodFailure_Param>}
 * @implements {ERROR<PositionMethodFailure_Param>}
 */
export
const positionMethodFailure: ERROR<PositionMethodFailure_Param> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_PositionMethodFailure_Param,
    },
    encoderFor: {
        "&ParameterType": _encode_PositionMethodFailure_Param,
    },
    "&errorCode": { local: 54 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
