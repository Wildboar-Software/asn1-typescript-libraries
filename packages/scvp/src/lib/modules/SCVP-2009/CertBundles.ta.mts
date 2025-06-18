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
  CertBundle,
  _decode_CertBundle,
  _encode_CertBundle,
} from '../SCVP-2009/CertBundle.ta.mjs';
/**
 * @summary CertBundles
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertBundles  ::=  SEQUENCE SIZE (1..MAX) OF CertBundle
 * ```
 */
export type CertBundles = CertBundle[]; // SequenceOfType

let _cached_decoder_for_CertBundles: $.ASN1Decoder<CertBundles> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertBundles
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertBundles} The decoded data structure.
 */
export function _decode_CertBundles(el: _Element) {
  if (!_cached_decoder_for_CertBundles) {
    _cached_decoder_for_CertBundles = $._decodeSequenceOf<CertBundle>(
      () => _decode_CertBundle
    );
  }
  return _cached_decoder_for_CertBundles(el);
}

let _cached_encoder_for_CertBundles: $.ASN1Encoder<CertBundles> | null = null;

/**
 * @summary Encodes a(n) CertBundles into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertBundles, encoded as an ASN.1 Element.
 */
export function _encode_CertBundles(
  value: CertBundles,
  elGetter: $.ASN1Encoder<CertBundles>
) {
  if (!_cached_encoder_for_CertBundles) {
    _cached_encoder_for_CertBundles = $._encodeSequenceOf<CertBundle>(
      () => _encode_CertBundle,
      $.DER
    );
  }
  return _cached_encoder_for_CertBundles(value, elGetter);
}


/* eslint-enable */
