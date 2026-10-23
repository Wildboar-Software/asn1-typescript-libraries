/* eslint-disable */
import { NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary NotificationSet
 * @description
 *
 * Open set of notifications that may appear in `NotificationDataStructure`
 * (ECMA-165 §11.3.4 Table 37). The module writes `{...}` and lists none.
 * Supplementary-service specifications add members with the NOTIFICATION class.
 * `pss1IeNotification` is defined in Notification-class-asn1-97 and is not
 * placed in this empty set.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationSet NOTIFICATION ::= {...}
 * ```
 * 
 * @constant
 * @type {NOTIFICATION[]}
 * 
 */
export
const NotificationSet: (NOTIFICATION)[] = [];

/* eslint-enable */
