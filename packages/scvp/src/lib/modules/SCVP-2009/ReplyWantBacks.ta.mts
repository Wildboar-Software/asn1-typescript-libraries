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
  ReplyWantBack,
  _decode_ReplyWantBack,
  _encode_ReplyWantBack,
} from '../SCVP-2009/ReplyWantBack.ta.mjs';
/**
 * @summary ReplyWantBacks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyWantBacks  ::=  SEQUENCE OF ReplyWantBack
 * ```
 */
export type ReplyWantBacks = ReplyWantBack[]; // SequenceOfType

let _cached_decoder_for_ReplyWantBacks: $.ASN1Decoder<ReplyWantBacks> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReplyWantBacks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyWantBacks} The decoded data structure.
 */
export function _decode_ReplyWantBacks(el: _Element) {
  if (!_cached_decoder_for_ReplyWantBacks) {
    _cached_decoder_for_ReplyWantBacks = $._decodeSequenceOf<ReplyWantBack>(
      () => _decode_ReplyWantBack
    );
  }
  return _cached_decoder_for_ReplyWantBacks(el);
}

let _cached_encoder_for_ReplyWantBacks: $.ASN1Encoder<ReplyWantBacks> | null = null;

/**
 * @summary Encodes a(n) ReplyWantBacks into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyWantBacks, encoded as an ASN.1 Element.
 */
export function _encode_ReplyWantBacks(
  value: ReplyWantBacks,
  elGetter: $.ASN1Encoder<ReplyWantBacks>
) {
  if (!_cached_encoder_for_ReplyWantBacks) {
    _cached_encoder_for_ReplyWantBacks = $._encodeSequenceOf<ReplyWantBack>(
      () => _encode_ReplyWantBack,
      $.DER
    );
  }
  return _cached_encoder_for_ReplyWantBacks(value, elGetter);
}


/* eslint-enable */
