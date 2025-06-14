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

/* START_OF_SYMBOL_DEFINITION Int */
/**
 * @summary Int
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Int  ::=  INTEGER (-2147483648..2147483647)
 * ```
 */
export type Int = INTEGER;
/* END_OF_SYMBOL_DEFINITION Int */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Int */
let _cached_decoder_for_Int: $.ASN1Decoder<Int> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Int */

/* START_OF_SYMBOL_DEFINITION _decode_Int */
/**
 * @summary Decodes an ASN.1 element into a(n) Int
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Int} The decoded data structure.
 */
export function _decode_Int(el: _Element) {
  if (!_cached_decoder_for_Int) {
    _cached_decoder_for_Int = $._decodeInteger;
  }
  return _cached_decoder_for_Int(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Int */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Int */
let _cached_encoder_for_Int: $.ASN1Encoder<Int> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Int */

/* START_OF_SYMBOL_DEFINITION _encode_Int */
/**
 * @summary Encodes a(n) Int into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Int, encoded as an ASN.1 Element.
 */
export function _encode_Int(value: Int, elGetter: $.ASN1Encoder<Int>) {
  if (!_cached_encoder_for_Int) {
    _cached_encoder_for_Int = $._encodeInteger;
  }
  return _cached_encoder_for_Int(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Int */

/* eslint-enable */
