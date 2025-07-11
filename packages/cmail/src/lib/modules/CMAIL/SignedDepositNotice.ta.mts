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
  SignedDepositNoticeType,
  _decode_SignedDepositNoticeType,
  _encode_SignedDepositNoticeType,
} from '../CMAIL/SignedDepositNoticeType.ta.mjs';

/**
 * @summary SignedDepositNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedDepositNotice      ::=  SignedDepositNoticeType
 * ```
 */
export type SignedDepositNotice = SignedDepositNoticeType; // DefinedType


let _cached_decoder_for_SignedDepositNotice: $.ASN1Decoder<SignedDepositNotice> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignedDepositNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedDepositNotice} The decoded data structure.
 */
export function _decode_SignedDepositNotice(el: _Element): SignedDepositNotice {
  if (!_cached_decoder_for_SignedDepositNotice) {
    _cached_decoder_for_SignedDepositNotice = _decode_SignedDepositNoticeType;
  }
  return _cached_decoder_for_SignedDepositNotice(el);
}


let _cached_encoder_for_SignedDepositNotice: $.ASN1Encoder<SignedDepositNotice> | null = null;


/**
 * @summary Encodes a(n) SignedDepositNotice into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedDepositNotice, encoded as an ASN.1 Element.
 */
export function _encode_SignedDepositNotice(
  value: SignedDepositNotice,
  elGetter: $.ASN1Encoder<SignedDepositNotice>
): _Element {
  if (!_cached_encoder_for_SignedDepositNotice) {
    _cached_encoder_for_SignedDepositNotice = _encode_SignedDepositNoticeType;
  }
  return _cached_encoder_for_SignedDepositNotice(value, elGetter);
}


/* eslint-enable */
