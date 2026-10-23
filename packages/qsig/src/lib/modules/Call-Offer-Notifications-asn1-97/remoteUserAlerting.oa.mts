/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary remoteUserAlerting
 * @description
 *
 * The called user, who was busy, is now being alerted (ECMA-192
 * §6.6.2.1). In CO-Dest-Invoked, if alerting starts and an ALERTING
 * message was already sent, the Terminating PINX sends this
 * notification in NOTIFY and enters CO-Idle. If ALERTING was not
 * sent earlier, it sends ALERTING instead. Notification code 2000.
 * The argument is NULL.
 *
 * On transfer by rerouteing, if "call is a waiting call" was sent,
 * this notification follows when user C of SS-CT becomes not busy
 * (§6.9.5.2.2). On transfer by join, this notification is not sent
 * in that case if "call is a waiting call" was not sent
 * (§6.9.5.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-192/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteUserAlerting NOTIFICATION ::= {
 *     ARGUMENT NULL
 *     CODE local: 2000
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<NULL>}
 * @implements {NOTIFICATION<NULL>}
 */
export
const remoteUserAlerting: NOTIFICATION<NULL> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": $._encodeNull,
    },
    "&notificationCode": { local: 2000 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
