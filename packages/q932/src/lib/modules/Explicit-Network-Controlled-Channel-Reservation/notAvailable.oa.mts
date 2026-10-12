/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary notAvailable
 * @description
 *
 * Q.932 §6.4.2 calls this condition "function not available". Local error code
 * 3, imported from ITU-T Q.950 general-errors-list.
 *
 * Imported by Explicit-Network-Controlled-Channel-Reservation from
 * ITU-T Q.950 General-Error-List. The user has subscribed to this service,
 * but the requested service is not available combined with the basic service
 * or the other services (for example, another operation).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notAvailable ERROR ::= {CODE  local:3
 * }
 *
 * -- is an indication that the user has subscribed to this service but the requested service is not available combined
 * -- with the basic service or the other services (e.g. operation).
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const notAvailable: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 3 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
