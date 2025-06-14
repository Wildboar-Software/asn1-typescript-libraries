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

/* START_OF_SYMBOL_DEFINITION FourByte */
/**
 * @summary FourByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FourByte  ::=  INTEGER(0..4294967295)
 * ```
 */
export type FourByte = INTEGER;
/* END_OF_SYMBOL_DEFINITION FourByte */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FourByte */
let _cached_decoder_for_FourByte: $.ASN1Decoder<FourByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FourByte */

/* START_OF_SYMBOL_DEFINITION _decode_FourByte */
/**
 * @summary Decodes an ASN.1 element into a(n) FourByte
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FourByte} The decoded data structure.
 */
export function _decode_FourByte(el: _Element) {
  if (!_cached_decoder_for_FourByte) {
    _cached_decoder_for_FourByte = $._decodeInteger;
  }
  return _cached_decoder_for_FourByte(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FourByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FourByte */
let _cached_encoder_for_FourByte: $.ASN1Encoder<FourByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FourByte */

/* START_OF_SYMBOL_DEFINITION _encode_FourByte */
/**
 * @summary Encodes a(n) FourByte into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FourByte, encoded as an ASN.1 Element.
 */
export function _encode_FourByte(
  value: FourByte,
  elGetter: $.ASN1Encoder<FourByte>
) {
  if (!_cached_encoder_for_FourByte) {
    _cached_encoder_for_FourByte = $._encodeInteger;
  }
  return _cached_encoder_for_FourByte(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FourByte */

/* eslint-enable */
