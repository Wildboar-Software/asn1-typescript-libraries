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
/* START_OF_SYMBOL_DEFINITION Header */
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
/* END_OF_SYMBOL_DEFINITION Header */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Header */
let _cached_decoder_for_Header: $.ASN1Decoder<Header> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Header */

/* START_OF_SYMBOL_DEFINITION _decode_Header */
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
/* END_OF_SYMBOL_DEFINITION _decode_Header */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Header */
let _cached_encoder_for_Header: $.ASN1Encoder<Header> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Header */

/* START_OF_SYMBOL_DEFINITION _encode_Header */
/**
 * @summary Encodes a(n) Header into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_Header */

/* eslint-enable */
