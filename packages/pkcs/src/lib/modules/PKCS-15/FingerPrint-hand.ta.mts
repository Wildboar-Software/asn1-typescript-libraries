/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary FingerPrint_hand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_FingerPrint_hand {
    left = 0,
    right = 1,
}


/**
 * @summary FingerPrint_hand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type FingerPrint_hand = _enum_for_FingerPrint_hand;


/**
 * @summary FingerPrint_hand
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FingerPrint-hand ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const FingerPrint_hand = _enum_for_FingerPrint_hand;


/**
 * @summary FingerPrint_hand_left
 * @constant
 * @type {number}
 */
export const FingerPrint_hand_left: FingerPrint_hand =
    FingerPrint_hand.left; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary left
 * @constant
 * @type {number}
 */
export const left: FingerPrint_hand =
    FingerPrint_hand.left; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary FingerPrint_hand_right
 * @constant
 * @type {number}
 */
export const FingerPrint_hand_right: FingerPrint_hand =
    FingerPrint_hand.right; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary right
 * @constant
 * @type {number}
 */
export const right: FingerPrint_hand =
    FingerPrint_hand.right; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_FingerPrint_hand = $._decodeEnumerated;




export const _encode_FingerPrint_hand = $._encodeEnumerated;


/* eslint-enable */
