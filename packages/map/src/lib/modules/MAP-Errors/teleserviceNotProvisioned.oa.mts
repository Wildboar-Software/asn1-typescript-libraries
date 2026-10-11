/* eslint-disable */
import { TeleservNotProvParam, _decode_TeleservNotProvParam, _encode_TeleservNotProvParam } from "../MAP-ER-DataTypes/TeleservNotProvParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary teleserviceNotProvisioned
 * @description
 * 
 * Subscription user error: teleservice not provisioned (3GPP TS 29.002 V19.1.0
 * clause 7.6.1.4).
 *
 * Local code 11. Optional parameter `TeleservNotProvParam` must not be used in
 * version <3 (3GPP TS 29.002 V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * teleserviceNotProvisioned  ERROR ::= {
 *     PARAMETER
 *     TeleservNotProvParam
 *     -- optional
 *     -- TeleservNotProvParam must not be used in version <3
 *     CODE    local:11 }
 * ```
 * 
 * @constant
 * @type {ERROR<TeleservNotProvParam>}
 * @implements {ERROR<TeleservNotProvParam>}
 */
export
const teleserviceNotProvisioned: ERROR<TeleservNotProvParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_TeleservNotProvParam,
    },
    encoderFor: {
        "&ParameterType": _encode_TeleservNotProvParam,
    },
    "&errorCode": { local: 11 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
