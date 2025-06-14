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
  Certificate,
  _decode_Certificate,
  _encode_Certificate,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta.mjs';
import {
  SCVPCertID,
  _decode_SCVPCertID,
  _encode_SCVPCertID,
} from '../SCVP-2009/SCVPCertID.ta.mjs';

/**
 * @summary PKCReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCReference  ::=  CHOICE {
 *     cert          [0] Certificate,
 *     pkcRef        [1] SCVPCertID
 * }
 * ```
 */
export type PKCReference =
  | { cert: Certificate } /* CHOICE_ALT_ROOT */
  | { pkcRef: SCVPCertID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PKCReference: $.ASN1Decoder<PKCReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PKCReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCReference} The decoded data structure.
 */
export function _decode_PKCReference(el: _Element) {
  if (!_cached_decoder_for_PKCReference) {
    _cached_decoder_for_PKCReference = $._decode_inextensible_choice<PKCReference>(
      {
        'CONTEXT 0': [
          'cert',
          $._decode_implicit<Certificate>(() => _decode_Certificate),
        ],
        'CONTEXT 1': [
          'pkcRef',
          $._decode_implicit<SCVPCertID>(() => _decode_SCVPCertID),
        ],
      }
    );
  }
  return _cached_decoder_for_PKCReference(el);
}

let _cached_encoder_for_PKCReference: $.ASN1Encoder<PKCReference> | null = null;

/**
 * @summary Encodes a(n) PKCReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCReference, encoded as an ASN.1 Element.
 */
export function _encode_PKCReference(
  value: PKCReference,
  elGetter: $.ASN1Encoder<PKCReference>
) {
  if (!_cached_encoder_for_PKCReference) {
    _cached_encoder_for_PKCReference = $._encode_choice<PKCReference>(
      {
        cert: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_Certificate,
          $.BER
        ),
        pkcRef: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_SCVPCertID,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_PKCReference(value, elGetter);
}


/* eslint-enable */
