/* eslint-disable */
import { IllegalSS_OperationParam, _decode_IllegalSS_OperationParam, _encode_IllegalSS_OperationParam } from "../MAP-ER-DataTypes/IllegalSS-OperationParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary illegalSS_Operation
 * @description
 * 
 * Supplementary-services user error; clause 7.6.1.4 refers the definition to
 * 3GPP TS 24.080 (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 16. Optional parameter `IllegalSS-OperationParam` must not be used
 * in version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * illegalSS-Operation  ERROR ::= {
 *     PARAMETER
 *     IllegalSS-OperationParam
 *     -- optional
 *     -- IllegalSS-OperationParam must not be used in version <3
 *     CODE    local:16 }
 * ```
 * 
 * @constant
 * @type {ERROR<IllegalSS_OperationParam>}
 * @implements {ERROR<IllegalSS_OperationParam>}
 */
export
const illegalSS_Operation: ERROR<IllegalSS_OperationParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_IllegalSS_OperationParam,
    },
    encoderFor: {
        "&ParameterType": _encode_IllegalSS_OperationParam,
    },
    "&errorCode": { local: 16 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
