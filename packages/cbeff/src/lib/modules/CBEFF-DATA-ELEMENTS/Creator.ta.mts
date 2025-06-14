/* eslint-disable */
import {
  UTF8String,
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

/* START_OF_SYMBOL_DEFINITION Creator */
/**
 * @summary Creator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Creator  ::=  UTF8String
 * ```
 */
export type Creator = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION Creator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Creator */
let _cached_decoder_for_Creator: $.ASN1Decoder<Creator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Creator */

/* START_OF_SYMBOL_DEFINITION _decode_Creator */
/**
 * @summary Decodes an ASN.1 element into a(n) Creator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Creator} The decoded data structure.
 */
export function _decode_Creator(el: _Element) {
  if (!_cached_decoder_for_Creator) {
    _cached_decoder_for_Creator = $._decodeUTF8String;
  }
  return _cached_decoder_for_Creator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Creator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Creator */
let _cached_encoder_for_Creator: $.ASN1Encoder<Creator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Creator */

/* START_OF_SYMBOL_DEFINITION _encode_Creator */
/**
 * @summary Encodes a(n) Creator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Creator, encoded as an ASN.1 Element.
 */
export function _encode_Creator(
  value: Creator,
  elGetter: $.ASN1Encoder<Creator>
) {
  if (!_cached_encoder_for_Creator) {
    _cached_encoder_for_Creator = $._encodeUTF8String;
  }
  return _cached_encoder_for_Creator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Creator */

/* eslint-enable */
