/* eslint-disable */
import { SS_IncompatibilityCause, _decode_SS_IncompatibilityCause, _encode_SS_IncompatibilityCause } from "../MAP-ER-DataTypes/SS-IncompatibilityCause.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary ss_Incompatibility
 * @description
 * 
 * Supplementary-services user error; clause 7.6.1.4 refers the definition to
 * 3GPP TS 24.080 (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 20. Optional parameter `SS-IncompatibilityCause` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ss-Incompatibility  ERROR ::= {
 *     PARAMETER
 *     SS-IncompatibilityCause
 *     -- optional
 *     CODE    local:20 }
 * ```
 * 
 * @constant
 * @type {ERROR<SS_IncompatibilityCause>}
 * @implements {ERROR<SS_IncompatibilityCause>}
 */
export
const ss_Incompatibility: ERROR<SS_IncompatibilityCause> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_SS_IncompatibilityCause,
    },
    encoderFor: {
        "&ParameterType": _encode_SS_IncompatibilityCause,
    },
    "&errorCode": { local: 20 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
