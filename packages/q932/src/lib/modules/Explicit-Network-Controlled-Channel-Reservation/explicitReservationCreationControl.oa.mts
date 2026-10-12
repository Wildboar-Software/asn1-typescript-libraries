/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_explicitReservationCreationControl_ArgumentType, _encode_explicitReservationCreationControl_ArgumentType, explicitReservationCreationControl_ArgumentType } from "../Explicit-Network-Controlled-Channel-Reservation/explicitReservationCreationControl-ArgumentType.ta.mjs";
import { ReservationIndicator, _decode_ReservationIndicator, _encode_ReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/ReservationIndicator.ta.mjs";
import { maximumNumberOfReservationsReached } from "../Explicit-Network-Controlled-Channel-Reservation/maximumNumberOfReservationsReached.oa.mjs";
import { unwantedReservationCreated } from "../Explicit-Network-Controlled-Channel-Reservation/unwantedReservationCreated.oa.mjs";
import { notAvailable } from "../Explicit-Network-Controlled-Channel-Reservation/notAvailable.oa.mjs";
import { userNotSubscribed } from "../Explicit-Network-Controlled-Channel-Reservation/userNotSubscribed.oa.mjs";


/**
 * @summary explicitReservationCreationControl
 * @description
 * 
 * Create an explicit network-side channel reservation for the data-link
 * connection endpoint (CEI). Local operation code 20. The user sends the invoke
 * in a Facility information element in a call-related transport message.
 *
 * `noReservationRequired` asks for no reservation.
 * `reservationRequiredWithReservationIndicator` asks the network to allocate a
 * reservation and return a `ReservationIndicator`.
 * `reservationRequiredWithoutReservationIndicator` asks for a reservation with
 * no indicator. If the invoke includes no argument, the network assumes
 * reservation required without an indicator.
 *
 * When the invoke is carried in RELEASE, RELEASE COMPLETE, HOLD, or HOLD
 * ACKNOWLEDGE, a channel that those messages release is not given to another
 * call if the reservation needs it.
 *
 * Errors: `maximumNumberOfReservationsReached` (the maximum, default one,
 * already exists for this CEI), `notAvailable`, `userNotSubscribed`, and
 * `unwantedReservationCreated`. On success the user retains the indicator when
 * one is returned.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2.1; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 6-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * explicitReservationCreationControl OPERATION ::= {
 *   ARGUMENT
 *     SEQUENCE {controlOption
 *                 ENUMERATED {noReservationRequired(0),
 *                             reservationRequiredWithReservationIndicator(1),
 *                             reservationRequiredWithoutReservationIndicator(2)}
 *   }
 *   RESULT    ReservationIndicator -- optional
 *   ERRORS
 *     {maximumNumberOfReservationsReached | notAvailable | userNotSubscribed |
 *       unwantedReservationCreated}
 *   CODE      local:20
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<explicitReservationCreationControl_ArgumentType, ReservationIndicator>}
 * @implements {OPERATION<explicitReservationCreationControl_ArgumentType, ReservationIndicator>}
 */
export
const explicitReservationCreationControl: OPERATION<explicitReservationCreationControl_ArgumentType, ReservationIndicator> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_explicitReservationCreationControl_ArgumentType,
        "&ResultType": _decode_ReservationIndicator,
    },
    encoderFor: {
        "&ArgumentType": _encode_explicitReservationCreationControl_ArgumentType,
        "&ResultType": _encode_ReservationIndicator,
    },
    "&Errors": [ maximumNumberOfReservationsReached, notAvailable, userNotSubscribed, unwantedReservationCreated, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 20 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
