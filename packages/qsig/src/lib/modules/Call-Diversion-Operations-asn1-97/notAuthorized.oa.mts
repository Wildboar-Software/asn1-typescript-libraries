/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary notAuthorized
 * @description
 *
 * ROSE local code 1007. No parameter. Allowed on `activateDiversionQ`,
 * `deactivateDiversionQ`, and `interrogateDiversionQ` (ECMA-174 §6.3.1). The
 * Served User PINX may refuse the request because of the activating,
 * deactivating, or interrogating user's number (§6.5.3.1.1 to §6.5.3.1.3), but
 * the procedures do not name this error for that refusal. Who may activate
 * remotely is implementation dependent (ECMA-173 §6.2.2.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
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
