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
let _cached_decoder_for_UnsignedByte: $.ASN1Decoder<UnsignedByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnsignedByte */

/* START_OF_SYMBOL_DEFINITION _decode_UnsignedByte */
/**
 * @summary Decodes an ASN.1 element into a(n) UnsignedByte
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnsignedByte} The decoded data structure.
 */
export function _decode_UnsignedByte(el: _Element) {
  if (!_cached_decoder_for_UnsignedByte) {
    _cached_decoder_for_UnsignedByte = $._decodeInteger;
  }
  return _cached_decoder_for_UnsignedByte(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnsignedByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedByte */
let _cached_encoder_for_UnsignedByte: $.ASN1Encoder<UnsignedByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnsignedByte */

/* START_OF_SYMBOL_DEFINITION _encode_UnsignedByte */
/**
 * @summary Encodes a(n) UnsignedByte into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsignedByte, encoded as an ASN.1 Element.
 */
export function _encode_UnsignedByte(
  value: UnsignedByte,
  elGetter: $.ASN1Encoder<UnsignedByte>
) {
  if (!_cached_encoder_for_UnsignedByte) {
    _cached_encoder_for_UnsignedByte = $._encodeInteger;
  }
  return _cached_encoder_for_UnsignedByte(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnsignedByte */

/* eslint-enable */
