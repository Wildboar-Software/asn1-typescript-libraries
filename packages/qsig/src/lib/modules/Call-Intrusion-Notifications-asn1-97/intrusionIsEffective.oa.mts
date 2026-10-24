/* eslint-disable */
import {
    type NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary intrusionIsEffective
 * @description
 *
 * A conference of the calling user, the called user, and the
 * unwanted user has been formed (ECMA-203 §6.6.2.1.1). The
 * Terminating PINX sends this in NOTIFY on the established call.
 * On reinvocation during wait on busy, sending it is optional
 * (§6.6.2.5.1). Notification code 2004. The argument is NULL. The
 * intruding call carries `callIntrusionRequest` result
 * `unwantedUserIntruded`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * intrusionIsEffective NOTIFICATION ::= {
 *     ARGUMENT NULL
 *     CODE local: 2004
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<NULL>}
 * @implements {NOTIFICATION<NULL>}
 */
export
const intrusionIsEffective: NOTIFICATION<NULL> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": $._encodeNull,
    },
    "&notificationCode": { local: 2004 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
