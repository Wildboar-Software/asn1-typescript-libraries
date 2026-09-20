/* eslint-disable */
import { MM_EventNotSupported_Param, _decode_MM_EventNotSupported_Param, _encode_MM_EventNotSupported_Param } from "../MAP-ER-DataTypes/MM-EventNotSupported-Param.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary mm_EventNotSupported
 * @description
 * 
 * Mobility Management user error. Not listed under clause 7.6.1.4; returned as
 * user error MM-EventNotSupported on MAP-NOTE-MM-EVENT (3GPP TS 29.002 V19.1.0
 * clauses 8.1.8.3 and 17.6.6).
 *
 * Local code 59. Optional parameter `MM-EventNotSupported-Param` (3GPP TS
 * 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mm-EventNotSupported  ERROR ::= {
 *     PARAMETER
 *     MM-EventNotSupported-Param
 *     -- optional
 *     CODE    local:59 }
 * ```
 * 
 * @constant
 * @type {ERROR<MM_EventNotSupported_Param>}
 * @implements {ERROR<MM_EventNotSupported_Param>}
 */
export
const mm_EventNotSupported: ERROR<MM_EventNotSupported_Param> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_MM_EventNotSupported_Param,
    },
    encoderFor: {
        "&ParameterType": _encode_MM_EventNotSupported_Param,
    },
    "&errorCode": { local: 59 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
