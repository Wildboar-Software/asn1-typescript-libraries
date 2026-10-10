/* eslint-disable */
import { BearerServNotProvParam, _decode_BearerServNotProvParam, _encode_BearerServNotProvParam } from "../MAP-ER-DataTypes/BearerServNotProvParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary bearerServiceNotProvisioned
 * @description
 * 
 * Subscription user error: bearer service not provisioned (3GPP TS 29.002
 * V19.1.0 clause 7.6.1.4).
 *
 * Local code 10. Optional parameter `BearerServNotProvParam` must not be used
 * in version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bearerServiceNotProvisioned  ERROR ::= {
 *     PARAMETER
 *     BearerServNotProvParam
 *     -- optional
 *     -- BearerServNotProvParam must not be used in version <3
 *     CODE    local:10 }
 * ```
 * 
 * @constant
 * @type {ERROR<BearerServNotProvParam>}
 * @implements {ERROR<BearerServNotProvParam>}
 */
export
const bearerServiceNotProvisioned: ERROR<BearerServNotProvParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_BearerServNotProvParam,
    },
    encoderFor: {
        "&ParameterType": _encode_BearerServNotProvParam,
    },
    "&errorCode": { local: 10 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
