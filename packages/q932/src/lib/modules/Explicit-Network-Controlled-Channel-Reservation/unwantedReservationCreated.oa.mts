/* eslint-disable */
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary unwantedReservationCreated
 * @description
 * 
 * The network created a reservation the user did not want. Local error code 35.
 * Q.932 lists this error for explicit reservation creation and does not add
 * conditions beyond the error name.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2.1; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 6-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unwantedReservationCreated ERROR ::= {CODE  local:35
 * }
 * ```
 * 
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export
const unwantedReservationCreated: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": undefined,
    },
    encoderFor: {
        "&ParameterType": undefined,
    },
    "&errorCode": { local: 35 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
