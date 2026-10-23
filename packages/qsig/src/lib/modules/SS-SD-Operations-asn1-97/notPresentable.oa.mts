/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary notPresentable
 * @description
 *
 * `display` error, local code 1025, with no parameter. The Client User PINX
 * sends it when the received display information cannot be presented correctly
 * or completely (ECMA-311 §6.5.1.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * notPresentable ERROR ::= { CODE local: 1025 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const notPresentable: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1025 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
