/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary erroneous_parameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * erroneous-parameter ERROR ::= {CODE local:3}
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const erroneous_parameter: ERROR = {
    class: "ERROR",
    decoderFor: {
    },
    encoderFor: {
    },
    "&errorCode": { local: 3 } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
