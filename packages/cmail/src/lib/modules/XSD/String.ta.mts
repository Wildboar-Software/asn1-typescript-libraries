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
  XMLCompatibleString,
  _decode_XMLCompatibleString,
  _encode_XMLCompatibleString,
} from '../XSD/XMLCompatibleString.ta.mjs';

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


let _cached_decoder_for_String: $.ASN1Decoder<String> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) String
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {String} The decoded data structure.
 */
export function _decode_String(el: _Element): String {
  if (!_cached_decoder_for_String) {
    _cached_decoder_for_String = _decode_XMLCompatibleString;
  }
  return _cached_decoder_for_String(el);
}


let _cached_encoder_for_String: $.ASN1Encoder<String> | null = null;


/**
 * @summary Encodes a(n) String into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The String, encoded as an ASN.1 Element.
 */
export function _encode_String(value: String, elGetter: $.ASN1Encoder<String>): _Element {
  if (!_cached_encoder_for_String) {
    _cached_encoder_for_String = _encode_XMLCompatibleString;
  }
  return _cached_encoder_for_String(value, elGetter);
}


/* eslint-enable */
