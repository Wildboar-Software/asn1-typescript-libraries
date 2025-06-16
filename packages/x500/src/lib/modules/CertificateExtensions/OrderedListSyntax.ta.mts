/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_OrderedListSyntax {
    ascSerialNum = 0,
    ascRevDate = 1,
}

/**
 * @summary OrderedListSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrderedListSyntax  ::=  ENUMERATED {
 *   ascSerialNum (0),
 *   ascRevDate   (1),
 *   ...}
 * ```
 * 
 * @enum {number}
 */
export type OrderedListSyntax = _enum_for_OrderedListSyntax | ENUMERATED;

/**
 * @summary OrderedListSyntax_ascSerialNum
 * @constant
 * @type {number}
 */
export const OrderedListSyntax_ascSerialNum: OrderedListSyntax = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ascSerialNum
 * @constant
 * @type {number}
 */
export const ascSerialNum: OrderedListSyntax = OrderedListSyntax_ascSerialNum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OrderedListSyntax_ascRevDate
 * @constant
 * @type {number}
 */
export const OrderedListSyntax_ascRevDate: OrderedListSyntax = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ascRevDate
 * @constant
 * @type {number}
 */
export const ascRevDate: OrderedListSyntax = OrderedListSyntax_ascRevDate; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_OrderedListSyntax = $._decodeEnumerated;


export const _encode_OrderedListSyntax = $._encodeEnumerated;


/* eslint-enable */
