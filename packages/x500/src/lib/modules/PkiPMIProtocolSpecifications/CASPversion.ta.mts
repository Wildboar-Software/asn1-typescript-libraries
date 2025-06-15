/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_CASPversion */
export enum _enum_for_CASPversion {
    v1 = 1,
    v2 = 2,
    v3 = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CASPversion */

/* START_OF_SYMBOL_DEFINITION CASPversion */
/**
 * @summary CASPversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPversion  ::=  ENUMERATED { v1(1), v2(2), v3(3), ... }
 * ```@enum {number}
 */
export type CASPversion = _enum_for_CASPversion | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CASPversion */

/* START_OF_SYMBOL_DEFINITION CASPversion_v1 */
/**
 * @summary CASPversion_v1
 * @constant
 * @type {number}
 */
export const CASPversion_v1: CASPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASPversion_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary v1
 * @constant
 * @type {number}
 */
export const v1: CASPversion = CASPversion_v1; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION CASPversion_v2 */
/**
 * @summary CASPversion_v2
 * @constant
 * @type {number}
 */
export const CASPversion_v2: CASPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASPversion_v2 */

/* START_OF_SYMBOL_DEFINITION v2 */
/**
 * @summary v2
 * @constant
 * @type {number}
 */
export const v2: CASPversion = CASPversion_v2; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v2 */

/* START_OF_SYMBOL_DEFINITION CASPversion_v3 */
/**
 * @summary CASPversion_v3
 * @constant
 * @type {number}
 */
export const CASPversion_v3: CASPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASPversion_v3 */

/* START_OF_SYMBOL_DEFINITION v3 */
/**
 * @summary v3
 * @constant
 * @type {number}
 */
export const v3: CASPversion = CASPversion_v3; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION v3 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPversion */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPversion */

/* START_OF_SYMBOL_DEFINITION _decode_CASPversion */
export const _decode_CASPversion = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_CASPversion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPversion */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPversion */

/* START_OF_SYMBOL_DEFINITION _encode_CASPversion */
export const _encode_CASPversion = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_CASPversion */

/* eslint-enable */
