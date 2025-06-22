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
  NormalizedString,
  _decode_NormalizedString,
  _encode_NormalizedString,
} from '../XSD/NormalizedString.ta.mjs';

/**
 * @summary Token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Token  ::=  NormalizedString (CONSTRAINED BY {
 * / * The NormalizedString shall be a token as defined in W3C XML Schema Part 2,
 *    3.3.2 * /})
 * ```
 */
export type Token = NormalizedString; // DefinedType


let _cached_decoder_for_Token: $.ASN1Decoder<Token> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Token
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Token} The decoded data structure.
 */
export function _decode_Token(el: _Element) {
  if (!_cached_decoder_for_Token) {
    _cached_decoder_for_Token = _decode_NormalizedString;
  }
  return _cached_decoder_for_Token(el);
}


let _cached_encoder_for_Token: $.ASN1Encoder<Token> | null = null;


/**
 * @summary Encodes a(n) Token into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Token, encoded as an ASN.1 Element.
 */
export function _encode_Token(value: Token, elGetter: $.ASN1Encoder<Token>) {
  if (!_cached_encoder_for_Token) {
    _cached_encoder_for_Token = _encode_NormalizedString;
  }
  return _cached_encoder_for_Token(value, elGetter);
}


/* eslint-enable */
