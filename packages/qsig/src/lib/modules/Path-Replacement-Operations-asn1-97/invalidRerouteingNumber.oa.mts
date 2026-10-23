/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary invalidRerouteingNumber
 * @description
 *
 * ROSE local 1004. The new connection failed because the Called party
 * number is not a valid number for routing that connection. The ASN.1
 * comment stops at "routeing the new connection to". Also one of the
 * cause-29 choices when a SETUP's `callIdentity` and Called party
 * number match no Requesting entity in PR-Req-Initiated.
 * ECMA-176 §6.3.1, §6.5.1.4.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * invalidRerouteingNumber ERROR ::= { CODE local: 1004 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const invalidRerouteingNumber: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1004 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
