/* eslint-disable */
import { DataMissingParam, _decode_DataMissingParam, _encode_DataMissingParam } from "../MAP-ER-DataTypes/DataMissingParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary dataMissing
 * @description
 * 
 * Returned when an optional parameter required by the context is missing (3GPP
 * TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 35. Optional parameter `DataMissingParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dataMissing  ERROR ::= {
 *     PARAMETER
 *     DataMissingParam
 *     -- optional
 *     -- DataMissingParam must not be used in version <3
 *     CODE    local:35 }
 * ```
 * 
 * @constant
 * @type {ERROR<DataMissingParam>}
 * @implements {ERROR<DataMissingParam>}
 */
export
const dataMissing: ERROR<DataMissingParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_DataMissingParam,
    },
    encoderFor: {
        "&ParameterType": _encode_DataMissingParam,
    },
    "&errorCode": { local: 35 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
