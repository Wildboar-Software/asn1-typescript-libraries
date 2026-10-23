/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary pumUserNotSubscribedToThisServiceOpt
 * @description
 *
 * ROSE local CODE 1019. No parameter. Listed on `pumRegistr` and `pumDe-reg`
 * (ECMA-282 §6.3.1). Clause 6 is silent on when to return it.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumUserNotSubscribedToThisServiceOpt ERROR ::= { CODE local: 1019 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const pumUserNotSubscribedToThisServiceOpt: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1019 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
