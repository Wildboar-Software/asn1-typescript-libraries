/* eslint-disable */
import { UnauthorizedRequestingNetwork_Param, _decode_UnauthorizedRequestingNetwork_Param, _encode_UnauthorizedRequestingNetwork_Param } from "../MAP-ER-DataTypes/UnauthorizedRequestingNetwork-Param.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary unauthorizedRequestingNetwork
 * @description
 * 
 * Location services user error: Unauthorised Requesting Network (3GPP TS 29.002
 * V19.1.0 clause 7.6.1.4).
 *
 * Local code 52. Optional parameter `UnauthorizedRequestingNetwork-Param` (3GPP
 * TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unauthorizedRequestingNetwork  ERROR ::= {
 *     PARAMETER
 *     UnauthorizedRequestingNetwork-Param
 *     -- optional
 *     CODE    local:52 }
 * ```
 * 
 * @constant
 * @type {ERROR<UnauthorizedRequestingNetwork_Param>}
 * @implements {ERROR<UnauthorizedRequestingNetwork_Param>}
 */
export
const unauthorizedRequestingNetwork: ERROR<UnauthorizedRequestingNetwork_Param> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_UnauthorizedRequestingNetwork_Param,
    },
    encoderFor: {
        "&ParameterType": _encode_UnauthorizedRequestingNetwork_Param,
    },
    "&errorCode": { local: 52 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
