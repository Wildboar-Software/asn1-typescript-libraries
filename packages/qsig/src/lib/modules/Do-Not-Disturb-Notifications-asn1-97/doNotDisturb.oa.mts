/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary doNotDisturb
 * @description
 *
 * Notification that an incoming call was rejected because SS-DND is
 * active (ECMA-194 §6.5.1.1, §6.3.2). Coded in the Notification
 * indicator. Sent in PROGRESS with cause 21 "Call rejected" and
 * progress description 8 when an in-band tone or announcement is
 * applied; otherwise sent in DISCONNECT with cause 21. The argument
 * is NULL. The stage 1 information flow has no service elements
 * (ECMA-193 §8.2.1.1). The Terminating PINX stays in DND-tIdle.
 * Local CODE 2002.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * doNotDisturb NOTIFICATION ::= {
 *     ARGUMENT NULL
 *     CODE local: 2002
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<NULL>}
 * @implements {NOTIFICATION<NULL>}
 */
export
const doNotDisturb: NOTIFICATION<NULL> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": $._encodeNull,
    },
    "&notificationCode": { local: 2002 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
