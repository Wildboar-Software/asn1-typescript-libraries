/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary notAuthorized
 * @description
 *
 * The WTM user is not allowed to update location information (ECMA-302
 * §6.5.4.2). ROSE local CODE 1007. No parameter. Listed only on `locUpdate`
 * (§6.3.1). When the user may not deregister, `locDeReg` returns
 * `notAvailable` (§6.6.2.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
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
