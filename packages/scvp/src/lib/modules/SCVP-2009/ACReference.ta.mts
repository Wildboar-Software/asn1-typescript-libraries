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
  AttributeCertificate,
  _decode_AttributeCertificate,
  _encode_AttributeCertificate,
} from '@wildboar/x500/AttributeCertificateDefinitions';
import {
  SCVPCertID,
  _decode_SCVPCertID,
  _encode_SCVPCertID,
} from '../SCVP-2009/SCVPCertID.ta.mjs';

/**
 * @summary ACReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACReference  ::=  CHOICE {
 *     attrCert      [2] AttributeCertificate,
 *     acRef         [3] SCVPCertID
 * }
 * ```
 */
export type ACReference =
  | { attrCert: AttributeCertificate } /* CHOICE_ALT_ROOT */
  | { acRef: SCVPCertID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ACReference: $.ASN1Decoder<ACReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACReference} The decoded data structure.
 */
export function _decode_ACReference(el: _Element): ACReference {
  if (!_cached_decoder_for_ACReference) {
    _cached_decoder_for_ACReference = $._decode_inextensible_choice<ACReference>(
      {
        'CONTEXT 2': [
          'attrCert',
          $._decode_implicit<AttributeCertificate>(
            () => _decode_AttributeCertificate
          ),
        ],
        'CONTEXT 3': [
          'acRef',
          $._decode_implicit<SCVPCertID>(() => _decode_SCVPCertID),
        ],
      }
    );
  }
  return _cached_decoder_for_ACReference(el);
}

let _cached_encoder_for_ACReference: $.ASN1Encoder<ACReference> | null = null;

/**
 * @summary Encodes a(n) ACReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACReference, encoded as an ASN.1 Element.
 */
export function _encode_ACReference(
  value: ACReference,
  elGetter: $.ASN1Encoder<ACReference>
): _Element {
  if (!_cached_encoder_for_ACReference) {
    _cached_encoder_for_ACReference = $._encode_choice<ACReference>(
      {
        attrCert: $._encode_implicit(
          _TagClass.context,
          2,
          () => _encode_AttributeCertificate,
          $.DER
        ),
        acRef: $._encode_implicit(
          _TagClass.context,
          3,
          () => _encode_SCVPCertID,
          $.DER
        ),
      },
      $.DER
    );
  }
  return _cached_encoder_for_ACReference(value, elGetter);
}


/* eslint-enable */
