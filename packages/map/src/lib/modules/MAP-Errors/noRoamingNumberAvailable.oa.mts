/* eslint-disable */
import { NoRoamingNbParam, _decode_NoRoamingNbParam, _encode_NoRoamingNbParam } from "../MAP-ER-DataTypes/NoRoamingNbParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary noRoamingNumberAvailable
 * @description
 * 
 * Returned when a roaming number cannot be allocated because all available
 * numbers are in use (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 39. Optional parameter `NoRoamingNbParam` (3GPP TS 29.002 V19.1.0
 * clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noRoamingNumberAvailable  ERROR ::= {
 *     PARAMETER
 *     NoRoamingNbParam
 *     -- optional
 *     CODE    local:39 }
 * ```
 * 
 * @constant
 * @type {ERROR<NoRoamingNbParam>}
 * @implements {ERROR<NoRoamingNbParam>}
 */
export
const noRoamingNumberAvailable: ERROR<NoRoamingNbParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_NoRoamingNbParam,
    },
    encoderFor: {
        "&ParameterType": _encode_NoRoamingNbParam,
    },
    "&errorCode": { local: 39 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
