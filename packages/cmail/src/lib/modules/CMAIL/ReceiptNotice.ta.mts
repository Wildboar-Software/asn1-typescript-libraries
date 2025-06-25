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
  ReceiptNoticeType,
  _decode_ReceiptNoticeType,
  _encode_ReceiptNoticeType,
} from '../CMAIL/ReceiptNoticeType.ta.mjs';

/**
 * @summary ReceiptNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceiptNotice         ::=  ReceiptNoticeType
 * ```
 */
export type ReceiptNotice = ReceiptNoticeType; // DefinedType


let _cached_decoder_for_ReceiptNotice: $.ASN1Decoder<ReceiptNotice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ReceiptNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceiptNotice} The decoded data structure.
 */
export function _decode_ReceiptNotice(el: _Element): ReceiptNotice {
  if (!_cached_decoder_for_ReceiptNotice) {
    _cached_decoder_for_ReceiptNotice = _decode_ReceiptNoticeType;
  }
  return _cached_decoder_for_ReceiptNotice(el);
}


let _cached_encoder_for_ReceiptNotice: $.ASN1Encoder<ReceiptNotice> | null = null;


/**
 * @summary Encodes a(n) ReceiptNotice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceiptNotice, encoded as an ASN.1 Element.
 */
export function _encode_ReceiptNotice(
  value: ReceiptNotice,
  elGetter: $.ASN1Encoder<ReceiptNotice>
): _Element {
  if (!_cached_encoder_for_ReceiptNotice) {
    _cached_encoder_for_ReceiptNotice = _encode_ReceiptNoticeType;
  }
  return _cached_encoder_for_ReceiptNotice(value, elGetter);
}


/* eslint-enable */
