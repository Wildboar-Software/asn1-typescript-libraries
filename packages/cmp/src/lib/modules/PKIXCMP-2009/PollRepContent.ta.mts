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
  PollRepContent_Item,
  _decode_PollRepContent_Item,
  _encode_PollRepContent_Item,
} from '../PKIXCMP-2009/PollRepContent-Item.ta.mjs';

/**
 * @summary PollRepContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PollRepContent  ::=  SEQUENCE OF SEQUENCE {
 *     certReqId              INTEGER,
 *     checkAfter             INTEGER,  -- time in seconds
 *     reason                 PKIFreeText OPTIONAL }
 * ```
 */
export type PollRepContent = PollRepContent_Item[]; // SequenceOfType


let _cached_decoder_for_PollRepContent: $.ASN1Decoder<PollRepContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PollRepContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PollRepContent} The decoded data structure.
 */
export function _decode_PollRepContent(el: _Element) {
  if (!_cached_decoder_for_PollRepContent) {
    _cached_decoder_for_PollRepContent = $._decodeSequenceOf<PollRepContent_Item>(
      () => _decode_PollRepContent_Item
    );
  }
  return _cached_decoder_for_PollRepContent(el);
}


let _cached_encoder_for_PollRepContent: $.ASN1Encoder<PollRepContent> | null = null;


/**
 * @summary Encodes a(n) PollRepContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PollRepContent, encoded as an ASN.1 Element.
 */
export function _encode_PollRepContent(
  value: PollRepContent,
  elGetter: $.ASN1Encoder<PollRepContent>
) {
  if (!_cached_encoder_for_PollRepContent) {
    _cached_encoder_for_PollRepContent = $._encodeSequenceOf<PollRepContent_Item>(
      () => _encode_PollRepContent_Item,
      $.BER
    );
  }
  return _cached_encoder_for_PollRepContent(value, elGetter);
}


/* eslint-enable */
