/* eslint-disable */
import { NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";
// export { NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";
import { remoteUserAlerting } from "../Call-Offer-Notifications-asn1-97/remoteUserAlerting.oa.mjs";
// export { remoteUserAlerting } from "../Call-Offer-Notifications-asn1-97/remoteUserAlerting.oa.mjs";


/**
 * @summary Call_Offer_Notifications
 * @description
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
