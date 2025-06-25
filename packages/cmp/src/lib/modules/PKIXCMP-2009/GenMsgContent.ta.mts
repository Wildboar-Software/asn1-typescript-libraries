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
  InfoTypeAndValue,
  _decode_InfoTypeAndValue,
  _encode_InfoTypeAndValue,
} from '../PKIXCMP-2009/InfoTypeAndValue.ta.mjs';

/**
 * @summary GenMsgContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenMsgContent  ::=  SEQUENCE OF InfoTypeAndValue
 * ```
 */
export type GenMsgContent = InfoTypeAndValue[]; // SequenceOfType


let _cached_decoder_for_GenMsgContent: $.ASN1Decoder<GenMsgContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) GenMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GenMsgContent} The decoded data structure.
 */
export function _decode_GenMsgContent(el: _Element): GenMsgContent {
  if (!_cached_decoder_for_GenMsgContent) {
    _cached_decoder_for_GenMsgContent = $._decodeSequenceOf<InfoTypeAndValue>(
      () => _decode_InfoTypeAndValue
    );
  }
  return _cached_decoder_for_GenMsgContent(el);
}


let _cached_encoder_for_GenMsgContent: $.ASN1Encoder<GenMsgContent> | null = null;


/**
 * @summary Encodes a(n) GenMsgContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenMsgContent, encoded as an ASN.1 Element.
 */
export function _encode_GenMsgContent(
  value: GenMsgContent,
  elGetter: $.ASN1Encoder<GenMsgContent>
): _Element {
  if (!_cached_encoder_for_GenMsgContent) {
    _cached_encoder_for_GenMsgContent = $._encodeSequenceOf<InfoTypeAndValue>(
      () => _encode_InfoTypeAndValue,
      $.BER
    );
  }
  return _cached_encoder_for_GenMsgContent(value, elGetter);
}


/* eslint-enable */
