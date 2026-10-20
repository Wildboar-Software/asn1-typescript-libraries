/* eslint-disable */
import { NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";
// export { NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";
import { doNotDisturb } from "../Do-Not-Disturb-Notifications-asn1-97/doNotDisturb.oa.mjs";
// export { doNotDisturb } from "../Do-Not-Disturb-Notifications-asn1-97/doNotDisturb.oa.mjs";


/**
 * @summary Do_Not_Disturb_Notifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Do-Not-Disturb-Notifications NOTIFICATION ::= {doNotDisturb}
 * ```
 * 
 * @constant
 * @type {NOTIFICATION[]}
 * 
 */
export
const Do_Not_Disturb_Notifications: (NOTIFICATION)[] = [ doNotDisturb, ];

/* eslint-enable */
