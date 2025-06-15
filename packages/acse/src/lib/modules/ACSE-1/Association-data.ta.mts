/* eslint-disable */
import {
  EXTERNAL,
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

/**
 * @summary Association_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Association-data  ::=  SEQUENCE SIZE (1, ..., 0 | 2..MAX) OF EXTERNAL
 * ```
 */
export type Association_data = EXTERNAL[]; // SequenceOfType

let _cached_decoder_for_Association_data: $.ASN1Decoder<Association_data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Association_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Association_data} The decoded data structure.
 */
export function _decode_Association_data(el: _Element) {
  if (!_cached_decoder_for_Association_data) {
    _cached_decoder_for_Association_data = $._decodeSequenceOf<EXTERNAL>(
      () => $._decodeExternal
    );
  }
  return _cached_decoder_for_Association_data(el);
}

let _cached_encoder_for_Association_data: $.ASN1Encoder<Association_data> | null = null;

/**
 * @summary Encodes a(n) Association_data into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Association_data, encoded as an ASN.1 Element.
 */
export function _encode_Association_data(
  value: Association_data,
  elGetter: $.ASN1Encoder<Association_data>
) {
  if (!_cached_encoder_for_Association_data) {
    _cached_encoder_for_Association_data = $._encodeSequenceOf<EXTERNAL>(
      () => $._encodeExternal,
      $.BER
    );
  }
  return _cached_encoder_for_Association_data(value, elGetter);
}


/* eslint-enable */
