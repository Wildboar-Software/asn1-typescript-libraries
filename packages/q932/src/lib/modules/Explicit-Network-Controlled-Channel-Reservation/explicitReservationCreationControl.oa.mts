/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { _decode_explicitReservationCreationControl_ArgumentType, _encode_explicitReservationCreationControl_ArgumentType, explicitReservationCreationControl_ArgumentType } from "../Explicit-Network-Controlled-Channel-Reservation/explicitReservationCreationControl-ArgumentType.ta.mjs";
// export { explicitReservationCreationControl_ArgumentType, _decode_explicitReservationCreationControl_ArgumentType, _encode_explicitReservationCreationControl_ArgumentType } from "../Explicit-Network-Controlled-Channel-Reservation/explicitReservationCreationControl-ArgumentType.ta.mjs";
import { ReservationIndicator, _decode_ReservationIndicator, _encode_ReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/ReservationIndicator.ta.mjs";
// export { ReservationIndicator, _decode_ReservationIndicator, _encode_ReservationIndicator } from "../Explicit-Network-Controlled-Channel-Reservation/ReservationIndicator.ta.mjs";
import { maximumNumberOfReservationsReached } from "../Explicit-Network-Controlled-Channel-Reservation/maximumNumberOfReservationsReached.oa.mjs";
// export { maximumNumberOfReservationsReached } from "../Explicit-Network-Controlled-Channel-Reservation/maximumNumberOfReservationsReached.oa.mjs";
import { unwantedReservationCreated } from "../Explicit-Network-Controlled-Channel-Reservation/unwantedReservationCreated.oa.mjs";
// export { unwantedReservationCreated } from "../Explicit-Network-Controlled-Channel-Reservation/unwantedReservationCreated.oa.mjs";
import { notAvailable } from "../Explicit-Network-Controlled-Channel-Reservation/notAvailable.oa.mjs";
import { userNotSubscribed } from "../Explicit-Network-Controlled-Channel-Reservation/userNotSubscribed.oa.mjs";


/**
 * @summary explicitReservationCreationControl
 * @description
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
