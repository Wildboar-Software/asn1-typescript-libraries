/* eslint-disable */
import {
    type NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary remoteUserAlerting
 * @description
 *
 * During wait on busy, the called user is no longer busy and
 * alerting has started (ECMA-203 §6.6.2.6.1). The Terminating PINX
 * sends this in NOTIFY and remains in CI-Dest-WOB. Notification
 * code 2000. The argument is NULL. During CI-GetCIPL-WOB or
 * CI-Dest-Notify-WOB the same notification is sent in FACILITY
 * together with a `callIntrusionRequest` error of `notBusy`
 * (§6.6.2.6.2).
 *
 * After call transfer, if "call is a waiting call" was not sent,
 * this notification is not sent when user C of SS-CT becomes free
 * (§6.9.5.1.2, §6.9.5.1.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
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
