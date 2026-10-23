/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";

/**
 * @summary failedDueToInterworking
 * @description
 *
 * Path reservation cannot be completed across the interworking
 * point (ECMA-186 §6.6.2). An Outgoing Gateway PINX returns this in
 * DISCONNECT for `ccPathReserve` toward a public ISDN. The
 * Originating PINX may then try the CC call without path
 * reservation, retry another route, or cancel the request
 * (§6.5.2.2.5). Local code 1014. That Originating PINX behaviour
 * also applies to an unrecognised-operation reject of
 * `ccPathReserve`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * failedDueToInterworking ERROR ::= { CODE local: 1014 }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const failedDueToInterworking: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 1014 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
