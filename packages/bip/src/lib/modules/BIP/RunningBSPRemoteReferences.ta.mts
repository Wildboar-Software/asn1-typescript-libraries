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
  RunningBSPRemoteReference,
  _decode_RunningBSPRemoteReference,
  _encode_RunningBSPRemoteReference,
} from '../BIP/RunningBSPRemoteReference.ta.mjs';

/**
 * @summary RunningBSPRemoteReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RunningBSPRemoteReferences  ::=  SET OF reference RunningBSPRemoteReference
 * ```
 */
export type RunningBSPRemoteReferences = RunningBSPRemoteReference[]; // SetOfType


let _cached_decoder_for_RunningBSPRemoteReferences: $.ASN1Decoder<RunningBSPRemoteReferences> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RunningBSPRemoteReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RunningBSPRemoteReferences} The decoded data structure.
 */
export function _decode_RunningBSPRemoteReferences(el: _Element) {
  if (!_cached_decoder_for_RunningBSPRemoteReferences) {
    _cached_decoder_for_RunningBSPRemoteReferences = $._decodeSetOf<RunningBSPRemoteReference>(
      () => _decode_RunningBSPRemoteReference
    );
  }
  return _cached_decoder_for_RunningBSPRemoteReferences(el);
}


let _cached_encoder_for_RunningBSPRemoteReferences: $.ASN1Encoder<RunningBSPRemoteReferences> | null = null;


/**
 * @summary Encodes a(n) RunningBSPRemoteReferences into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunningBSPRemoteReferences, encoded as an ASN.1 Element.
 */
export function _encode_RunningBSPRemoteReferences(
  value: RunningBSPRemoteReferences,
  elGetter: $.ASN1Encoder<RunningBSPRemoteReferences>
) {
  if (!_cached_encoder_for_RunningBSPRemoteReferences) {
    _cached_encoder_for_RunningBSPRemoteReferences = $._encodeSetOf<RunningBSPRemoteReference>(
      () => _encode_RunningBSPRemoteReference,
      $.BER
    );
  }
  return _cached_encoder_for_RunningBSPRemoteReferences(value, elGetter);
}


/* eslint-enable */
