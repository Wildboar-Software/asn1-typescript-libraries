/* eslint-disable */
import { ATM_NotAllowedParam, _decode_ATM_NotAllowedParam, _encode_ATM_NotAllowedParam } from "../MAP-ER-DataTypes/ATM-NotAllowedParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary atm_NotAllowed
 * @description
 * 
 * Any Time Modification user error. Not listed under clause 7.6.1.4; returned
 * as user error Any Time Modification Not Allowed on MAP-ANY-TIME-MODIFICATION
 * (3GPP TS 29.002 V19.1.0 clauses 8.11.4.3 and 17.6.6).
 *
 * Local code 61. Optional parameter `ATM-NotAllowedParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * atm-NotAllowed  ERROR ::= {
 *     PARAMETER
 *     ATM-NotAllowedParam
 *     -- optional
 *     CODE    local:61 }
 * ```
 * 
 * @constant
 * @type {ERROR<ATM_NotAllowedParam>}
 * @implements {ERROR<ATM_NotAllowedParam>}
 */
export
const atm_NotAllowed: ERROR<ATM_NotAllowedParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_ATM_NotAllowedParam,
    },
    encoderFor: {
        "&ParameterType": _encode_ATM_NotAllowedParam,
    },
    "&errorCode": { local: 61 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
