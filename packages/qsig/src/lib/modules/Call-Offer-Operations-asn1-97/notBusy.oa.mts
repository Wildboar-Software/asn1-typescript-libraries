/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary notBusy
 * @description
 *
 * The called user is not busy (ECMA-192 §6.3.1, §6.6.2.2). The
 * Terminating PINX returns this on `callOfferRequest` in the
 * resulting ALERTING or CONNECT and stays in CO-Idle. The call
 * continues as a basic call. Local code 1009.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
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
