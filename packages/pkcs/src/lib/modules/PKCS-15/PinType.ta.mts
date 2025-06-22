/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


export enum _enum_for_PinType {
    bcd = 0,
    ascii_numeric = 1,
    utf8 = 2,
    half_nibble_bcd = 3,
    iso9564_1 = 3,
}


/**
 * @summary PinType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PinType  ::=  ENUMERATED {bcd, ascii-numeric, utf8, ..., half-nibble-bcd, iso9564-1}
 * ```
 *
 * @enum {number}
 */
export type PinType = _enum_for_PinType | ENUMERATED;


/**
 * @summary PinType_bcd
 * @constant
 * @type {number}
 */
export const PinType_bcd: PinType = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bcd
 * @constant
 * @type {number}
 */
export const bcd: PinType = PinType_bcd; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PinType_ascii_numeric
 * @constant
 * @type {number}
 */
export const PinType_ascii_numeric: PinType = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary ascii_numeric
 * @constant
 * @type {number}
 */
export const ascii_numeric: PinType = PinType_ascii_numeric; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PinType_utf8
 * @constant
 * @type {number}
 */
export const PinType_utf8: PinType = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary utf8
 * @constant
 * @type {number}
 */
export const utf8: PinType = PinType_utf8; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PinType_half_nibble_bcd
 * @constant
 * @type {number}
 */
export const PinType_half_nibble_bcd: PinType = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary half_nibble_bcd
 * @constant
 * @type {number}
 */
export const half_nibble_bcd: PinType = PinType_half_nibble_bcd; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary PinType_iso9564_1
 * @constant
 * @type {number}
 */
export const PinType_iso9564_1: PinType = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary iso9564_1
 * @constant
 * @type {number}
 */
export const iso9564_1: PinType = PinType_iso9564_1; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_PinType = $._decodeEnumerated;




export const _encode_PinType = $._encodeEnumerated;


/* eslint-enable */
