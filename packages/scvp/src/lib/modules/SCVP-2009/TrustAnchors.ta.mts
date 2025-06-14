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
  PKCReference,
  _decode_PKCReference,
  _encode_PKCReference,
} from '../SCVP-2009/PKCReference.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TrustAnchors */
/**
 * @summary TrustAnchors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TrustAnchors  ::=  SEQUENCE SIZE (1..MAX) OF PKCReference
 * ```
 */
export type TrustAnchors = PKCReference[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION TrustAnchors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchors */
let _cached_decoder_for_TrustAnchors: $.ASN1Decoder<TrustAnchors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TrustAnchors */

/* START_OF_SYMBOL_DEFINITION _decode_TrustAnchors */
/**
 * @summary Decodes an ASN.1 element into a(n) TrustAnchors
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TrustAnchors} The decoded data structure.
 */
export function _decode_TrustAnchors(el: _Element) {
  if (!_cached_decoder_for_TrustAnchors) {
    _cached_decoder_for_TrustAnchors = $._decodeSequenceOf<PKCReference>(
      () => _decode_PKCReference
    );
  }
  return _cached_decoder_for_TrustAnchors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TrustAnchors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchors */
let _cached_encoder_for_TrustAnchors: $.ASN1Encoder<TrustAnchors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TrustAnchors */

/* START_OF_SYMBOL_DEFINITION _encode_TrustAnchors */
/**
 * @summary Encodes a(n) TrustAnchors into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TrustAnchors, encoded as an ASN.1 Element.
 */
export function _encode_TrustAnchors(
  value: TrustAnchors,
  elGetter: $.ASN1Encoder<TrustAnchors>
) {
  if (!_cached_encoder_for_TrustAnchors) {
    _cached_encoder_for_TrustAnchors = $._encodeSequenceOf<PKCReference>(
      () => _encode_PKCReference,
      $.BER
    );
  }
  return _cached_encoder_for_TrustAnchors(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TrustAnchors */

/* eslint-enable */
