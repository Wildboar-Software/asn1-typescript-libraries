/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary notAuthorized
 * @description
 *
 * The PUM user is not allowed to register (ECMA-282 §6.5.3.2), de-register
 * (§6.6.2.2), or interrogate (§6.7.2.2). ROSE local CODE 1007. No parameter
 * (§6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * notAuthorized ERROR ::= { CODE local: 1007 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const notAuthorized: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1007 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
