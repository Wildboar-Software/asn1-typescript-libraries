/* eslint-disable */
import { OR_NotAllowedParam, _decode_OR_NotAllowedParam, _encode_OR_NotAllowedParam } from "../MAP-ER-DataTypes/OR-NotAllowedParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary or_NotAllowed
 * @description
 * 
 * Returned when the entity which sends the error does not support optimal
 * routeing, or the HLR will not accept an optimal routeing interrogation from
 * the GMSC, or the call cannot be optimally routed because it would contravene
 * optimal routeing constraints (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 48. Optional parameter `OR-NotAllowedParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * or-NotAllowed  ERROR ::= {
 *     PARAMETER
 *     OR-NotAllowedParam
 *     -- optional
 *     CODE    local:48 }
 * ```
 * 
 * @constant
 * @type {ERROR<OR_NotAllowedParam>}
 * @implements {ERROR<OR_NotAllowedParam>}
 */
export
const or_NotAllowed: ERROR<OR_NotAllowedParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_OR_NotAllowedParam,
    },
    encoderFor: {
        "&ParameterType": _encode_OR_NotAllowedParam,
    },
    "&errorCode": { local: 48 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
