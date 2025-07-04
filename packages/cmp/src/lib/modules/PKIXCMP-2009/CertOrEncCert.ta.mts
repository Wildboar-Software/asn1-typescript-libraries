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
  CMPCertificate,
  _decode_CMPCertificate,
  _encode_CMPCertificate,
} from '../PKIXCMP-2009/CMPCertificate.ta.mjs';
import {
  EncryptedValue,
  _decode_EncryptedValue,
  _encode_EncryptedValue,
} from '@wildboar/crmf';

/**
 * @summary CertOrEncCert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertOrEncCert  ::=  CHOICE {
 *     certificate     [0] CMPCertificate,
 *     encryptedCert   [1] EncryptedValue }
 * ```
 */
export type CertOrEncCert =
  | { certificate: CMPCertificate } /* CHOICE_ALT_ROOT */
  | { encryptedCert: EncryptedValue } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_CertOrEncCert: $.ASN1Decoder<CertOrEncCert> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertOrEncCert
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertOrEncCert} The decoded data structure.
 */
export function _decode_CertOrEncCert(el: _Element): CertOrEncCert {
  if (!_cached_decoder_for_CertOrEncCert) {
    _cached_decoder_for_CertOrEncCert = $._decode_inextensible_choice<CertOrEncCert>(
      {
        'CONTEXT 0': [
          'certificate',
          $._decode_explicit<CMPCertificate>(() => _decode_CMPCertificate),
        ],
        'CONTEXT 1': [
          'encryptedCert',
          $._decode_implicit<EncryptedValue>(() => _decode_EncryptedValue),
        ],
      }
    );
  }
  return _cached_decoder_for_CertOrEncCert(el);
}


let _cached_encoder_for_CertOrEncCert: $.ASN1Encoder<CertOrEncCert> | null = null;


/**
 * @summary Encodes a(n) CertOrEncCert into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertOrEncCert, encoded as an ASN.1 Element.
 */
export function _encode_CertOrEncCert(
  value: CertOrEncCert,
  elGetter: $.ASN1Encoder<CertOrEncCert>
): _Element {
  if (!_cached_encoder_for_CertOrEncCert) {
    _cached_encoder_for_CertOrEncCert = $._encode_choice<CertOrEncCert>(
      {
        certificate: $._encode_explicit(
          _TagClass.context,
          0,
          () => _encode_CMPCertificate,
          $.BER
        ),
        encryptedCert: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_EncryptedValue,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_CertOrEncCert(value, elGetter);
}


/* eslint-enable */
