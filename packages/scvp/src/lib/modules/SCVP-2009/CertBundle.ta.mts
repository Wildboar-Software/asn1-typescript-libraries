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
  Certificate,
  _decode_Certificate,
  _encode_Certificate,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary CertBundle
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertBundle  ::=  SEQUENCE SIZE (1..MAX) OF Certificate
 * ```
 */
export type CertBundle = Certificate[]; // SequenceOfType

let _cached_decoder_for_CertBundle: $.ASN1Decoder<CertBundle> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertBundle
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertBundle} The decoded data structure.
 */
export function _decode_CertBundle(el: _Element): CertBundle {
  if (!_cached_decoder_for_CertBundle) {
    _cached_decoder_for_CertBundle = $._decodeSequenceOf<Certificate>(
      () => _decode_Certificate
    );
  }
  return _cached_decoder_for_CertBundle(el);
}

let _cached_encoder_for_CertBundle: $.ASN1Encoder<CertBundle> | null = null;

/**
 * @summary Encodes a(n) CertBundle into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertBundle, encoded as an ASN.1 Element.
 */
export function _encode_CertBundle(
  value: CertBundle,
  elGetter: $.ASN1Encoder<CertBundle>
): _Element {
  if (!_cached_encoder_for_CertBundle) {
    _cached_encoder_for_CertBundle = $._encodeSequenceOf<Certificate>(
      () => _encode_Certificate,
      $.DER
    );
  }
  return _cached_encoder_for_CertBundle(value, elGetter);
}


/* eslint-enable */
