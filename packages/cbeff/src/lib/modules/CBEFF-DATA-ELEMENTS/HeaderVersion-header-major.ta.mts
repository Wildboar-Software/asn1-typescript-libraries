/* eslint-disable */
import {
  INTEGER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION HeaderVersion_header_major */
/**
 * @summary HeaderVersion_header_major
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderVersion-header-major ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type HeaderVersion_header_major = INTEGER;
/* END_OF_SYMBOL_DEFINITION HeaderVersion_header_major */

/* START_OF_SYMBOL_DEFINITION HeaderVersion_header_major_version1 */
/**
 * @summary HeaderVersion_header_major_version1
 * @constant
 * @type {number}
 */
export const HeaderVersion_header_major_version1: HeaderVersion_header_major = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION HeaderVersion_header_major_version1 */

/* START_OF_SYMBOL_DEFINITION version1 */
/**
 * @summary HeaderVersion_header_major_version1
 * @constant
 * @type {number}
 */
export const version1: HeaderVersion_header_major = HeaderVersion_header_major_version1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION version1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderVersion_header_major */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderVersion_header_major */

/* START_OF_SYMBOL_DEFINITION _decode_HeaderVersion_header_major */
export const _decode_HeaderVersion_header_major = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_HeaderVersion_header_major */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderVersion_header_major */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderVersion_header_major */

/* START_OF_SYMBOL_DEFINITION _encode_HeaderVersion_header_major */
export const _encode_HeaderVersion_header_major = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_HeaderVersion_header_major */

/* eslint-enable */
