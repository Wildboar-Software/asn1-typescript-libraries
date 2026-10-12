/**
 * @description
 *
 * ASN.1 extension of the Notification indicator information element.
 * Used when octet 3 is the discriminator for an ASN.1 component.
 * Notifications are one-way, do not change call state, and may be
 * discarded. ITU-T Rec. Q.932 (05/1998) §8.2.8 and §9; Amendment 1
 * (06/2000) Table 8-14 bis.
 *
 * @see https://www.itu.int/rec/T-REC-Q.932
 */
export * from "./Code.ta.mjs";
export * from "./NOTIFICATION.oca.mjs";
export * from "./NotificationDataStructure.ta.mjs";
