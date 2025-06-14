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
  SignedTransitNoticeType,
  _decode_SignedTransitNoticeType,
  _encode_SignedTransitNoticeType,
} from '../CMAIL/SignedTransitNoticeType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SignedTransitNotice */
/**
 * @summary SignedTransitNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedTransitNotice     ::=  SignedTransitNoticeType
 * ```
 */
export type SignedTransitNotice = SignedTransitNoticeType; // DefinedType
/* END_OF_SYMBOL_DEFINITION SignedTransitNotice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedTransitNotice */
let _cached_decoder_for_SignedTransitNotice: $.ASN1Decoder<SignedTransitNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedTransitNotice */

/* START_OF_SYMBOL_DEFINITION _decode_SignedTransitNotice */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedTransitNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedTransitNotice} The decoded data structure.
 */
export function _decode_SignedTransitNotice(el: _Element) {
  if (!_cached_decoder_for_SignedTransitNotice) {
    _cached_decoder_for_SignedTransitNotice = _decode_SignedTransitNoticeType;
  }
  return _cached_decoder_for_SignedTransitNotice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedTransitNotice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedTransitNotice */
let _cached_encoder_for_SignedTransitNotice: $.ASN1Encoder<SignedTransitNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedTransitNotice */

/* START_OF_SYMBOL_DEFINITION _encode_SignedTransitNotice */
/**
 * @summary Encodes a(n) SignedTransitNotice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedTransitNotice, encoded as an ASN.1 Element.
 */
export function _encode_SignedTransitNotice(
  value: SignedTransitNotice,
  elGetter: $.ASN1Encoder<SignedTransitNotice>
) {
  if (!_cached_encoder_for_SignedTransitNotice) {
    _cached_encoder_for_SignedTransitNotice = _encode_SignedTransitNoticeType;
  }
  return _cached_encoder_for_SignedTransitNotice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedTransitNotice */

/* eslint-enable */
