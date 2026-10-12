/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ReservationIndicator, _decode_ReservationIndicator, _encode_ReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/ReservationIndicator.ta.mjs";
import { noExplicitReservationExistsOrInvalidReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/noExplicitReservationExistsOrInvalidReservationIndicator.oa.mjs";
import { implicitReservationUsed } from "../Explicit-Network-Controlled-Channel-Reservation/implicitReservationUsed.oa.mjs";
import { notAvailable } from "../Explicit-Network-Controlled-Channel-Reservation/notAvailable.oa.mjs";
import { userNotSubscribed } from "../Explicit-Network-Controlled-Channel-Reservation/userNotSubscribed.oa.mjs";


/**
 * @summary explicitReservationManagement
 * @description
 * 
 * Use an explicit channel reservation while selecting a channel. Local
 * operation code 21. Send the invoke in a Facility information element in
 * SETUP, SETUP ACKNOWLEDGE, CALL PROCEEDING, ALERTING, CONNECT, CONNECT
 * ACKNOWLEDGE, RETRIEVE, or RETRIEVE ACKNOWLEDGE.
 *
 * The argument is the `ReservationIndicator` when the network requires one
 * (subscription, or the creation request asked for an indicator). The network
 * grants the reservation only when the required value is present. If this
 * invoke is omitted, the network uses an implicit reservation when one exists;
 * otherwise explicit reservations stay available. To keep an implicit
 * reservation from being used by that channel selection, include an indicator
 * in this invoke. Q.932 does not assign a specific indicator value to that
 * case.
 *
 * A return error does not by itself mean channel selection failed. It means the
 * reservation was not managed. On the return result the user discards the
 * indicator that was used.
 *
 * Errors: `noExplicitReservationExistsOrInvalidReservationIndicator`,
 * `notAvailable`, `userNotSubscribed`, and `implicitReservationUsed` ("function
 * not subscribed – implicit reservation used").
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2.2 and §6.4.2.6; ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 6-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * explicitReservationManagement OPERATION ::= {
 *   ARGUMENT  ReservationIndicator -- optional
 *   --         RESULT
 *   ERRORS
 *     {noExplicitReservationExistsOrInvalidReservationIndicator | notAvailable |
 *       userNotSubscribed | implicitReservationUsed}
 *   CODE      local:21
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReservationIndicator>}
 * @implements {OPERATION<ReservationIndicator>}
 */
export
const explicitReservationManagement: OPERATION<ReservationIndicator> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReservationIndicator,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReservationIndicator,
        "&ResultType": undefined,
    },
    "&Errors": [ noExplicitReservationExistsOrInvalidReservationIndicator, notAvailable, userNotSubscribed, implicitReservationUsed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 21 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
