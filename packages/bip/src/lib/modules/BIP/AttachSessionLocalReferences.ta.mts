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
  AttachSessionLocalReference,
  _decode_AttachSessionLocalReference,
  _encode_AttachSessionLocalReference,
} from '../BIP/AttachSessionLocalReference.ta.mjs';

/**
 * @summary AttachSessionLocalReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttachSessionLocalReferences  ::=  SET OF reference AttachSessionLocalReference
 * ```
 */
export type AttachSessionLocalReferences = AttachSessionLocalReference[]; // SetOfType


let _cached_decoder_for_AttachSessionLocalReferences: $.ASN1Decoder<AttachSessionLocalReferences> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttachSessionLocalReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttachSessionLocalReferences} The decoded data structure.
 */
export function _decode_AttachSessionLocalReferences(el: _Element) {
  if (!_cached_decoder_for_AttachSessionLocalReferences) {
    _cached_decoder_for_AttachSessionLocalReferences = $._decodeSetOf<AttachSessionLocalReference>(
      () => _decode_AttachSessionLocalReference
    );
  }
  return _cached_decoder_for_AttachSessionLocalReferences(el);
}


let _cached_encoder_for_AttachSessionLocalReferences: $.ASN1Encoder<AttachSessionLocalReferences> | null = null;


/**
 * @summary Encodes a(n) AttachSessionLocalReferences into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachSessionLocalReferences, encoded as an ASN.1 Element.
 */
export function _encode_AttachSessionLocalReferences(
  value: AttachSessionLocalReferences,
  elGetter: $.ASN1Encoder<AttachSessionLocalReferences>
) {
  if (!_cached_encoder_for_AttachSessionLocalReferences) {
    _cached_encoder_for_AttachSessionLocalReferences = $._encodeSetOf<AttachSessionLocalReference>(
      () => _encode_AttachSessionLocalReference,
      $.BER
    );
  }
  return _cached_encoder_for_AttachSessionLocalReferences(value, elGetter);
}


/* eslint-enable */
