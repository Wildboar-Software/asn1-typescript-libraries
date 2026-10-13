/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary noExplicitReservationExistsOrInvalidReservationIndicator
 * @description
 * 
 * No explicit reservation exists for this CEI, or the `ReservationIndicator` is
 * not the one stored for the reservation. Local error code 34. Returned by
 * reservation management and cancellation.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2.2 and §6.4.2.3; ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 6-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * noExplicitReservationExistsOrInvalidReservationIndicator ERROR ::= {
 *   CODE  local:34
 * }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const noExplicitReservationExistsOrInvalidReservationIndicator: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 34 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
