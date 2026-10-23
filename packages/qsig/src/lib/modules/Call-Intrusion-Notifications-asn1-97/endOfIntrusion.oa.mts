/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary endOfIntrusion
 * @description
 *
 * Intrusion has stopped and the established call is restored
 * (ECMA-203 §6.6.2.4.1, §6.6.2.6.1). Sent to the unwanted user in
 * NOTIFY when wait on busy removes the calling user. Also sent on
 * the established call if the intruding call clears during
 * CI-Dest-Notify, CI-Dest-Notify-WOB, CI-Dest-Invoked, or
 * CI-Dest-Isolated. Notification code 2007. The argument is NULL.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * endOfIntrusion NOTIFICATION ::= {
 *     ARGUMENT NULL
 *     CODE local: 2007
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<NULL>}
 * @implements {NOTIFICATION<NULL>}
 */
export
const endOfIntrusion: NOTIFICATION<NULL> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": $._encodeNull,
    },
    "&notificationCode": { local: 2007 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
