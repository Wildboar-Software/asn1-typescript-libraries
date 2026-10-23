/**
 * @module
 * @description
 *
 * Information object class for notifications in the Notification indicator, and
 * the notification `pss1IeNotification` (ECMA-165 Annex B §B.2, Table B.2,
 * §11.3.4). X.680 edition, `notification-class-asn1-97(21)`. Other
 * notifications are defined by the supplementary service that sends them.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export * from "./Code.ta.mjs";
export * from "./NOTIFICATION.oca.mjs";
export * from "./pss1IeNotification.oa.mjs";
