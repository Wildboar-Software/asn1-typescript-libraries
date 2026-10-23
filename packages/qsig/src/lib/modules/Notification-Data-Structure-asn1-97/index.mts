/**
 * @module
 * @description
 *
 * ASN.1 notification carried in octet 4 of the Notification indicator when
 * octet 3 is a discriminator for a notification extension (ECMA-165 §11.3.4
 * Table 37). X.680 edition, `notification-data-structure-asn1-97(18)`. A
 * notification is delivered toward terminals, does not change state at the Q
 * reference point, needs no response, and may be discarded if it is not
 * recognised (§4.27, §7.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export * from "./NotificationDataStructure.ta.mjs";
export * from "./NotificationSet.osa.mjs";
