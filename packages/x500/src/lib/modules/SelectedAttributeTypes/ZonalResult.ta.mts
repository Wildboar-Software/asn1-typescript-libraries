/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION _enum_for_ZonalResult */
export enum _enum_for_ZonalResult {
    cannot_select_mapping = 0,
    zero_mappings = 2,
    multiple_mappings = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ZonalResult */

/* START_OF_SYMBOL_DEFINITION ZonalResult */
/**
 * @summary ZonalResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZonalResult  ::=  ENUMERATED {
 *   cannot-select-mapping (0),
 *   zero-mappings         (2),
 *   multiple-mappings     (3),
 *    ... }
 * ```@enum {number}
 */
export type ZonalResult = _enum_for_ZonalResult | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ZonalResult */

/* START_OF_SYMBOL_DEFINITION ZonalResult_cannot_select_mapping */
/**
 * @summary ZonalResult_cannot_select_mapping
 * @constant
 * @type {number}
 */
export const ZonalResult_cannot_select_mapping: ZonalResult = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ZonalResult_cannot_select_mapping */

/* START_OF_SYMBOL_DEFINITION cannot_select_mapping */
/**
 * @summary cannot_select_mapping
 * @constant
 * @type {number}
 */
export const cannot_select_mapping: ZonalResult = ZonalResult_cannot_select_mapping; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cannot_select_mapping */

/* START_OF_SYMBOL_DEFINITION ZonalResult_zero_mappings */
/**
 * @summary ZonalResult_zero_mappings
 * @constant
 * @type {number}
 */
export const ZonalResult_zero_mappings: ZonalResult = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ZonalResult_zero_mappings */

/* START_OF_SYMBOL_DEFINITION zero_mappings */
/**
 * @summary zero_mappings
 * @constant
 * @type {number}
 */
export const zero_mappings: ZonalResult = ZonalResult_zero_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION zero_mappings */

/* START_OF_SYMBOL_DEFINITION ZonalResult_multiple_mappings */
/**
 * @summary ZonalResult_multiple_mappings
 * @constant
 * @type {number}
 */
export const ZonalResult_multiple_mappings: ZonalResult = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ZonalResult_multiple_mappings */

/* START_OF_SYMBOL_DEFINITION multiple_mappings */
/**
 * @summary multiple_mappings
 * @constant
 * @type {number}
 */
export const multiple_mappings: ZonalResult = ZonalResult_multiple_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION multiple_mappings */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ZonalResult */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ZonalResult */

/* START_OF_SYMBOL_DEFINITION _decode_ZonalResult */
export const _decode_ZonalResult = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ZonalResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ZonalResult */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ZonalResult */

/* START_OF_SYMBOL_DEFINITION _encode_ZonalResult */
export const _encode_ZonalResult = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ZonalResult */

/* eslint-enable */
