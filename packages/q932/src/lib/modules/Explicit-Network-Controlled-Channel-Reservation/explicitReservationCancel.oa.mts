/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type ReservationIndicator, _decode_ReservationIndicator, _encode_ReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/ReservationIndicator.ta.mjs";
import { noExplicitReservationExistsOrInvalidReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/noExplicitReservationExistsOrInvalidReservationIndicator.oa.mjs";
import { notAvailable } from "../Explicit-Network-Controlled-Channel-Reservation/notAvailable.oa.mjs";
import { userNotSubscribed } from "../Explicit-Network-Controlled-Channel-Reservation/userNotSubscribed.oa.mjs";


/**
 * @summary explicitReservationCancel
 * @description
 * 
 * Cancel one explicit channel reservation. Local operation code 22. Include the
 * `ReservationIndicator` when the network requires it. Each invoke cancels a
 * single reservation; several reservations need several invokes. On the return
 * result the user discards the indicator that was used.
 *
 * The network also cancels every reservation, with no reservation signalling,
 * on RELEASE COMPLETE for the last call on that CEI, on RESTART ACKNOWLEDGE
 * when the RESTART specified "single interface" or "all interfaces", and on
 * DL-RELEASE. The user then discards every stored indicator.
 *
 * Errors: `noExplicitReservationExistsOrInvalidReservationIndicator`,
 * `notAvailable`, and `userNotSubscribed`.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.4.2.3; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table 6-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * explicitReservationCancel OPERATION ::= {
 *   ARGUMENT  ReservationIndicator -- optional
 *   --        RESULT
 *   ERRORS
 *     {noExplicitReservationExistsOrInvalidReservationIndicator | notAvailable |
 *       userNotSubscribed}
 *   CODE      local:22
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReservationIndicator>}
 * @implements {OPERATION<ReservationIndicator>}
 */
export
const explicitReservationCancel: OPERATION<ReservationIndicator> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReservationIndicator,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReservationIndicator,
        "&ResultType": undefined,
    },
    "&Errors": [ noExplicitReservationExistsOrInvalidReservationIndicator, notAvailable, userNotSubscribed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 22 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
