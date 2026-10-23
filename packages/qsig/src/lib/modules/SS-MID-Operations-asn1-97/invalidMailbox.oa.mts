/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary invalidMailbox
 * @description
 *
 * Mailbox not accepted (ECMA-347 §7.3.1). Local code 1039.
 * No parameter. Listed for `mIDMailboxID` and
 * `mIDMailboxAuth`. §7.5.2.2.2 gives an invalid mailbox
 * identifier as an example for `mIDMailboxID` and does not
 * name this error. It does not say when to use this code
 * rather than `unspecified` or an imported general error.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * invalidMailbox ERROR ::= { CODE local 1039 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const invalidMailbox: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1039 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
