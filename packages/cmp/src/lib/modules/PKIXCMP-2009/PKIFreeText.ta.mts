/* eslint-disable */
import {
  UTF8String,
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


/**
 * @summary PKIFreeText
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIFreeText  ::=  SEQUENCE SIZE (1..MAX) OF UTF8String
 * ```
 */
export type PKIFreeText = UTF8String[]; // SequenceOfType


let _cached_decoder_for_PKIFreeText: $.ASN1Decoder<PKIFreeText> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PKIFreeText
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIFreeText} The decoded data structure.
 */
export function _decode_PKIFreeText(el: _Element) {
  if (!_cached_decoder_for_PKIFreeText) {
    _cached_decoder_for_PKIFreeText = $._decodeSequenceOf<UTF8String>(
      () => $._decodeUTF8String
    );
  }
  return _cached_decoder_for_PKIFreeText(el);
}


let _cached_encoder_for_PKIFreeText: $.ASN1Encoder<PKIFreeText> | null = null;


/**
 * @summary Encodes a(n) PKIFreeText into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIFreeText, encoded as an ASN.1 Element.
 */
export function _encode_PKIFreeText(
  value: PKIFreeText,
  elGetter: $.ASN1Encoder<PKIFreeText>
) {
  if (!_cached_encoder_for_PKIFreeText) {
    _cached_encoder_for_PKIFreeText = $._encodeSequenceOf<UTF8String>(
      () => $._encodeUTF8String,
      $.BER
    );
  }
  return _cached_encoder_for_PKIFreeText(value, elGetter);
}


/* eslint-enable */
