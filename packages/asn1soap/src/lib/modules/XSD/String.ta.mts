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
  XMLCompatibleString,
  _decode_XMLCompatibleString,
  _encode_XMLCompatibleString,
} from '../XSD/XMLCompatibleString.ta.mjs';
/* START_OF_SYMBOL_DEFINITION String */
/**
 * @summary String
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * String  ::=     XMLCompatibleString
 * ```
 */
export type String = XMLCompatibleString; // DefinedType
/* END_OF_SYMBOL_DEFINITION String */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_String */
let _cached_decoder_for_String: $.ASN1Decoder<String> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_String */

/* START_OF_SYMBOL_DEFINITION _decode_String */
/**
 * @summary Decodes an ASN.1 element into a(n) String
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {String} The decoded data structure.
 */
export function _decode_String(el: _Element) {
  if (!_cached_decoder_for_String) {
    _cached_decoder_for_String = _decode_XMLCompatibleString;
  }
  return _cached_decoder_for_String(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_String */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_String */
let _cached_encoder_for_String: $.ASN1Encoder<String> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_String */

/* START_OF_SYMBOL_DEFINITION _encode_String */
/**
 * @summary Encodes a(n) String into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The String, encoded as an ASN.1 Element.
 */
export function _encode_String(value: String, elGetter: $.ASN1Encoder<String>) {
  if (!_cached_encoder_for_String) {
    _cached_encoder_for_String = _encode_XMLCompatibleString;
  }
  return _cached_encoder_for_String(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_String */

/* eslint-enable */
