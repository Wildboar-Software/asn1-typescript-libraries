/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary intrusionIsImpending
 * @description
 *
 * Intrusion has been accepted and is about to be executed (ECMA-203
 * §6.6.2.1.1, §6.6.2.5.1). The Terminating PINX sends this in NOTIFY
 * on the established call, and may also send it on the intruding
 * call, then starts timer T6. Intrusion begins when T6 expires. T6
 * is not higher than 10 s (§6.10.6). Notification code 2003. The
 * argument is NULL. The notification may be omitted, in which case
 * intrusion is executed immediately.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * intrusionIsImpending NOTIFICATION ::= {
 *     ARGUMENT NULL
 *     CODE local: 2003
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<NULL>}
 * @implements {NOTIFICATION<NULL>}
 */
export
const intrusionIsImpending: NOTIFICATION<NULL> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": $._encodeNull,
    },
    "&notificationCode": { local: 2003 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
