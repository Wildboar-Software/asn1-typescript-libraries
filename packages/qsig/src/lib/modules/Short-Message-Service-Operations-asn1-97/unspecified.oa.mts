/* eslint-disable */
import { type SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unspecified
 * @description
 *
 * Unspecified SMS error (ECMA-325 §6.3.1). ROSE local CODE 1008. Parameter is
 * an `SmsExtension`. Listed on `smsSubmit`, `smsDeliver`, `smsStatusReport`,
 * `smsCommand`, and `scAlert`. On `scAlert` it is the only error.
 *
 * The procedures name `failureCause` values for the typed errors and are
 * silent on when to return `unspecified` instead. This edition defines no
 * extensions in `SmsExtSet`. §6.5.3.2.1 says an invalid `scAlert` gets a
 * return error and does not define invalidity.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unspecified ERROR ::= {
 *     PARAMETER SmsExtension
 *     CODE local: 1008
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<SmsExtension>}
 * @implements {ERROR<SmsExtension>}
 */
export
const unspecified: ERROR<SmsExtension> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_SmsExtension,
    },
    encoderFor: {
        "&ParameterType": _encode_SmsExtension,
    },
    "&errorCode": { local: 1008 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
