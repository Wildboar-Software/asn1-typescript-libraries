/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary remoteUserBusyAgain
 * @description
 *
 * User B is busy again (ECMA-186 §6.5.3.2.3, §6.5.3.2.4). Local code
 * 1012. On `ccPathReserve`, the Terminating PINX clears the attempt
 * with cause 17, resumes monitoring, and enters CC-Invoked-User-B.
 * On `ccRingout`, the same cause is used; the request is kept only
 * if service retention is in use (§6.5.3.2.4, §6.5.2.2.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteUserBusyAgain ERROR ::= { CODE local: 1012 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const remoteUserBusyAgain: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1012 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
