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
  InfoTypeAndValue,
  _decode_InfoTypeAndValue,
  _encode_InfoTypeAndValue,
} from '../PKIXCMP-2009/InfoTypeAndValue.ta.mjs';

/**
 * @summary GenRepContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenRepContent  ::=  SEQUENCE OF InfoTypeAndValue
 * ```
 */
export type GenRepContent = InfoTypeAndValue[]; // SequenceOfType


let _cached_decoder_for_GenRepContent: $.ASN1Decoder<GenRepContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GenRepContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GenRepContent} The decoded data structure.
 */
export function _decode_GenRepContent(el: _Element) {
  if (!_cached_decoder_for_GenRepContent) {
    _cached_decoder_for_GenRepContent = $._decodeSequenceOf<InfoTypeAndValue>(
      () => _decode_InfoTypeAndValue
    );
  }
  return _cached_decoder_for_GenRepContent(el);
}


let _cached_encoder_for_GenRepContent: $.ASN1Encoder<GenRepContent> | null = null;


/**
 * @summary Encodes a(n) GenRepContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenRepContent, encoded as an ASN.1 Element.
 */
export function _encode_GenRepContent(
  value: GenRepContent,
  elGetter: $.ASN1Encoder<GenRepContent>
) {
  if (!_cached_encoder_for_GenRepContent) {
    _cached_encoder_for_GenRepContent = $._encodeSequenceOf<InfoTypeAndValue>(
      () => _encode_InfoTypeAndValue,
      $.BER
    );
  }
  return _cached_encoder_for_GenRepContent(value, elGetter);
}


/* eslint-enable */
