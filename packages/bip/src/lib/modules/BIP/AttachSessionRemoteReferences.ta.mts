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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  AttachSessionRemoteReference,
  _decode_AttachSessionRemoteReference,
  _encode_AttachSessionRemoteReference,
} from '../BIP/AttachSessionRemoteReference.ta.mjs';

/**
 * @summary AttachSessionRemoteReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttachSessionRemoteReferences  ::=  SET OF reference AttachSessionRemoteReference
 * ```
 */
export type AttachSessionRemoteReferences = AttachSessionRemoteReference[]; // SetOfType


let _cached_decoder_for_AttachSessionRemoteReferences: $.ASN1Decoder<AttachSessionRemoteReferences> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AttachSessionRemoteReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttachSessionRemoteReferences} The decoded data structure.
 */
export function _decode_AttachSessionRemoteReferences(el: _Element) {
  if (!_cached_decoder_for_AttachSessionRemoteReferences) {
    _cached_decoder_for_AttachSessionRemoteReferences = $._decodeSetOf<AttachSessionRemoteReference>(
      () => _decode_AttachSessionRemoteReference
    );
  }
  return _cached_decoder_for_AttachSessionRemoteReferences(el);
}


let _cached_encoder_for_AttachSessionRemoteReferences: $.ASN1Encoder<AttachSessionRemoteReferences> | null = null;


/**
 * @summary Encodes a(n) AttachSessionRemoteReferences into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttachSessionRemoteReferences, encoded as an ASN.1 Element.
 */
export function _encode_AttachSessionRemoteReferences(
  value: AttachSessionRemoteReferences,
  elGetter: $.ASN1Encoder<AttachSessionRemoteReferences>
) {
  if (!_cached_encoder_for_AttachSessionRemoteReferences) {
    _cached_encoder_for_AttachSessionRemoteReferences = $._encodeSetOf<AttachSessionRemoteReference>(
      () => _encode_AttachSessionRemoteReference,
      $.BER
    );
  }
  return _cached_encoder_for_AttachSessionRemoteReferences(value, elGetter);
}


/* eslint-enable */
