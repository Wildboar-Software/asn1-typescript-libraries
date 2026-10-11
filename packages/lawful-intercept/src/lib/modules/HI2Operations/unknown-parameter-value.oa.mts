/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unknown_parameter_value
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * unknown-parameter-value ERROR ::= {CODE local:2}
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const unknown_parameter_value: ERROR = {
    class: "ERROR",
    decoderFor: {
    },
    encoderFor: {
    },
    "&errorCode": { local: 2 } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
