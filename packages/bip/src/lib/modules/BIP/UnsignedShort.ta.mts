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

/* START_OF_SYMBOL_DEFINITION UnsignedShort */
/**
 * @summary UnsignedShort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedShort  ::=  INTEGER(0..max-unsigned-short)
 * ```
 */
export type UnsignedShort = INTEGER;
/* END_OF_SYMBOL_DEFINITION UnsignedShort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedShort */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedShort */

/* START_OF_SYMBOL_DEFINITION _decode_UnsignedShort */
export const _decode_UnsignedShort = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_UnsignedShort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedShort */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedShort */

/* START_OF_SYMBOL_DEFINITION _encode_UnsignedShort */
export const _encode_UnsignedShort = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_UnsignedShort */

/* eslint-enable */
