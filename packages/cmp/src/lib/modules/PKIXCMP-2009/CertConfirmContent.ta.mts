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
  CertStatus,
  _decode_CertStatus,
  _encode_CertStatus,
} from '../PKIXCMP-2009/CertStatus.ta.mjs';

/**
 * @summary CertConfirmContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertConfirmContent  ::=  SEQUENCE OF CertStatus
 * ```
 */
export type CertConfirmContent = CertStatus[]; // SequenceOfType


let _cached_decoder_for_CertConfirmContent: $.ASN1Decoder<CertConfirmContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertConfirmContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertConfirmContent} The decoded data structure.
 */
export function _decode_CertConfirmContent(el: _Element) {
  if (!_cached_decoder_for_CertConfirmContent) {
    _cached_decoder_for_CertConfirmContent = $._decodeSequenceOf<CertStatus>(
      () => _decode_CertStatus
    );
  }
  return _cached_decoder_for_CertConfirmContent(el);
}


let _cached_encoder_for_CertConfirmContent: $.ASN1Encoder<CertConfirmContent> | null = null;


/**
 * @summary Encodes a(n) CertConfirmContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertConfirmContent, encoded as an ASN.1 Element.
 */
export function _encode_CertConfirmContent(
  value: CertConfirmContent,
  elGetter: $.ASN1Encoder<CertConfirmContent>
) {
  if (!_cached_encoder_for_CertConfirmContent) {
    _cached_encoder_for_CertConfirmContent = $._encodeSequenceOf<CertStatus>(
      () => _encode_CertStatus,
      $.BER
    );
  }
  return _cached_encoder_for_CertConfirmContent(value, elGetter);
}


/* eslint-enable */
