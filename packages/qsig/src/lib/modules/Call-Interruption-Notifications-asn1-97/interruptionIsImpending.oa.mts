/* eslint-disable */
import {
    type NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary interruptionIsImpending
 * @description
 *
 * Notification that an established call is about to be interrupted (ECMA-264
 * §6.8.3.1). Optional. Sent in NOTIFY on the established call's call
 * references. The Interrupting PINX then runs timer T1 (1-10 s, §6.15.1)
 * in state CPI-Impending and interrupts when T1 expires. Argument is NULL.
 * Local CODE 2008. If this notification is not sent, interruption is
 * immediate.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * interruptionIsImpending NOTIFICATION ::= {
 *     ARGUMENT NULL
 *     CODE local: 2008
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<NULL>}
 * @implements {NOTIFICATION<NULL>}
 */
export
const interruptionIsImpending: NOTIFICATION<NULL> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": $._encodeNull,
    },
    "&notificationCode": { local: 2008 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
