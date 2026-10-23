/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary pumUserNotRegistered
 * @description
 *
 * ROSE local CODE 1022. No parameter (ECMA-282 §6.3.1). The Visitor PINX
 * returns this on `pumInterrog` when the PUM user is not in the VDB (§6.7.1.2).
 * Also listed on `pumDe-reg`. Clause 6 is silent on when a de-registration
 * returns it.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumUserNotRegistered ERROR ::= { CODE local: 1022 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const pumUserNotRegistered: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1022 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
