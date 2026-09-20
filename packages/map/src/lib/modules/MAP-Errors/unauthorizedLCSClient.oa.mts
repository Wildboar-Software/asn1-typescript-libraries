/* eslint-disable */
import { UnauthorizedLCSClient_Param, _decode_UnauthorizedLCSClient_Param, _encode_UnauthorizedLCSClient_Param } from "../MAP-ER-DataTypes/UnauthorizedLCSClient-Param.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary unauthorizedLCSClient
 * @description
 * 
 * Location services user error. Detailed reasons: NoAdditional Information;
 * Client not in MS Privacy Exception List; Call to Client not setup; Disallowed
 * by Local Regulatory Requirements; Unauthorised Privacy Class; Unauthorised
 * Call/Session Unrelated External Client; Unauthorised Call/Session Related
 * External Client; Privacy override not applicable (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * Local code 53. Optional parameter `UnauthorizedLCSClient-Param` (3GPP TS
 * 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unauthorizedLCSClient  ERROR ::= {
 *     PARAMETER
 *     UnauthorizedLCSClient-Param
 *     -- optional
 *     CODE    local:53 }
 * ```
 * 
 * @constant
 * @type {ERROR<UnauthorizedLCSClient_Param>}
 * @implements {ERROR<UnauthorizedLCSClient_Param>}
 */
export
const unauthorizedLCSClient: ERROR<UnauthorizedLCSClient_Param> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_UnauthorizedLCSClient_Param,
    },
    encoderFor: {
        "&ParameterType": _encode_UnauthorizedLCSClient_Param,
    },
    "&errorCode": { local: 53 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
