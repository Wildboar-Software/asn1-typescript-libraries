/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary maximumNumberOfReservationsReached
 * @description
 * 
 * The maximum number of explicit reservations for this CEI already exists. The
 * default maximum is one. Local error code 33.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2.1; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 6-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maximumNumberOfReservationsReached ERROR ::= {CODE  local:33
 * }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const maximumNumberOfReservationsReached: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 33 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
