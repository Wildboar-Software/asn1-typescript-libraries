/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary displayTemporarilyNotAvailable
 * @description
 *
 * `display` error, local code 1024, with no parameter. The Client User PINX
 * sends it when the Client User's display is in use by another process
 * (ECMA-311 §6.5.1.2.2). The procedure text spells the error
 * `DisplayTemporarilyNotAvailable`; the ASN.1 identifier is
 * `displayTemporarilyNotAvailable`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * displayTemporarilyNotAvailable ERROR ::= { CODE local: 1024 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const displayTemporarilyNotAvailable: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1024 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
