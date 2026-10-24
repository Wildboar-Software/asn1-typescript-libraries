/* eslint-disable */
import {
    type NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NOTIFICATION } from "../Notification-class-asn1-97/NOTIFICATION.oca.mjs";

/**
 * @summary forcedReleaseAfterIntrusion
 * @description
 *
 * The established call is being cleared because of forced release
 * (ECMA-203 §6.6.2.3.1). The Terminating PINX sends this in the
 * DISCONNECT toward the Unwanted User PINX. Notification code 2006.
 * The argument is NULL.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forcedReleaseAfterIntrusion NOTIFICATION ::= {
 *     ARGUMENT NULL
 *     CODE local: 2006
 * }
 * ```
 * 
 * @constant
 * @type {NOTIFICATION<NULL>}
 * @implements {NOTIFICATION<NULL>}
 */
export
const forcedReleaseAfterIntrusion: NOTIFICATION<NULL> = {
    class: "NOTIFICATION",
    decoderFor: {
        "&ArgumentType": $._decodeNull,
    },
    encoderFor: {
        "&ArgumentType": $._encodeNull,
    },
    "&notificationCode": { local: 2006 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
