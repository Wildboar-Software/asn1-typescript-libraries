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

/* START_OF_SYMBOL_DEFINITION TwoByte */
/**
 * @summary TwoByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TwoByte  ::=  INTEGER(0..65535)
 * ```
 */
export type TwoByte = INTEGER;
/* END_OF_SYMBOL_DEFINITION TwoByte */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TwoByte */
let _cached_decoder_for_TwoByte: $.ASN1Decoder<TwoByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TwoByte */

/* START_OF_SYMBOL_DEFINITION _decode_TwoByte */
/**
 * @summary Decodes an ASN.1 element into a(n) TwoByte
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TwoByte} The decoded data structure.
 */
export function _decode_TwoByte(el: _Element) {
  if (!_cached_decoder_for_TwoByte) {
    _cached_decoder_for_TwoByte = $._decodeInteger;
  }
  return _cached_decoder_for_TwoByte(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TwoByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TwoByte */
let _cached_encoder_for_TwoByte: $.ASN1Encoder<TwoByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TwoByte */

/* START_OF_SYMBOL_DEFINITION _encode_TwoByte */
/**
 * @summary Encodes a(n) TwoByte into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TwoByte, encoded as an ASN.1 Element.
 */
export function _encode_TwoByte(
  value: TwoByte,
  elGetter: $.ASN1Encoder<TwoByte>
) {
  if (!_cached_encoder_for_TwoByte) {
    _cached_encoder_for_TwoByte = $._encodeInteger;
  }
  return _cached_encoder_for_TwoByte(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TwoByte */

/* eslint-enable */
