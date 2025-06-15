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
  HeaderBlock,
  _decode_HeaderBlock,
  _encode_HeaderBlock,
} from '../ASN1SOAP/HeaderBlock.ta.mjs';

/**
 * @summary Header
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Header  ::=  SEQUENCE OF HeaderBlock
 * ```
 */
export type Header = HeaderBlock[]; // SequenceOfType


let _cached_decoder_for_Header: $.ASN1Decoder<Header> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Header
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Header} The decoded data structure.
 */
export function _decode_Header(el: _Element) {
  if (!_cached_decoder_for_Header) {
    _cached_decoder_for_Header = $._decodeSequenceOf<HeaderBlock>(
      () => _decode_HeaderBlock
    );
  }
  return _cached_decoder_for_Header(el);
}


let _cached_encoder_for_Header: $.ASN1Encoder<Header> | null = null;


/**
 * @summary Encodes a(n) Header into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Header, encoded as an ASN.1 Element.
 */
export function _encode_Header(value: Header, elGetter: $.ASN1Encoder<Header>) {
  if (!_cached_encoder_for_Header) {
    _cached_encoder_for_Header = $._encodeSequenceOf<HeaderBlock>(
      () => _encode_HeaderBlock,
      $.BER
    );
  }
  return _cached_encoder_for_Header(value, elGetter);
}


/* eslint-enable */
