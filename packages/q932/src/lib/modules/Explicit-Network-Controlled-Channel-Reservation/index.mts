/**
 * @description
 *
 * Operations with which a user creates, uses, and cancels an explicit
 * network-side B-channel reservation for one data-link connection
 * endpoint. Local operation codes 20, 21, and 22. ITU-T Rec. Q.932
 * (05/1998) §6.4.2; Amendment 1 (06/2000) Table 6-1 bis.
 *
 * `notAvailable` and `userNotSubscribed` are the Q.950 general errors
 * imported by this module (local values 3 and 0).
 *
 * @see https://www.itu.int/rec/T-REC-Q.932
 */
export * from "./ReservationIndicator.ta.mjs";
export * from "./explicitReservationCancel.oa.mjs";
export * from "./explicitReservationCreationControl-ArgumentType-controlOption.ta.mjs";
export * from "./explicitReservationCreationControl-ArgumentType.ta.mjs";
export * from "./explicitReservationCreationControl.oa.mjs";
export * from "./explicitReservationManagement.oa.mjs";
export * from "./implicitReservationUsed.oa.mjs";
export * from "./maximumNumberOfReservationsReached.oa.mjs";
export * from "./noExplicitReservationExistsOrInvalidReservationIndicator.oa.mjs";
export * from "./notAvailable.oa.mjs";
export * from "./unwantedReservationCreated.oa.mjs";
export * from "./userNotSubscribed.oa.mjs";
