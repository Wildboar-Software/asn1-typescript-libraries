/* eslint-disable */
import { SS_NotAvailableParam, _decode_SS_NotAvailableParam, _encode_SS_NotAvailableParam } from "../MAP-ER-DataTypes/SS-NotAvailableParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary ss_NotAvailable
 * @description
 * 
 * Supplementary-services user error; clause 7.6.1.4 refers the definition to
 * 3GPP TS 24.080 (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 18. Optional parameter `SS-NotAvailableParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ss-NotAvailable  ERROR ::= {
 *     PARAMETER
 *     SS-NotAvailableParam
 *     -- optional
 *     -- SS-NotAvailableParam must not be used in version <3
 *     CODE    local:18 }
 * ```
 * 
 * @constant
 * @type {ERROR<SS_NotAvailableParam>}
 * @implements {ERROR<SS_NotAvailableParam>}
 */
export
const ss_NotAvailable: ERROR<SS_NotAvailableParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_SS_NotAvailableParam,
    },
    encoderFor: {
        "&ParameterType": _encode_SS_NotAvailableParam,
    },
    "&errorCode": { local: 18 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
