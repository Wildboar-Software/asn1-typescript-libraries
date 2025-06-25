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
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.mjs';

/**
 * @summary AD_IF_RELEVANT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AD-IF-RELEVANT           ::=  AuthorizationData
 * ```
 */
export type AD_IF_RELEVANT = AuthorizationData; // DefinedType


let _cached_decoder_for_AD_IF_RELEVANT: $.ASN1Decoder<AD_IF_RELEVANT> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AD_IF_RELEVANT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AD_IF_RELEVANT} The decoded data structure.
 */
export function _decode_AD_IF_RELEVANT(el: _Element): AD_IF_RELEVANT {
  if (!_cached_decoder_for_AD_IF_RELEVANT) {
    _cached_decoder_for_AD_IF_RELEVANT = _decode_AuthorizationData;
  }
  return _cached_decoder_for_AD_IF_RELEVANT(el);
}


let _cached_encoder_for_AD_IF_RELEVANT: $.ASN1Encoder<AD_IF_RELEVANT> | null = null;


/**
 * @summary Encodes a(n) AD_IF_RELEVANT into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_IF_RELEVANT, encoded as an ASN.1 Element.
 */
export function _encode_AD_IF_RELEVANT(
  value: AD_IF_RELEVANT,
  elGetter: $.ASN1Encoder<AD_IF_RELEVANT>
): _Element {
  if (!_cached_encoder_for_AD_IF_RELEVANT) {
    _cached_encoder_for_AD_IF_RELEVANT = _encode_AuthorizationData;
  }
  return _cached_encoder_for_AD_IF_RELEVANT(value, elGetter);
}


/* eslint-enable */
