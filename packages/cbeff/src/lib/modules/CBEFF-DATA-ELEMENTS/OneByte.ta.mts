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

/* START_OF_SYMBOL_DEFINITION OneByte */
/**
 * @summary OneByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneByte  ::=  INTEGER(0..255)
 * ```
 */
export type OneByte = INTEGER;
/* END_OF_SYMBOL_DEFINITION OneByte */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OneByte */
let _cached_decoder_for_OneByte: $.ASN1Decoder<OneByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OneByte */

/* START_OF_SYMBOL_DEFINITION _decode_OneByte */
/**
 * @summary Decodes an ASN.1 element into a(n) OneByte
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OneByte} The decoded data structure.
 */
export function _decode_OneByte(el: _Element) {
  if (!_cached_decoder_for_OneByte) {
    _cached_decoder_for_OneByte = $._decodeInteger;
  }
  return _cached_decoder_for_OneByte(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OneByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OneByte */
let _cached_encoder_for_OneByte: $.ASN1Encoder<OneByte> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OneByte */

/* START_OF_SYMBOL_DEFINITION _encode_OneByte */
/**
 * @summary Encodes a(n) OneByte into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OneByte, encoded as an ASN.1 Element.
 */
export function _encode_OneByte(
  value: OneByte,
  elGetter: $.ASN1Encoder<OneByte>
) {
  if (!_cached_encoder_for_OneByte) {
    _cached_encoder_for_OneByte = $._encodeInteger;
  }
  return _cached_encoder_for_OneByte(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OneByte */

/* eslint-enable */
