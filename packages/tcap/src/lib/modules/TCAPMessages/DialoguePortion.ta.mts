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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DialoguePortion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DialoguePortion  ::=  [APPLICATION 11] EXPLICIT EXTERNAL
 * ```
 */
export type DialoguePortion = EXTERNAL; // ExternalType

let _cached_decoder_for_DialoguePortion: $.ASN1Decoder<DialoguePortion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialoguePortion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DialoguePortion} The decoded data structure.
 */
export function _decode_DialoguePortion(el: _Element) {
  if (!_cached_decoder_for_DialoguePortion) {
    _cached_decoder_for_DialoguePortion = $._decode_explicit<DialoguePortion>(
      () => $._decodeExternal
    );
  }
  return _cached_decoder_for_DialoguePortion(el);
}

let _cached_encoder_for_DialoguePortion: $.ASN1Encoder<DialoguePortion> | null = null;

/**
 * @summary Encodes a(n) DialoguePortion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialoguePortion, encoded as an ASN.1 Element.
 */
export function _encode_DialoguePortion(
  value: DialoguePortion,
  elGetter: $.ASN1Encoder<DialoguePortion>
) {
  if (!_cached_encoder_for_DialoguePortion) {
    _cached_encoder_for_DialoguePortion = $._encode_explicit(
      _TagClass.application,
      11,
      () => $._encodeExternal,
      $.BER
    );
  }
  return _cached_encoder_for_DialoguePortion(value, elGetter);
}


/* eslint-enable */
