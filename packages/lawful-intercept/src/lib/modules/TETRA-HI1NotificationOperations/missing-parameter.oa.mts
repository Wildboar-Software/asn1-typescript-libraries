/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary missing_parameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * missing-parameter ERROR ::= {CODE local:1}
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const missing_parameter: ERROR = {
    class: "ERROR",
    decoderFor: {
    },
    encoderFor: {
    },
    "&errorCode": { local: 1 } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
