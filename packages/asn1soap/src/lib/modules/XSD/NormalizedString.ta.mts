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
import * as $ from '@wildboar/asn1/functional';
import { String, _decode_String, _encode_String } from '../XSD/String.ta.mjs';

/**
 * @summary NormalizedString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NormalizedString  ::=  String (XMLStringWithNoCRLFHT)
 * (CONSTRAINED BY {
 *     / * The String shall be a normalizedString as defined in W3C XML Schema
 *        Part 2, 3.3.1 * /})
 * ```
 */
export type NormalizedString = String; // DefinedType


let _cached_decoder_for_NormalizedString: $.ASN1Decoder<NormalizedString> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NormalizedString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NormalizedString} The decoded data structure.
 */
export function _decode_NormalizedString(el: _Element) {
  if (!_cached_decoder_for_NormalizedString) {
    _cached_decoder_for_NormalizedString = _decode_String;
  }
  return _cached_decoder_for_NormalizedString(el);
}


let _cached_encoder_for_NormalizedString: $.ASN1Encoder<NormalizedString> | null = null;


/**
 * @summary Encodes a(n) NormalizedString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NormalizedString, encoded as an ASN.1 Element.
 */
export function _encode_NormalizedString(
  value: NormalizedString,
  elGetter: $.ASN1Encoder<NormalizedString>
) {
  if (!_cached_encoder_for_NormalizedString) {
    _cached_encoder_for_NormalizedString = _encode_String;
  }
  return _cached_encoder_for_NormalizedString(value, elGetter);
}


/* eslint-enable */
