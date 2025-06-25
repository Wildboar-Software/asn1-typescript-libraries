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
  PollReqContent_Item,
  _decode_PollReqContent_Item,
  _encode_PollReqContent_Item,
} from '../PKIXCMP-2009/PollReqContent-Item.ta.mjs';

/**
 * @summary PollReqContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PollReqContent  ::=  SEQUENCE OF SEQUENCE {
 *     certReqId              INTEGER }
 * ```
 */
export type PollReqContent = PollReqContent_Item[]; // SequenceOfType


let _cached_decoder_for_PollReqContent: $.ASN1Decoder<PollReqContent> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PollReqContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PollReqContent} The decoded data structure.
 */
export function _decode_PollReqContent(el: _Element): PollReqContent {
  if (!_cached_decoder_for_PollReqContent) {
    _cached_decoder_for_PollReqContent = $._decodeSequenceOf<PollReqContent_Item>(
      () => _decode_PollReqContent_Item
    );
  }
  return _cached_decoder_for_PollReqContent(el);
}


let _cached_encoder_for_PollReqContent: $.ASN1Encoder<PollReqContent> | null = null;


/**
 * @summary Encodes a(n) PollReqContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PollReqContent, encoded as an ASN.1 Element.
 */
export function _encode_PollReqContent(
  value: PollReqContent,
  elGetter: $.ASN1Encoder<PollReqContent>
): _Element {
  if (!_cached_encoder_for_PollReqContent) {
    _cached_encoder_for_PollReqContent = $._encodeSequenceOf<PollReqContent_Item>(
      () => _encode_PollReqContent_Item,
      $.BER
    );
  }
  return _cached_encoder_for_PollReqContent(value, elGetter);
}


/* eslint-enable */
