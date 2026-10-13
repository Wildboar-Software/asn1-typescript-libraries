/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary userNotSubscribed
 * @description
 *
 * Q.932 §6.4.2 calls this condition "function not subscribed". Local error code
 * 0. The 1998 module imports `userNotSubscribed`; Amendment 1 Table 6-1 bis
 * imports the name `notSubscribed`.
 *
 * Imported by Explicit-Network-Controlled-Channel-Reservation from
 * ITU-T Q.950 General-Error-List. The user has not subscribed to this service.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userNotSubscribed ERROR ::= {CODE  local:0
 * }
 *
 * -- is an indication that the user has not subscribed to this service.
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const userNotSubscribed: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 0 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
