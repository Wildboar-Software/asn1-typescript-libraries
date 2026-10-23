/* eslint-disable */
import { NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";
import { remoteUserAlerting } from "../Call-Offer-Notifications-asn1-97/remoteUserAlerting.oa.mjs";

/**
 * @summary Call_Offer_Notifications
 * @description
 *
 * Notifications of Call-Offer-Notifications-asn1-97 (ECMA-192
 * §6.3.2). The only member is `remoteUserAlerting`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Offer-Notifications NOTIFICATION ::= {remoteUserAlerting}
 * ```
 * 
 * @constant
 * @type {NOTIFICATION[]}
 * 
 */
export
const Call_Offer_Notifications: (NOTIFICATION)[] = [ remoteUserAlerting, ];

/* eslint-enable */
