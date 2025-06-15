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

/* START_OF_SYMBOL_DEFINITION UnsignedLong */
/**
 * @summary UnsignedLong
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedLong  ::=      INTEGER (0..18446744073709551615)
 * ```
 */
export type UnsignedLong = INTEGER;
/* END_OF_SYMBOL_DEFINITION UnsignedLong */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedLong */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedLong */

/* START_OF_SYMBOL_DEFINITION _decode_UnsignedLong */
export const _decode_UnsignedLong = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_UnsignedLong */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedLong */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedLong */

/* START_OF_SYMBOL_DEFINITION _encode_UnsignedLong */
export const _encode_UnsignedLong = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_UnsignedLong */

/* eslint-enable */
