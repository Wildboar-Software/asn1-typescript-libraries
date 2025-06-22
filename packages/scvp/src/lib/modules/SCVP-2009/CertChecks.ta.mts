/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
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
 * @summary CertChecks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertChecks  ::=  SEQUENCE SIZE (1..MAX) OF
 *     OBJECT IDENTIFIER (CertCheckSet | ACertCheckSet, ... )
 * ```
 */
export type CertChecks = OBJECT_IDENTIFIER[]; // SequenceOfType

let _cached_decoder_for_CertChecks: $.ASN1Decoder<CertChecks> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertChecks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertChecks} The decoded data structure.
 */
export function _decode_CertChecks(el: _Element) {
  if (!_cached_decoder_for_CertChecks) {
    _cached_decoder_for_CertChecks = $._decodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._decodeObjectIdentifier
    );
  }
  return _cached_decoder_for_CertChecks(el);
}

let _cached_encoder_for_CertChecks: $.ASN1Encoder<CertChecks> | null = null;

/**
 * @summary Encodes a(n) CertChecks into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertChecks, encoded as an ASN.1 Element.
 */
export function _encode_CertChecks(
  value: CertChecks,
  elGetter: $.ASN1Encoder<CertChecks>
) {
  if (!_cached_encoder_for_CertChecks) {
    _cached_encoder_for_CertChecks = $._encodeSequenceOf<OBJECT_IDENTIFIER>(
      () => $._encodeObjectIdentifier,
      $.DER
    );
  }
  return _cached_encoder_for_CertChecks(value, elGetter);
}


/* eslint-enable */
