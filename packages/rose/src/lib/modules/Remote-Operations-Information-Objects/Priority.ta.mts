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

/* START_OF_SYMBOL_DEFINITION Priority */
/**
 * @summary Priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Priority  ::=  INTEGER(0..MAX)
 * ```
 */
export type Priority = INTEGER;
/* END_OF_SYMBOL_DEFINITION Priority */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Priority */
let _cached_decoder_for_Priority: $.ASN1Decoder<Priority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Priority */

/* START_OF_SYMBOL_DEFINITION _decode_Priority */
/**
 * @summary Decodes an ASN.1 element into a(n) Priority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Priority} The decoded data structure.
 */
export function _decode_Priority(el: _Element) {
  if (!_cached_decoder_for_Priority) {
    _cached_decoder_for_Priority = $._decodeInteger;
  }
  return _cached_decoder_for_Priority(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Priority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Priority */
let _cached_encoder_for_Priority: $.ASN1Encoder<Priority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Priority */

/* START_OF_SYMBOL_DEFINITION _encode_Priority */
/**
 * @summary Encodes a(n) Priority into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Priority, encoded as an ASN.1 Element.
 */
export function _encode_Priority(
  value: Priority,
  elGetter: $.ASN1Encoder<Priority>
) {
  if (!_cached_encoder_for_Priority) {
    _cached_encoder_for_Priority = $._encodeInteger;
  }
  return _cached_encoder_for_Priority(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Priority */

/* eslint-enable */
