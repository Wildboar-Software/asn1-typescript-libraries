/* eslint-disable */
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";
import { doNotDisturb } from "../Do-Not-Disturb-Notifications-asn1-97/doNotDisturb.oa.mjs";

/**
 * @summary Do_Not_Disturb_Notifications
 * @description
 *
 * Notifications of module `Do-Not-Disturb-Notifications-asn1-97`
 * (ECMA-194 §6.3.2, Table 2). The only member is `doNotDisturb`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
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
