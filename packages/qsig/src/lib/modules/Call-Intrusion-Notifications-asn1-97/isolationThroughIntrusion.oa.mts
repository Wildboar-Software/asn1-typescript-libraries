/* eslint-disable */
import {
    type NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary isolationThroughIntrusion
 * @description
 *
 * The unwanted user has been disconnected from the called user
 * (ECMA-203 §6.6.2.1.1, §6.6.2.2.1). The Terminating PINX sends this
 * in NOTIFY on the established call, both when intrusion itself
 * isolates that user and when `callIntrusionIsolate` does so later.
 * Notification code 2005. The argument is NULL.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * isolationThroughIntrusion NOTIFICATION ::= {
 *     ARGUMENT NULL
 *     CODE local: 2005
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<NULL>}
 * @implements {NOTIFICATION<NULL>}
 */
export
const isolationThroughIntrusion: NOTIFICATION<NULL> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": $._encodeNull,
    },
    "&notificationCode": { local: 2005 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
