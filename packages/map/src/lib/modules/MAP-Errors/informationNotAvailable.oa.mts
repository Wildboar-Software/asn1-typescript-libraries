/* eslint-disable */
import { InformationNotAvailableParam, _decode_InformationNotAvailableParam, _encode_InformationNotAvailableParam } from "../MAP-ER-DataTypes/InformationNotAvailableParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary informationNotAvailable
 * @description
 * 
 * Any-time information handling user error. Not listed under clause 7.6.1.4;
 * returned as user error Information Not Available on
 * MAP-ANY-TIME-SUBSCRIPTION-INTERROGATION and MAP-ANY-TIME-MODIFICATION (3GPP
 * TS 29.002 V19.1.0 clauses 8.11.3.3, 8.11.4.3 and 17.6.6).
 *
 * Local code 62. Optional parameter `InformationNotAvailableParam` (3GPP TS
 * 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * informationNotAvailable  ERROR ::= {
 *     PARAMETER
 *     InformationNotAvailableParam
 *     -- optional
 *     CODE    local:62 }
 * ```
 * 
 * @constant
 * @type {ERROR<InformationNotAvailableParam>}
 * @implements {ERROR<InformationNotAvailableParam>}
 */
export
const informationNotAvailable: ERROR<InformationNotAvailableParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_InformationNotAvailableParam,
    },
    encoderFor: {
        "&ParameterType": _encode_InformationNotAvailableParam,
    },
    "&errorCode": { local: 62 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
