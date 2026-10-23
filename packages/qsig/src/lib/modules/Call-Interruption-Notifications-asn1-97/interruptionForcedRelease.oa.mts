/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary interruptionForcedRelease
 * @description
 *
 * The established call is being forced released so the priority call can use
 * the B-channel (ECMA-264 §6.8.3.1, §4.11). Carried in DISCONNECT on the
 * established call's call references, with cause 31 "Normal, unspecified".
 * Argument is NULL. Local CODE 2010.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * interruptionForcedRelease NOTIFICATION ::= {
 *     ARGUMENT NULL
 *     CODE local: 2010
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<NULL>}
 * @implements {NOTIFICATION<NULL>}
 */
export
const interruptionForcedRelease: NOTIFICATION<NULL> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": $._encodeNull,
    },
    "&notificationCode": { local: 2010 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
