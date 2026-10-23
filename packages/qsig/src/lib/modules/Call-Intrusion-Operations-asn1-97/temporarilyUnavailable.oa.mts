/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary temporarilyUnavailable
 * @description
 *
 * Conditions for SS-CI are momentarily not met (ECMA-203 §6.3.1).
 * Local code 1000. The Terminating PINX sends this on
 * `callIntrusionRequest` when timer T5 expires, when
 * `callIntrusionGetCIPL` is rejected for a reason other than
 * unrecognized operation, or when the established call clears but
 * the called user stays busy (§6.6.2.1.2, §6.6.2.5.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * temporarilyUnavailable ERROR ::= { CODE local: 1000 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const temporarilyUnavailable: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1000 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
