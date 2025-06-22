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
  DepositNoticeType,
  _decode_DepositNoticeType,
  _encode_DepositNoticeType,
} from '../CMAIL/DepositNoticeType.ta.mjs';

/**
 * @summary DepositNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DepositNotice          ::=  DepositNoticeType
 * ```
 */
export type DepositNotice = DepositNoticeType; // DefinedType


let _cached_decoder_for_DepositNotice: $.ASN1Decoder<DepositNotice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DepositNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DepositNotice} The decoded data structure.
 */
export function _decode_DepositNotice(el: _Element) {
  if (!_cached_decoder_for_DepositNotice) {
    _cached_decoder_for_DepositNotice = _decode_DepositNoticeType;
  }
  return _cached_decoder_for_DepositNotice(el);
}


let _cached_encoder_for_DepositNotice: $.ASN1Encoder<DepositNotice> | null = null;


/**
 * @summary Encodes a(n) DepositNotice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DepositNotice, encoded as an ASN.1 Element.
 */
export function _encode_DepositNotice(
  value: DepositNotice,
  elGetter: $.ASN1Encoder<DepositNotice>
) {
  if (!_cached_encoder_for_DepositNotice) {
    _cached_encoder_for_DepositNotice = _encode_DepositNoticeType;
  }
  return _cached_encoder_for_DepositNotice(value, elGetter);
}


/* eslint-enable */
