/* eslint-disable */
import { UnidentifiedSubParam, _decode_UnidentifiedSubParam, _encode_UnidentifiedSubParam } from "../MAP-ER-DataTypes/UnidentifiedSubParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary unidentifiedSubscriber
 * @description
 * 
 * Returned if the subscriber is not contained in the database and it has not or
 * cannot be established whether or not a subscription exists (3GPP TS 29.002
 * V19.1.0 clause 7.6.1.4).
 *
 * Local code 5. Optional parameter `UnidentifiedSubParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unidentifiedSubscriber  ERROR ::= {
 *     PARAMETER
 *     UnidentifiedSubParam
 *     -- optional
 *     -- UunidentifiedSubParam must not be used in version <3
 *     CODE    local:5 }
 * ```
 * 
 * @constant
 * @type {ERROR<UnidentifiedSubParam>}
 * @implements {ERROR<UnidentifiedSubParam>}
 */
export
const unidentifiedSubscriber: ERROR<UnidentifiedSubParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_UnidentifiedSubParam,
    },
    encoderFor: {
        "&ParameterType": _encode_UnidentifiedSubParam,
    },
    "&errorCode": { local: 5 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
