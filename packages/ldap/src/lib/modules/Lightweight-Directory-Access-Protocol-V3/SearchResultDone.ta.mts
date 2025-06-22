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
  LDAPResult,
  _decode_LDAPResult,
  _encode_LDAPResult,
} from '../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta.mjs';

/**
 * @summary SearchResultDone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResultDone  ::=  [APPLICATION 5]  LDAPResult
 * ```
 */
export type SearchResultDone = LDAPResult; // DefinedType


let _cached_decoder_for_SearchResultDone: $.ASN1Decoder<SearchResultDone> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultDone
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultDone} The decoded data structure.
 */
export function _decode_SearchResultDone(el: _Element) {
  if (!_cached_decoder_for_SearchResultDone) {
    _cached_decoder_for_SearchResultDone = $._decode_implicit<SearchResultDone>(
      () => _decode_LDAPResult
    );
  }
  return _cached_decoder_for_SearchResultDone(el);
}


let _cached_encoder_for_SearchResultDone: $.ASN1Encoder<SearchResultDone> | null = null;


/**
 * @summary Encodes a(n) SearchResultDone into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultDone, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultDone(
  value: SearchResultDone,
  elGetter: $.ASN1Encoder<SearchResultDone>
) {
  if (!_cached_encoder_for_SearchResultDone) {
    _cached_encoder_for_SearchResultDone = $._encode_implicit(
      _TagClass.application,
      5,
      () => _encode_LDAPResult,
      $.BER
    );
  }
  return _cached_encoder_for_SearchResultDone(value, elGetter);
}


/* eslint-enable */
