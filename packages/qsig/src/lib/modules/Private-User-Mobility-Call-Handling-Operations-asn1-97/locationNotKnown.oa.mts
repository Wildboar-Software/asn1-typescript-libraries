/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary locationNotKnown
 * @description
 *
 * The Home PINX does not know the PUM user's current location (ECMA-284
 * §6.5.3.2). ROSE local CODE 1015. No parameter. The PUMI-detect PINX releases
 * the basic call with cause #3, "No route to destination" (§6.5.2.2).
 * `notAvailable` is the separate case in which the user has deregistered
 * (§6.5.3.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationNotKnown ERROR ::= { CODE local: 1015 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const locationNotKnown: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1015 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
