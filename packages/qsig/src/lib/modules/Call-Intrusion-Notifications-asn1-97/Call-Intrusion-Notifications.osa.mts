/* eslint-disable */
import { NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";
import { remoteUserAlerting } from "../Call-Intrusion-Notifications-asn1-97/remoteUserAlerting.oa.mjs";
import { intrusionIsImpending } from "../Call-Intrusion-Notifications-asn1-97/intrusionIsImpending.oa.mjs";
import { intrusionIsEffective } from "../Call-Intrusion-Notifications-asn1-97/intrusionIsEffective.oa.mjs";
import { isolationThroughIntrusion } from "../Call-Intrusion-Notifications-asn1-97/isolationThroughIntrusion.oa.mjs";
import { forcedReleaseAfterIntrusion } from "../Call-Intrusion-Notifications-asn1-97/forcedReleaseAfterIntrusion.oa.mjs";
import { endOfIntrusion } from "../Call-Intrusion-Notifications-asn1-97/endOfIntrusion.oa.mjs";

/**
 * @summary Call_Intrusion_Notifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Intrusion-Notifications NOTIFICATION ::= {
 *     remoteUserAlerting
 *     | intrusionIsImpending
 *     | intrusionIsEffective
 *     | isolationThroughIntrusion
 *     | forcedReleaseAfterIntrusion
 *     | endOfIntrusion
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION[]}
 * 
 */
export
const Call_Intrusion_Notifications: (NOTIFICATION)[] = [ remoteUserAlerting, intrusionIsImpending, intrusionIsEffective, isolationThroughIntrusion, forcedReleaseAfterIntrusion, endOfIntrusion, ];

/* eslint-enable */
