/* eslint-disable */
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";
import { interruptionIsImpending } from "../Call-Interruption-Notifications-asn1-97/interruptionIsImpending.oa.mjs";
import { interruptionTerminated } from "../Call-Interruption-Notifications-asn1-97/interruptionTerminated.oa.mjs";
import { interruptionForcedRelease } from "../Call-Interruption-Notifications-asn1-97/interruptionForcedRelease.oa.mjs";

/**
 * @summary Call_Interruption_Notifications
 * @description
 *
 * Notifications of module Call-Interruption-Notifications-asn1-97 (ECMA-264
 * §6.3.2, Table 2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Call-Interruption-Notifications NOTIFICATION ::= {
 *     interruptionIsImpending
 *     | interruptionTerminated
 *     | interruptionForcedRelease
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION[]}
 * 
 */
export
const Call_Interruption_Notifications: (NOTIFICATION)[] = [ interruptionIsImpending, interruptionTerminated, interruptionForcedRelease, ];

/* eslint-enable */
