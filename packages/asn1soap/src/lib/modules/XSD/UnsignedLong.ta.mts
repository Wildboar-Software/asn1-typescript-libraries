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
let _cached_decoder_for_UnsignedLong: $.ASN1Decoder<UnsignedLong> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedLong */

/* START_OF_SYMBOL_DEFINITION _decode_UnsignedLong */
/**
 * @summary Decodes an ASN.1 element into a(n) UnsignedLong
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnsignedLong} The decoded data structure.
 */
export function _decode_UnsignedLong(el: _Element) {
  if (!_cached_decoder_for_UnsignedLong) {
    _cached_decoder_for_UnsignedLong = $._decodeInteger;
  }
  return _cached_decoder_for_UnsignedLong(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnsignedLong */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedLong */
let _cached_encoder_for_UnsignedLong: $.ASN1Encoder<UnsignedLong> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedLong */

/* START_OF_SYMBOL_DEFINITION _encode_UnsignedLong */
/**
 * @summary Encodes a(n) UnsignedLong into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsignedLong, encoded as an ASN.1 Element.
 */
export function _encode_UnsignedLong(
  value: UnsignedLong,
  elGetter: $.ASN1Encoder<UnsignedLong>
) {
  if (!_cached_encoder_for_UnsignedLong) {
    _cached_encoder_for_UnsignedLong = $._encodeInteger;
  }
  return _cached_encoder_for_UnsignedLong(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnsignedLong */

/* eslint-enable */
