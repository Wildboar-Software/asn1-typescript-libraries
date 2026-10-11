/* eslint-disable */
import { ForwardingFailedParam, _decode_ForwardingFailedParam, _encode_ForwardingFailedParam } from "../MAP-ER-DataTypes/ForwardingFailedParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary forwardingFailed
 * @description
 * 
 * Returned when the GMSC interrogated the HLR for forwarding information but
 * the HLR returned an error (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 47. Optional parameter `ForwardingFailedParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forwardingFailed  ERROR ::= {
 *     PARAMETER
 *     ForwardingFailedParam
 *     -- optional
 *     CODE    local:47 }
 * ```
 * 
 * @constant
 * @type {ERROR<ForwardingFailedParam>}
 * @implements {ERROR<ForwardingFailedParam>}
 */
export
const forwardingFailed: ERROR<ForwardingFailedParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_ForwardingFailedParam,
    },
    encoderFor: {
        "&ParameterType": _encode_ForwardingFailedParam,
    },
    "&errorCode": { local: 47 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
