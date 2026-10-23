/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary authorizationFailed
 * @description
 *
 * Authentication not accepted (ECMA-347 §7.3.1). Local
 * code 1040. No parameter. Listed only for
 * `mIDMailboxAuth`. §7.5.1.2.2 gives an invalid Served User
 * password as an example and does not name this error.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authorizationFailed ERROR ::= { CODE local 1040 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const authorizationFailed: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1040 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
