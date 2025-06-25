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
  SignedReceiptNoticeType,
  _decode_SignedReceiptNoticeType,
  _encode_SignedReceiptNoticeType,
} from '../CMAIL/SignedReceiptNoticeType.ta.mjs';

/**
 * @summary SignedReceiptNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedReceiptNotice     ::=  SignedReceiptNoticeType
 * ```
 */
export type SignedReceiptNotice = SignedReceiptNoticeType; // DefinedType


let _cached_decoder_for_SignedReceiptNotice: $.ASN1Decoder<SignedReceiptNotice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignedReceiptNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedReceiptNotice} The decoded data structure.
 */
export function _decode_SignedReceiptNotice(el: _Element): SignedReceiptNotice {
  if (!_cached_decoder_for_SignedReceiptNotice) {
    _cached_decoder_for_SignedReceiptNotice = _decode_SignedReceiptNoticeType;
  }
  return _cached_decoder_for_SignedReceiptNotice(el);
}


let _cached_encoder_for_SignedReceiptNotice: $.ASN1Encoder<SignedReceiptNotice> | null = null;


/**
 * @summary Encodes a(n) SignedReceiptNotice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedReceiptNotice, encoded as an ASN.1 Element.
 */
export function _encode_SignedReceiptNotice(
  value: SignedReceiptNotice,
  elGetter: $.ASN1Encoder<SignedReceiptNotice>
): _Element {
  if (!_cached_encoder_for_SignedReceiptNotice) {
    _cached_encoder_for_SignedReceiptNotice = _encode_SignedReceiptNoticeType;
  }
  return _cached_encoder_for_SignedReceiptNotice(value, elGetter);
}


/* eslint-enable */
