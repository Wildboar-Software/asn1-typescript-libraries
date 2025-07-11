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
 * @summary DelResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelResponse  ::=  [APPLICATION 11]  LDAPResult
 * ```
 */
export type DelResponse = LDAPResult; // DefinedType


let _cached_decoder_for_DelResponse: $.ASN1Decoder<DelResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DelResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelResponse} The decoded data structure.
 */
export function _decode_DelResponse(el: _Element): DelResponse {
  if (!_cached_decoder_for_DelResponse) {
    _cached_decoder_for_DelResponse = $._decode_implicit<DelResponse>(
      () => _decode_LDAPResult
    );
  }
  return _cached_decoder_for_DelResponse(el);
}


let _cached_encoder_for_DelResponse: $.ASN1Encoder<DelResponse> | null = null;


/**
 * @summary Encodes a(n) DelResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelResponse, encoded as an ASN.1 Element.
 */
export function _encode_DelResponse(
  value: DelResponse,
  elGetter: $.ASN1Encoder<DelResponse>
): _Element {
  if (!_cached_encoder_for_DelResponse) {
    _cached_encoder_for_DelResponse = $._encode_implicit(
      _TagClass.application,
      11,
      () => _encode_LDAPResult,
      $.BER
    );
  }
  return _cached_encoder_for_DelResponse(value, elGetter);
}


/* eslint-enable */
