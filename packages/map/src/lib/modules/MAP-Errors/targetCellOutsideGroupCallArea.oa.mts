/* eslint-disable */
import { TargetCellOutsideGCA_Param, _decode_TargetCellOutsideGCA_Param, _encode_TargetCellOutsideGCA_Param } from "../MAP-ER-DataTypes/TargetCellOutsideGCA-Param.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary targetCellOutsideGroupCallArea
 * @description
 * 
 * Handover user error: target cell outside group call area (3GPP TS 29.002
 * V19.1.0 clause 7.6.1.4).
 *
 * Local code 42. Optional parameter `TargetCellOutsideGCA-Param` (3GPP TS
 * 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * targetCellOutsideGroupCallArea  ERROR ::= {
 *     PARAMETER
 *     TargetCellOutsideGCA-Param
 *     -- optional
 *     CODE    local:42 }
 * ```
 * 
 * @constant
 * @type {ERROR<TargetCellOutsideGCA_Param>}
 * @implements {ERROR<TargetCellOutsideGCA_Param>}
 */
export
const targetCellOutsideGroupCallArea: ERROR<TargetCellOutsideGCA_Param> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_TargetCellOutsideGCA_Param,
    },
    encoderFor: {
        "&ParameterType": _encode_TargetCellOutsideGCA_Param,
    },
    "&errorCode": { local: 42 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
