/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary pumUserFailedAuthentication
 * @description
 *
 * ROSE local CODE 1020. No parameter. Listed on `pumRegistr`, `pumDe-reg`, and
 * `pumInterrog` (ECMA-282 §6.3.1). Notes in §6.5.1.1, §6.6.1.1, and §6.7.1.1
 * say that validating a request can involve authentication. Clause 6 is silent
 * on when to return this error.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumUserFailedAuthentication ERROR ::= { CODE local: 1020 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const pumUserFailedAuthentication: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1020 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
