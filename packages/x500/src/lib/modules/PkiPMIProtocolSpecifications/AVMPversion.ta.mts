/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_AVMPversion */
export enum _enum_for_AVMPversion {
    v1 = 1,
    v2 = 2,
    v3 = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AVMPversion */

/* START_OF_SYMBOL_DEFINITION AVMPversion */
/**
 * @summary AVMPversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPversion  ::=  ENUMERATED { v1(1), v2(2), v3(3), ... }
 * ```@enum {number}
 */
export type AVMPversion = _enum_for_AVMPversion | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AVMPversion */

/* START_OF_SYMBOL_DEFINITION AVMPversion_v1 */
/**
 * @summary AVMPversion_v1
 * @constant
 * @type {number}
 */
export const AVMPversion_v1: AVMPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMPversion_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary v1
 * @constant
 * @type {number}
 */
export const v1: AVMPversion = AVMPversion_v1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION AVMPversion_v2 */
/**
 * @summary AVMPversion_v2
 * @constant
 * @type {number}
 */
export const AVMPversion_v2: AVMPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMPversion_v2 */

/* START_OF_SYMBOL_DEFINITION v2 */
/**
 * @summary v2
 * @constant
 * @type {number}
 */
export const v2: AVMPversion = AVMPversion_v2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v2 */

/* START_OF_SYMBOL_DEFINITION AVMPversion_v3 */
/**
 * @summary AVMPversion_v3
 * @constant
 * @type {number}
 */
export const AVMPversion_v3: AVMPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMPversion_v3 */

/* START_OF_SYMBOL_DEFINITION v3 */
/**
 * @summary v3
 * @constant
 * @type {number}
 */
export const v3: AVMPversion = AVMPversion_v3; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v3 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMPversion */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMPversion */

/* START_OF_SYMBOL_DEFINITION _decode_AVMPversion */
export const _decode_AVMPversion = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AVMPversion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMPversion */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMPversion */

/* START_OF_SYMBOL_DEFINITION _encode_AVMPversion */
export const _encode_AVMPversion = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AVMPversion */

/* eslint-enable */
