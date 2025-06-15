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
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.mjs';

/**
 * @summary AD_MANDATORY_FOR_KDC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AD-MANDATORY-FOR-KDC     ::=  AuthorizationData
 * ```
 */
export type AD_MANDATORY_FOR_KDC = AuthorizationData; // DefinedType


let _cached_decoder_for_AD_MANDATORY_FOR_KDC: $.ASN1Decoder<AD_MANDATORY_FOR_KDC> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AD_MANDATORY_FOR_KDC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AD_MANDATORY_FOR_KDC} The decoded data structure.
 */
export function _decode_AD_MANDATORY_FOR_KDC(el: _Element) {
  if (!_cached_decoder_for_AD_MANDATORY_FOR_KDC) {
    _cached_decoder_for_AD_MANDATORY_FOR_KDC = _decode_AuthorizationData;
  }
  return _cached_decoder_for_AD_MANDATORY_FOR_KDC(el);
}


let _cached_encoder_for_AD_MANDATORY_FOR_KDC: $.ASN1Encoder<AD_MANDATORY_FOR_KDC> | null = null;


/**
 * @summary Encodes a(n) AD_MANDATORY_FOR_KDC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_MANDATORY_FOR_KDC, encoded as an ASN.1 Element.
 */
export function _encode_AD_MANDATORY_FOR_KDC(
  value: AD_MANDATORY_FOR_KDC,
  elGetter: $.ASN1Encoder<AD_MANDATORY_FOR_KDC>
) {
  if (!_cached_encoder_for_AD_MANDATORY_FOR_KDC) {
    _cached_encoder_for_AD_MANDATORY_FOR_KDC = _encode_AuthorizationData;
  }
  return _cached_encoder_for_AD_MANDATORY_FOR_KDC(value, elGetter);
}


/* eslint-enable */
