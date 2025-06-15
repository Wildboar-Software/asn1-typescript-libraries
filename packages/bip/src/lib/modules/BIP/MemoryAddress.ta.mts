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

/* START_OF_SYMBOL_DEFINITION MemoryAddress */
/**
 * @summary MemoryAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MemoryAddress  ::=  INTEGER
 * ```
 */
export type MemoryAddress = INTEGER;
/* END_OF_SYMBOL_DEFINITION MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MemoryAddress */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _decode_MemoryAddress */
export const _decode_MemoryAddress = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MemoryAddress */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _encode_MemoryAddress */
export const _encode_MemoryAddress = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MemoryAddress */

/* eslint-enable */
