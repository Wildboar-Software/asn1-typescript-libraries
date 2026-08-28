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
  HeaderBlock,
  _decode_HeaderBlock,
  _encode_HeaderBlock,
} from '../ASN1SOAP/HeaderBlock.ta.mjs';

/**
 * @summary Header
 * @description
 *
 * Ordered SOAP header blocks. Empty means no SOAP Header element
 * is generated. Each block is mapped in order to a child of Header.
 * ITU-T Rec. X.892 (05/2005)
 * [§7.2](https://www.itu.int/rec/T-REC-X.892-200505-I), Table 1.
 * W3C SOAP 1.2 Part 1
 * [§5.2](https://www.w3.org/TR/2003/REC-soap12-part1-20030624/#soaphead).
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
export function _decode_Header(el: _Element): Header {
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
export function _encode_Header(value: Header, elGetter: $.ASN1Encoder<Header>): _Element {
  if (!_cached_encoder_for_Header) {
    _cached_encoder_for_Header = $._encodeSequenceOf<HeaderBlock>(
      () => _encode_HeaderBlock,
      $.BER
    );
  }
  return _cached_encoder_for_Header(value, elGetter);
}


/* eslint-enable */
