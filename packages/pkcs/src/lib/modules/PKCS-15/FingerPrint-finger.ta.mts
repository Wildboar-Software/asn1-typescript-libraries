/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary FingerPrint_finger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-finger ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_FingerPrint_finger {
    thumb = 0,
    pointerFinger = 1,
    middleFinger = 2,
    ringFinger = 3,
    littleFinger = 4,
}


/**
 * @summary FingerPrint_finger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-finger ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type FingerPrint_finger = _enum_for_FingerPrint_finger;


/**
 * @summary FingerPrint_finger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-finger ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const FingerPrint_finger = _enum_for_FingerPrint_finger;


/**
 * @summary FingerPrint_finger_thumb
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_thumb: FingerPrint_finger =
    FingerPrint_finger.thumb; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary thumb
 * @constant
 * @type {number}
 */
export const thumb: FingerPrint_finger =
    FingerPrint_finger.thumb; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FingerPrint_finger_pointerFinger
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_pointerFinger: FingerPrint_finger =
    FingerPrint_finger.pointerFinger; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary pointerFinger
 * @constant
 * @type {number}
 */
export const pointerFinger: FingerPrint_finger =
    FingerPrint_finger.pointerFinger; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FingerPrint_finger_middleFinger
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_middleFinger: FingerPrint_finger =
    FingerPrint_finger.middleFinger; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary middleFinger
 * @constant
 * @type {number}
 */
export const middleFinger: FingerPrint_finger =
    FingerPrint_finger.middleFinger; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FingerPrint_finger_ringFinger
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_ringFinger: FingerPrint_finger =
    FingerPrint_finger.ringFinger; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ringFinger
 * @constant
 * @type {number}
 */
export const ringFinger: FingerPrint_finger =
    FingerPrint_finger.ringFinger; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FingerPrint_finger_littleFinger
 * @constant
 * @type {number}
 */
export const FingerPrint_finger_littleFinger: FingerPrint_finger =
    FingerPrint_finger.littleFinger; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary littleFinger
 * @constant
 * @type {number}
 */
export const littleFinger: FingerPrint_finger =
    FingerPrint_finger.littleFinger; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_FingerPrint_finger = $._decodeEnumerated;




export const _encode_FingerPrint_finger = $._encodeEnumerated;


/* eslint-enable */
