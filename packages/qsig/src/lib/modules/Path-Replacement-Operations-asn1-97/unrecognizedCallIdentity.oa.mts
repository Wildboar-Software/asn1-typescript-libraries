/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary unrecognizedCallIdentity
 * @description
 *
 * ROSE local 1005. The new connection could not be associated with the
 * old connection at the Requesting PINX. Sent, with cause 29, as one
 * implementation choice when `callIdentity` plus Called party number
 * match no entity in PR-Req-Initiated. The other choices are cause 1
 * with no error, or cause 29 with `invalidRerouteingNumber`.
 * ECMA-176 §6.3.1, §6.5.1.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unrecognizedCallIdentity ERROR ::= { CODE local: 1005 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const unrecognizedCallIdentity: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1005 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
