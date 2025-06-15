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

/* START_OF_SYMBOL_DEFINITION UnsignedByte */
/**
 * @summary UnsignedByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedByte  ::=  INTEGER(0..max-unsigned-byte)
 * ```
 */
export type UnsignedByte = INTEGER;
/* END_OF_SYMBOL_DEFINITION UnsignedByte */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedByte */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedByte */

/* START_OF_SYMBOL_DEFINITION _decode_UnsignedByte */
export const _decode_UnsignedByte = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_UnsignedByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedByte */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedByte */

/* START_OF_SYMBOL_DEFINITION _encode_UnsignedByte */
export const _encode_UnsignedByte = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_UnsignedByte */

/* eslint-enable */
