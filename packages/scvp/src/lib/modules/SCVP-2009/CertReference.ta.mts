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
 * @summary CertReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReference ::=  CHOICE {
 *
 *     pkc               PKCReference,
 *     ac                ACReference
 * }
 * ```
 */
export type CertReference =
  | { pkc: PKCReference } /* CHOICE_ALT_ROOT */
  | { ac: ACReference } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CertReference: $.ASN1Decoder<CertReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReference} The decoded data structure.
 */
export function _decode_CertReference(el: _Element): CertReference {
  if (!_cached_decoder_for_CertReference) {
    _cached_decoder_for_CertReference = $._decode_inextensible_choice<CertReference>(
      {
        'CONTEXT 0': ['pkc', _decode_PKCReference],
        'CONTEXT 1': ['pkc', _decode_PKCReference],
        'CONTEXT 2': ['ac', _decode_ACReference],
        'CONTEXT 3': ['ac', _decode_ACReference],
      }
    );
  }
  return _cached_decoder_for_CertReference(el);
}

let _cached_encoder_for_CertReference: $.ASN1Encoder<CertReference> | null = null;

/**
 * @summary Encodes a(n) CertReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReference, encoded as an ASN.1 Element.
 */
export function _encode_CertReference(
  value: CertReference,
  elGetter: $.ASN1Encoder<CertReference>
): _Element {
  if (!_cached_encoder_for_CertReference) {
    _cached_encoder_for_CertReference = $._encode_choice<CertReference>(
      {
        pkc: _encode_PKCReference,
        ac: _encode_ACReference,
      },
      $.DER
    );
  }
  return _cached_encoder_for_CertReference(value, elGetter);
}


/* eslint-enable */
