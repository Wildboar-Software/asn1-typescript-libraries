/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ReservationIndicator, _decode_ReservationIndicator, _encode_ReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/ReservationIndicator.ta.mjs";
// export { ReservationIndicator, _decode_ReservationIndicator, _encode_ReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/ReservationIndicator.ta.mjs";
import { noExplicitReservationExistsOrInvalidReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/noExplicitReservationExistsOrInvalidReservationIndicator.oa.mjs";
// export { noExplicitReservationExistsOrInvalidReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/noExplicitReservationExistsOrInvalidReservationIndicator.oa.mjs";
import { implicitReservationUsed } from "../Explicit-Network-Controlled-Channel-Reservation/implicitReservationUsed.oa.mjs";
// export { implicitReservationUsed } from "../Explicit-Network-Controlled-Channel-Reservation/implicitReservationUsed.oa.mjs";
import { notAvailable } from "../Explicit-Network-Controlled-Channel-Reservation/notAvailable.oa.mjs";
import { userNotSubscribed } from "../Explicit-Network-Controlled-Channel-Reservation/userNotSubscribed.oa.mjs";


/**
 * @summary explicitReservationManagement
 * @description
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
