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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION XMLStringWithNoWhitespace */
/**
 * @summary XMLStringWithNoWhitespace
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XMLStringWithNoWhitespace  ::=  UTF8String (FROM(
 * {0, 0, 0, 33} .. {0, 0, 215, 255} |
 * {0, 0, 224, 0} .. {0, 0, 255, 253} |
 * {0, 1, 0, 0} .. {0, 16, 255, 253}))
 * ```
 */
export type XMLStringWithNoWhitespace = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION XMLStringWithNoWhitespace */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLStringWithNoWhitespace */
let _cached_decoder_for_XMLStringWithNoWhitespace: $.ASN1Decoder<XMLStringWithNoWhitespace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_XMLStringWithNoWhitespace */

/* START_OF_SYMBOL_DEFINITION _decode_XMLStringWithNoWhitespace */
/**
 * @summary Decodes an ASN.1 element into a(n) XMLStringWithNoWhitespace
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {XMLStringWithNoWhitespace} The decoded data structure.
 */
export function _decode_XMLStringWithNoWhitespace(el: _Element) {
  if (!_cached_decoder_for_XMLStringWithNoWhitespace) {
    _cached_decoder_for_XMLStringWithNoWhitespace = $._decodeUTF8String;
  }
  return _cached_decoder_for_XMLStringWithNoWhitespace(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_XMLStringWithNoWhitespace */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLStringWithNoWhitespace */
let _cached_encoder_for_XMLStringWithNoWhitespace: $.ASN1Encoder<XMLStringWithNoWhitespace> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_XMLStringWithNoWhitespace */

/* START_OF_SYMBOL_DEFINITION _encode_XMLStringWithNoWhitespace */
/**
 * @summary Encodes a(n) XMLStringWithNoWhitespace into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XMLStringWithNoWhitespace, encoded as an ASN.1 Element.
 */
export function _encode_XMLStringWithNoWhitespace(
  value: XMLStringWithNoWhitespace,
  elGetter: $.ASN1Encoder<XMLStringWithNoWhitespace>
) {
  if (!_cached_encoder_for_XMLStringWithNoWhitespace) {
    _cached_encoder_for_XMLStringWithNoWhitespace = $._encodeUTF8String;
  }
  return _cached_encoder_for_XMLStringWithNoWhitespace(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_XMLStringWithNoWhitespace */

/* eslint-enable */
