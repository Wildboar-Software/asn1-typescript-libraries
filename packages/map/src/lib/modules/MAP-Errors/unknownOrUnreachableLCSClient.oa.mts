/* eslint-disable */
import { UnknownOrUnreachableLCSClient_Param, _decode_UnknownOrUnreachableLCSClient_Param, _encode_UnknownOrUnreachableLCSClient_Param } from "../MAP-ER-DataTypes/UnknownOrUnreachableLCSClient-Param.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary unknownOrUnreachableLCSClient
 * @description
 * 
 * Location services user error: Unknown or unreachable LCS Client (3GPP TS
 * 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 58. Optional parameter `UnknownOrUnreachableLCSClient-Param` (3GPP
 * TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unknownOrUnreachableLCSClient  ERROR ::= {
 *     PARAMETER
 *     UnknownOrUnreachableLCSClient-Param
 *     -- optional
 *     CODE    local:58 }
 * ```
 * 
 * @constant
 * @type {ERROR<UnknownOrUnreachableLCSClient_Param>}
 * @implements {ERROR<UnknownOrUnreachableLCSClient_Param>}
 */
export
const unknownOrUnreachableLCSClient: ERROR<UnknownOrUnreachableLCSClient_Param> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_UnknownOrUnreachableLCSClient_Param,
    },
    encoderFor: {
        "&ParameterType": _encode_UnknownOrUnreachableLCSClient_Param,
    },
    "&errorCode": { local: 58 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
