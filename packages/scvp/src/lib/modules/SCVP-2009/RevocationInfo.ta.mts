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
  CertificateList,
  _decode_CertificateList,
  _encode_CertificateList,
} from '@wildboar/x500/AuthenticationFramework';
import {
  OCSPResponse,
  _decode_OCSPResponse,
  _encode_OCSPResponse,
} from '@wildboar/ocsp';
import {
  OtherRevInfo,
  _decode_OtherRevInfo,
  _encode_OtherRevInfo,
} from '../SCVP-2009/OtherRevInfo.ta.mjs';
/**
 * @summary RevocationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RevocationInfo  ::=  CHOICE {
 *     crl                    [0] CertificateList,
 *     delta-crl              [1] CertificateList,
 *     ocsp                   [2] OCSPResponse,
 *     other                  [3] OtherRevInfo
 * }
 * ```
 */
export type RevocationInfo =
  | { crl: CertificateList } /* CHOICE_ALT_ROOT */
  | { delta_crl: CertificateList } /* CHOICE_ALT_ROOT */
  | { ocsp: OCSPResponse } /* CHOICE_ALT_ROOT */
  | { other: OtherRevInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RevocationInfo: $.ASN1Decoder<RevocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RevocationInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RevocationInfo} The decoded data structure.
 */
export function _decode_RevocationInfo(el: _Element): RevocationInfo {
  if (!_cached_decoder_for_RevocationInfo) {
    _cached_decoder_for_RevocationInfo = $._decode_inextensible_choice<RevocationInfo>(
      {
        'CONTEXT 0': [
          'crl',
          $._decode_implicit<CertificateList>(() => _decode_CertificateList),
        ],
        'CONTEXT 1': [
          'delta_crl',
          $._decode_implicit<CertificateList>(() => _decode_CertificateList),
        ],
        'CONTEXT 2': [
          'ocsp',
          $._decode_implicit<OCSPResponse>(() => _decode_OCSPResponse),
        ],
        'CONTEXT 3': [
          'other',
          $._decode_implicit<OtherRevInfo>(() => _decode_OtherRevInfo),
        ],
      }
    );
  }
  return _cached_decoder_for_RevocationInfo(el);
}

let _cached_encoder_for_RevocationInfo: $.ASN1Encoder<RevocationInfo> | null = null;

/**
 * @summary Encodes a(n) RevocationInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RevocationInfo, encoded as an ASN.1 Element.
 */
export function _encode_RevocationInfo(
  value: RevocationInfo,
  elGetter: $.ASN1Encoder<RevocationInfo>
): _Element {
  if (!_cached_encoder_for_RevocationInfo) {
    _cached_encoder_for_RevocationInfo = $._encode_choice<RevocationInfo>(
      {
        crl: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_CertificateList,
          $.DER
        ),
        delta_crl: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_CertificateList,
          $.DER
        ),
        ocsp: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_OCSPResponse,
          $.DER
        ),
        other: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_OtherRevInfo,
          $.DER
        ),
      },
      $.DER
    );
  }
  return _cached_encoder_for_RevocationInfo(value, elGetter);
}


/* eslint-enable */
