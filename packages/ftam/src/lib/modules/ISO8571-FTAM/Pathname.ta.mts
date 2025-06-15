/* eslint-disable */
import {
  GraphicString,
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


/**
 * @summary Pathname
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Pathname  ::=  SEQUENCE OF GraphicString
 * ```
 */
export type Pathname = GraphicString[]; // SequenceOfType


let _cached_decoder_for_Pathname: $.ASN1Decoder<Pathname> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Pathname
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Pathname} The decoded data structure.
 */
export function _decode_Pathname(el: _Element) {
  if (!_cached_decoder_for_Pathname) {
    _cached_decoder_for_Pathname = $._decodeSequenceOf<GraphicString>(
      () => $._decodeGraphicString
    );
  }
  return _cached_decoder_for_Pathname(el);
}


let _cached_encoder_for_Pathname: $.ASN1Encoder<Pathname> | null = null;


/**
 * @summary Encodes a(n) Pathname into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Pathname, encoded as an ASN.1 Element.
 */
export function _encode_Pathname(
  value: Pathname,
  elGetter: $.ASN1Encoder<Pathname>
) {
  if (!_cached_encoder_for_Pathname) {
    _cached_encoder_for_Pathname = $._encodeSequenceOf<GraphicString>(
      () => $._encodeGraphicString,
      $.BER
    );
  }
  return _cached_encoder_for_Pathname(value, elGetter);
}


/* eslint-enable */
