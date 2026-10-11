/* eslint-disable */
import { ATSI_NotAllowedParam, _decode_ATSI_NotAllowedParam, _encode_ATSI_NotAllowedParam } from "../MAP-ER-DataTypes/ATSI-NotAllowedParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary atsi_NotAllowed
 * @description
 * 
 * Any Time Subscription Interrogation user error. Not listed under clause
 * 7.6.1.4; returned as user error Any Time Subscription Interrogation Not
 * Allowed on MAP-ANY-TIME-SUBSCRIPTION-INTERROGATION (3GPP TS 29.002 V19.1.0
 * clauses 8.11.3.3 and 17.6.6).
 *
 * Local code 60. Optional parameter `ATSI-NotAllowedParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * atsi-NotAllowed  ERROR ::= {
 *     PARAMETER
 *     ATSI-NotAllowedParam
 *     -- optional
 *     CODE    local:60 }
 * ```
 * 
 * @constant
 * @type {ERROR<ATSI_NotAllowedParam>}
 * @implements {ERROR<ATSI_NotAllowedParam>}
 */
export
const atsi_NotAllowed: ERROR<ATSI_NotAllowedParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_ATSI_NotAllowedParam,
    },
    encoderFor: {
        "&ParameterType": _encode_ATSI_NotAllowedParam,
    },
    "&errorCode": { local: 60 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
