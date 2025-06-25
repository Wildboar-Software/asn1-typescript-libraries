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
  PKCReference,
  _decode_PKCReference,
  _encode_PKCReference,
} from '../SCVP-2009/PKCReference.ta.mjs';
import {
  ACReference,
  _decode_ACReference,
  _encode_ACReference,
} from '../SCVP-2009/ACReference.ta.mjs';
/**
 * @summary CertReferences
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReferences  ::=  CHOICE {
 *     pkcRefs       [0] SEQUENCE SIZE (1..MAX) OF PKCReference,
 *     acRefs        [1] SEQUENCE SIZE (1..MAX) OF ACReference
 * }
 * ```
 */
export type CertReferences =
  | { pkcRefs: PKCReference[] } /* CHOICE_ALT_ROOT */
  | { acRefs: ACReference[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CertReferences: $.ASN1Decoder<CertReferences> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertReferences
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReferences} The decoded data structure.
 */
export function _decode_CertReferences(el: _Element): CertReferences {
  if (!_cached_decoder_for_CertReferences) {
    _cached_decoder_for_CertReferences = $._decode_inextensible_choice<CertReferences>(
      {
        'CONTEXT 0': [
          'pkcRefs',
          $._decode_implicit<PKCReference[]>(() =>
            $._decodeSequenceOf<PKCReference>(() => _decode_PKCReference)
          ),
        ],
        'CONTEXT 1': [
          'acRefs',
          $._decode_implicit<ACReference[]>(() =>
            $._decodeSequenceOf<ACReference>(() => _decode_ACReference)
          ),
        ],
      }
    );
  }
  return _cached_decoder_for_CertReferences(el);
}

let _cached_encoder_for_CertReferences: $.ASN1Encoder<CertReferences> | null = null;

/**
 * @summary Encodes a(n) CertReferences into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReferences, encoded as an ASN.1 Element.
 */
export function _encode_CertReferences(
  value: CertReferences,
  elGetter: $.ASN1Encoder<CertReferences>
): _Element {
  if (!_cached_encoder_for_CertReferences) {
    _cached_encoder_for_CertReferences = $._encode_choice<CertReferences>(
      {
        pkcRefs: $._encode_implicit(
          _TagClass.context,
          0,
          () =>
            $._encodeSequenceOf<PKCReference>(
              () => _encode_PKCReference,
              $.DER
            ),
          $.DER
        ),
        acRefs: $._encode_implicit(
          _TagClass.context,
          1,
          () =>
            $._encodeSequenceOf<ACReference>(() => _encode_ACReference, $.DER),
          $.DER
        ),
      },
      $.DER
    );
  }
  return _cached_encoder_for_CertReferences(value, elGetter);
}


/* eslint-enable */
