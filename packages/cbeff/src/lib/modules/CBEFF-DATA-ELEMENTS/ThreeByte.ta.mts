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

/* START_OF_SYMBOL_DEFINITION ThreeByte */
/**
 * @summary ThreeByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThreeByte  ::=  INTEGER(0..16777215)
 * ```
 */
export type ThreeByte = INTEGER;
/* END_OF_SYMBOL_DEFINITION ThreeByte */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ThreeByte */
let _cached_decoder_for_ThreeByte: $.ASN1Decoder<ThreeByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ThreeByte */

/* START_OF_SYMBOL_DEFINITION _decode_ThreeByte */
/**
 * @summary Decodes an ASN.1 element into a(n) ThreeByte
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThreeByte} The decoded data structure.
 */
export function _decode_ThreeByte(el: _Element) {
  if (!_cached_decoder_for_ThreeByte) {
    _cached_decoder_for_ThreeByte = $._decodeInteger;
  }
  return _cached_decoder_for_ThreeByte(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ThreeByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ThreeByte */
let _cached_encoder_for_ThreeByte: $.ASN1Encoder<ThreeByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ThreeByte */

/* START_OF_SYMBOL_DEFINITION _encode_ThreeByte */
/**
 * @summary Encodes a(n) ThreeByte into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThreeByte, encoded as an ASN.1 Element.
 */
export function _encode_ThreeByte(
  value: ThreeByte,
  elGetter: $.ASN1Encoder<ThreeByte>
) {
  if (!_cached_encoder_for_ThreeByte) {
    _cached_encoder_for_ThreeByte = $._encodeInteger;
  }
  return _cached_encoder_for_ThreeByte(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ThreeByte */

/* eslint-enable */
