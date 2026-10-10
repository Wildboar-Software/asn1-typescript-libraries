/* eslint-disable */
import { UnexpectedDataParam, _decode_UnexpectedDataParam, _encode_UnexpectedDataParam } from "../MAP-ER-DataTypes/UnexpectedDataParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary unexpectedDataValue
 * @description
 * 
 * Returned when the data type is formally correct but its value or presence is
 * unexpected in the current context (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 36. Optional parameter `UnexpectedDataParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unexpectedDataValue  ERROR ::= {
 *     PARAMETER
 *     UnexpectedDataParam
 *     -- optional
 *     -- UnexpectedDataParam must not be used in version <3
 *     CODE    local:36 }
 * ```
 * 
 * @constant
 * @type {ERROR<UnexpectedDataParam>}
 * @implements {ERROR<UnexpectedDataParam>}
 */
export
const unexpectedDataValue: ERROR<UnexpectedDataParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_UnexpectedDataParam,
    },
    encoderFor: {
        "&ParameterType": _encode_UnexpectedDataParam,
    },
    "&errorCode": { local: 36 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
