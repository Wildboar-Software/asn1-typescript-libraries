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

/* START_OF_SYMBOL_DEFINITION IDLength */
/**
 * @summary IDLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDLength  ::=  INTEGER(0..8)
 * ```
 */
export type IDLength = INTEGER;
/* END_OF_SYMBOL_DEFINITION IDLength */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IDLength */
let _cached_decoder_for_IDLength: $.ASN1Decoder<IDLength> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IDLength */

/* START_OF_SYMBOL_DEFINITION _decode_IDLength */
/**
 * @summary Decodes an ASN.1 element into a(n) IDLength
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IDLength} The decoded data structure.
 */
export function _decode_IDLength(el: _Element) {
  if (!_cached_decoder_for_IDLength) {
    _cached_decoder_for_IDLength = $._decodeInteger;
  }
  return _cached_decoder_for_IDLength(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IDLength */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IDLength */
let _cached_encoder_for_IDLength: $.ASN1Encoder<IDLength> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IDLength */

/* START_OF_SYMBOL_DEFINITION _encode_IDLength */
/**
 * @summary Encodes a(n) IDLength into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IDLength, encoded as an ASN.1 Element.
 */
export function _encode_IDLength(
  value: IDLength,
  elGetter: $.ASN1Encoder<IDLength>
) {
  if (!_cached_encoder_for_IDLength) {
    _cached_encoder_for_IDLength = $._encodeInteger;
  }
  return _cached_encoder_for_IDLength(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IDLength */

/* eslint-enable */
