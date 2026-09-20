/* eslint-disable */
import { CUG_RejectParam, _decode_CUG_RejectParam, _encode_CUG_RejectParam } from "../MAP-ER-DataTypes/CUG-RejectParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary cug_Reject
 * @description
 * 
 * Returned when the call does not pass a CUG check. Additional information may
 * also be given in order to indicate rejection due to e.g. incoming call barred
 * or non-CUG membership (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 15. Optional parameter `CUG-RejectParam` (3GPP TS 29.002 V19.1.0
 * clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cug-Reject  ERROR ::= {
 *     PARAMETER
 *     CUG-RejectParam
 *     -- optional
 *     CODE    local:15 }
 * ```
 * 
 * @constant
 * @type {ERROR<CUG_RejectParam>}
 * @implements {ERROR<CUG_RejectParam>}
 */
export
const cug_Reject: ERROR<CUG_RejectParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_CUG_RejectParam,
    },
    encoderFor: {
        "&ParameterType": _encode_CUG_RejectParam,
    },
    "&errorCode": { local: 15 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
