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
 * @summary CompareResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareResponse  ::=  [APPLICATION 15]  LDAPResult
 * ```
 */
export type CompareResponse = LDAPResult; // DefinedType


let _cached_decoder_for_CompareResponse: $.ASN1Decoder<CompareResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CompareResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareResponse} The decoded data structure.
 */
export function _decode_CompareResponse(el: _Element): CompareResponse {
  if (!_cached_decoder_for_CompareResponse) {
    _cached_decoder_for_CompareResponse = $._decode_implicit<CompareResponse>(
      () => _decode_LDAPResult
    );
  }
  return _cached_decoder_for_CompareResponse(el);
}


let _cached_encoder_for_CompareResponse: $.ASN1Encoder<CompareResponse> | null = null;


/**
 * @summary Encodes a(n) CompareResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareResponse, encoded as an ASN.1 Element.
 */
export function _encode_CompareResponse(
  value: CompareResponse,
  elGetter: $.ASN1Encoder<CompareResponse>
): _Element {
  if (!_cached_encoder_for_CompareResponse) {
    _cached_encoder_for_CompareResponse = $._encode_implicit(
      _TagClass.application,
      15,
      () => _encode_LDAPResult,
      $.BER
    );
  }
  return _cached_encoder_for_CompareResponse(value, elGetter);
}


/* eslint-enable */
