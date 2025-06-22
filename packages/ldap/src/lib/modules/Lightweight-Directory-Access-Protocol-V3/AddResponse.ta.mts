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
 * @summary AddResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddResponse  ::=  [APPLICATION 9]  LDAPResult
 * ```
 */
export type AddResponse = LDAPResult; // DefinedType


let _cached_decoder_for_AddResponse: $.ASN1Decoder<AddResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddResponse} The decoded data structure.
 */
export function _decode_AddResponse(el: _Element) {
  if (!_cached_decoder_for_AddResponse) {
    _cached_decoder_for_AddResponse = $._decode_implicit<AddResponse>(
      () => _decode_LDAPResult
    );
  }
  return _cached_decoder_for_AddResponse(el);
}


let _cached_encoder_for_AddResponse: $.ASN1Encoder<AddResponse> | null = null;


/**
 * @summary Encodes a(n) AddResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddResponse, encoded as an ASN.1 Element.
 */
export function _encode_AddResponse(
  value: AddResponse,
  elGetter: $.ASN1Encoder<AddResponse>
) {
  if (!_cached_encoder_for_AddResponse) {
    _cached_encoder_for_AddResponse = $._encode_implicit(
      _TagClass.application,
      9,
      () => _encode_LDAPResult,
      $.BER
    );
  }
  return _cached_encoder_for_AddResponse(value, elGetter);
}


/* eslint-enable */
