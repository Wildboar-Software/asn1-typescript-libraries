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
 * @summary ModifyDNResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyDNResponse  ::=  [APPLICATION 13]  LDAPResult
 * ```
 */
export type ModifyDNResponse = LDAPResult; // DefinedType


let _cached_decoder_for_ModifyDNResponse: $.ASN1Decoder<ModifyDNResponse> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyDNResponse} The decoded data structure.
 */
export function _decode_ModifyDNResponse(el: _Element) {
  if (!_cached_decoder_for_ModifyDNResponse) {
    _cached_decoder_for_ModifyDNResponse = $._decode_implicit<ModifyDNResponse>(
      () => _decode_LDAPResult
    );
  }
  return _cached_decoder_for_ModifyDNResponse(el);
}


let _cached_encoder_for_ModifyDNResponse: $.ASN1Encoder<ModifyDNResponse> | null = null;


/**
 * @summary Encodes a(n) ModifyDNResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNResponse, encoded as an ASN.1 Element.
 */
export function _encode_ModifyDNResponse(
  value: ModifyDNResponse,
  elGetter: $.ASN1Encoder<ModifyDNResponse>
) {
  if (!_cached_encoder_for_ModifyDNResponse) {
    _cached_encoder_for_ModifyDNResponse = $._encode_implicit(
      _TagClass.application,
      13,
      () => _encode_LDAPResult,
      $.BER
    );
  }
  return _cached_encoder_for_ModifyDNResponse(value, elGetter);
}


/* eslint-enable */
