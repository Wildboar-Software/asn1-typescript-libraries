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

/* START_OF_SYMBOL_DEFINITION NonWrappingCounter */
/**
 * @summary NonWrappingCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonWrappingCounter  ::=  INTEGER(0..18446744073709551615)
 * ```
 */
export type NonWrappingCounter = INTEGER;
/* END_OF_SYMBOL_DEFINITION NonWrappingCounter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonWrappingCounter */
let _cached_decoder_for_NonWrappingCounter: $.ASN1Decoder<NonWrappingCounter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonWrappingCounter */

/* START_OF_SYMBOL_DEFINITION _decode_NonWrappingCounter */
/**
 * @summary Decodes an ASN.1 element into a(n) NonWrappingCounter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonWrappingCounter} The decoded data structure.
 */
export function _decode_NonWrappingCounter(el: _Element) {
  if (!_cached_decoder_for_NonWrappingCounter) {
    _cached_decoder_for_NonWrappingCounter = $._decodeInteger;
  }
  return _cached_decoder_for_NonWrappingCounter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NonWrappingCounter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonWrappingCounter */
let _cached_encoder_for_NonWrappingCounter: $.ASN1Encoder<NonWrappingCounter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonWrappingCounter */

/* START_OF_SYMBOL_DEFINITION _encode_NonWrappingCounter */
/**
 * @summary Encodes a(n) NonWrappingCounter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonWrappingCounter, encoded as an ASN.1 Element.
 */
export function _encode_NonWrappingCounter(
  value: NonWrappingCounter,
  elGetter: $.ASN1Encoder<NonWrappingCounter>
) {
  if (!_cached_encoder_for_NonWrappingCounter) {
    _cached_encoder_for_NonWrappingCounter = $._encodeInteger;
  }
  return _cached_encoder_for_NonWrappingCounter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NonWrappingCounter */

/* eslint-enable */
