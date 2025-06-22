/* eslint-disable */
import {
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
  LocalDistinguishedName,
  _decode_LocalDistinguishedName,
  _encode_LocalDistinguishedName,
} from '../ISIS/LocalDistinguishedName.ta.mjs';
/**
 * @summary OutputAdjacencies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OutputAdjacencies  ::=  SET OF LocalDistinguishedName
 * ```
 */
export type OutputAdjacencies = LocalDistinguishedName[]; // SetOfType

let _cached_decoder_for_OutputAdjacencies: $.ASN1Decoder<OutputAdjacencies> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OutputAdjacencies
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OutputAdjacencies} The decoded data structure.
 */
export function _decode_OutputAdjacencies(el: _Element) {
  if (!_cached_decoder_for_OutputAdjacencies) {
    _cached_decoder_for_OutputAdjacencies = $._decodeSetOf<LocalDistinguishedName>(
      () => _decode_LocalDistinguishedName
    );
  }
  return _cached_decoder_for_OutputAdjacencies(el);
}

let _cached_encoder_for_OutputAdjacencies: $.ASN1Encoder<OutputAdjacencies> | null = null;

/**
 * @summary Encodes a(n) OutputAdjacencies into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OutputAdjacencies, encoded as an ASN.1 Element.
 */
export function _encode_OutputAdjacencies(
  value: OutputAdjacencies,
  elGetter: $.ASN1Encoder<OutputAdjacencies>
) {
  if (!_cached_encoder_for_OutputAdjacencies) {
    _cached_encoder_for_OutputAdjacencies = $._encodeSetOf<LocalDistinguishedName>(
      () => _encode_LocalDistinguishedName,
      $.BER
    );
  }
  return _cached_encoder_for_OutputAdjacencies(value, elGetter);
}


/* eslint-enable */
