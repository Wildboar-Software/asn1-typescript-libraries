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
  EncKDCRepPart,
  _decode_EncKDCRepPart,
  _encode_EncKDCRepPart,
} from '../KerberosV5Spec2/EncKDCRepPart.ta.mjs';

/**
 * @summary EncTGSRepPart
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncTGSRepPart    ::=  [APPLICATION 26] EncKDCRepPart
 * ```
 */
export type EncTGSRepPart = EncKDCRepPart; // DefinedType


let _cached_decoder_for_EncTGSRepPart: $.ASN1Decoder<EncTGSRepPart> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncTGSRepPart
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncTGSRepPart} The decoded data structure.
 */
export function _decode_EncTGSRepPart(el: _Element): EncTGSRepPart {
  if (!_cached_decoder_for_EncTGSRepPart) {
    _cached_decoder_for_EncTGSRepPart = $._decode_implicit<EncTGSRepPart>(
      () => _decode_EncKDCRepPart
    );
  }
  return _cached_decoder_for_EncTGSRepPart(el);
}


let _cached_encoder_for_EncTGSRepPart: $.ASN1Encoder<EncTGSRepPart> | null = null;


/**
 * @summary Encodes a(n) EncTGSRepPart into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncTGSRepPart, encoded as an ASN.1 Element.
 */
export function _encode_EncTGSRepPart(
  value: EncTGSRepPart,
  elGetter: $.ASN1Encoder<EncTGSRepPart>
): _Element {
  if (!_cached_encoder_for_EncTGSRepPart) {
    _cached_encoder_for_EncTGSRepPart = $._encode_implicit(
      _TagClass.application,
      26,
      () => _encode_EncKDCRepPart,
      $.DER
    );
  }
  return _cached_encoder_for_EncTGSRepPart(value, elGetter);
}


/* eslint-enable */
