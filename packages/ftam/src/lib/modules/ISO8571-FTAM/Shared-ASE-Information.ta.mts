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
 * @summary Shared_ASE_Information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Shared-ASE-Information  ::=  [APPLICATION 20] IMPLICIT EXTERNAL
 * ```
 */
export type Shared_ASE_Information = EXTERNAL; // ExternalType


let _cached_decoder_for_Shared_ASE_Information: $.ASN1Decoder<Shared_ASE_Information> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Shared_ASE_Information
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Shared_ASE_Information} The decoded data structure.
 */
export function _decode_Shared_ASE_Information(el: _Element): Shared_ASE_Information {
  if (!_cached_decoder_for_Shared_ASE_Information) {
    _cached_decoder_for_Shared_ASE_Information = $._decode_implicit<Shared_ASE_Information>(
      () => $._decodeExternal
    );
  }
  return _cached_decoder_for_Shared_ASE_Information(el);
}


let _cached_encoder_for_Shared_ASE_Information: $.ASN1Encoder<Shared_ASE_Information> | null = null;


/**
 * @summary Encodes a(n) Shared_ASE_Information into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Shared_ASE_Information, encoded as an ASN.1 Element.
 */
export function _encode_Shared_ASE_Information(
  value: Shared_ASE_Information,
  elGetter: $.ASN1Encoder<Shared_ASE_Information>
): _Element {
  if (!_cached_encoder_for_Shared_ASE_Information) {
    _cached_encoder_for_Shared_ASE_Information = $._encode_implicit(
      _TagClass.application,
      20,
      () => $._encodeExternal,
      $.BER
    );
  }
  return _cached_encoder_for_Shared_ASE_Information(value, elGetter);
}


/* eslint-enable */
