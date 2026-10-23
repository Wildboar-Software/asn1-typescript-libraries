/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary temporarilyUnavailable
 * @description
 *
 * ECMA-194 defines this error (local CODE 1000) on activation,
 * deactivation, interrogation, and override execution, but does not
 * say when the Served User PINX or Terminating PINX returns it
 * (§6.3.1, §6.5.6.2, §6.6.1.2). No parameter.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
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
