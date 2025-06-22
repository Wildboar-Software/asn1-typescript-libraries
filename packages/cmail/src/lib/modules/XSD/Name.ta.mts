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
import { Token, _decode_Token, _encode_Token } from '../XSD/Token.ta.mjs';

/**
 * @summary Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Name  ::=  Token (XMLStringWithNoWhitespace)
 * (CONSTRAINED BY {
 *                   / * The Token shall be a Name as defined in W3C XML 1.0, 2.3 * / } )
 * ```
 */
export type Name = Token; // DefinedType


let _cached_decoder_for_Name: $.ASN1Decoder<Name> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name} The decoded data structure.
 */
export function _decode_Name(el: _Element) {
  if (!_cached_decoder_for_Name) {
    _cached_decoder_for_Name = _decode_Token;
  }
  return _cached_decoder_for_Name(el);
}


let _cached_encoder_for_Name: $.ASN1Encoder<Name> | null = null;


/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export function _encode_Name(value: Name, elGetter: $.ASN1Encoder<Name>) {
  if (!_cached_encoder_for_Name) {
    _cached_encoder_for_Name = _encode_Token;
  }
  return _cached_encoder_for_Name(value, elGetter);
}


/* eslint-enable */
