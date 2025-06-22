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
import * as $ from '@wildboar/asn1/functional';
import {
  Certificate,
  _decode_Certificate,
  _encode_Certificate,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta.mjs';


/**
 * @summary CMPCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMPCertificate  ::=  CHOICE { x509v3PKCert Certificate, ... }
 * ```
 */
export type CMPCertificate =
  | { x509v3PKCert: Certificate } /* CHOICE_ALT_ROOT */
  | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_CMPCertificate: $.ASN1Decoder<CMPCertificate> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CMPCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CMPCertificate} The decoded data structure.
 */
export function _decode_CMPCertificate(el: _Element) {
  if (!_cached_decoder_for_CMPCertificate) {
    _cached_decoder_for_CMPCertificate = $._decode_extensible_choice<CMPCertificate>(
      {
        'UNIVERSAL 16': ['x509v3PKCert', _decode_Certificate],
      }
    );
  }
  return _cached_decoder_for_CMPCertificate(el);
}


let _cached_encoder_for_CMPCertificate: $.ASN1Encoder<CMPCertificate> | null = null;


/**
 * @summary Encodes a(n) CMPCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMPCertificate, encoded as an ASN.1 Element.
 */
export function _encode_CMPCertificate(
  value: CMPCertificate,
  elGetter: $.ASN1Encoder<CMPCertificate>
) {
  if (!_cached_encoder_for_CMPCertificate) {
    _cached_encoder_for_CMPCertificate = $._encode_choice<CMPCertificate>(
      {
        x509v3PKCert: _encode_Certificate,
      },
      $.BER
    );
  }
  return _cached_encoder_for_CMPCertificate(value, elGetter);
}


/* eslint-enable */
