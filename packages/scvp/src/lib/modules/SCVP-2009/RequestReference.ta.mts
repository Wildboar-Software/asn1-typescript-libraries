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
  HashValue,
  _decode_HashValue,
  _encode_HashValue,
} from '../SCVP-2009/HashValue.ta.mjs';
import {
  CVRequest,
  _decode_CVRequest,
  _encode_CVRequest,
} from '../SCVP-2009/CVRequest.ta.mjs';
/**
 * @summary RequestReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestReference  ::=  CHOICE {
 *     requestHash   [0] HashValue, -- hash of CVRequest
 *     fullRequest   [1] CVRequest }
 * ```
 */
export type RequestReference =
  | { requestHash: HashValue } /* CHOICE_ALT_ROOT */
  | { fullRequest: CVRequest } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RequestReference: $.ASN1Decoder<RequestReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestReference} The decoded data structure.
 */
export function _decode_RequestReference(el: _Element) {
  if (!_cached_decoder_for_RequestReference) {
    _cached_decoder_for_RequestReference = $._decode_inextensible_choice<RequestReference>(
      {
        'CONTEXT 0': [
          'requestHash',
          $._decode_implicit<HashValue>(() => _decode_HashValue),
        ],
        'CONTEXT 1': [
          'fullRequest',
          $._decode_implicit<CVRequest>(() => _decode_CVRequest),
        ],
      }
    );
  }
  return _cached_decoder_for_RequestReference(el);
}

let _cached_encoder_for_RequestReference: $.ASN1Encoder<RequestReference> | null = null;

/**
 * @summary Encodes a(n) RequestReference into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReference, encoded as an ASN.1 Element.
 */
export function _encode_RequestReference(
  value: RequestReference,
  elGetter: $.ASN1Encoder<RequestReference>
) {
  if (!_cached_encoder_for_RequestReference) {
    _cached_encoder_for_RequestReference = $._encode_choice<RequestReference>(
      {
        requestHash: $._encode_implicit(
          _TagClass.context,
          0,
          () => _encode_HashValue,
          $.DER
        ),
        fullRequest: $._encode_implicit(
          _TagClass.context,
          1,
          () => _encode_CVRequest,
          $.DER
        ),
      },
      $.DER
    );
  }
  return _cached_encoder_for_RequestReference(value, elGetter);
}


/* eslint-enable */
