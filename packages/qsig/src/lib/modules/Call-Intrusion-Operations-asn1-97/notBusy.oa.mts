/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary notBusy
 * @description
 *
 * The called user is not busy (ECMA-203 §6.3.1, §6.6.2.1.2). The
 * Terminating PINX returns this on `callIntrusionRequest` in the
 * resulting ALERTING or CONNECT. It is also sent if the called user
 * becomes free during CI-GetCIPL-I or CI-Dest-Notify, and, together
 * with `callIntrusionCompleted` or `remoteUserAlerting`, during
 * wait-on-busy reinvocation (§6.6.2.6.2). Local code 1009.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * notBusy ERROR ::= { CODE local: 1009 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const notBusy: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1009 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
