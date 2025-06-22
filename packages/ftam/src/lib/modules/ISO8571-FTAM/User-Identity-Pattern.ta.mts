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
  String_Pattern,
  _decode_String_Pattern,
  _encode_String_Pattern,
} from '../ISO8571-FTAM/String-Pattern.ta.mjs';

/**
 * @summary User_Identity_Pattern
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-Identity-Pattern  ::=  String-Pattern
 * ```
 */
export type User_Identity_Pattern = String_Pattern; // DefinedType


let _cached_decoder_for_User_Identity_Pattern: $.ASN1Decoder<User_Identity_Pattern> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) User_Identity_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_Identity_Pattern} The decoded data structure.
 */
export function _decode_User_Identity_Pattern(el: _Element) {
  if (!_cached_decoder_for_User_Identity_Pattern) {
    _cached_decoder_for_User_Identity_Pattern = _decode_String_Pattern;
  }
  return _cached_decoder_for_User_Identity_Pattern(el);
}


let _cached_encoder_for_User_Identity_Pattern: $.ASN1Encoder<User_Identity_Pattern> | null = null;


/**
 * @summary Encodes a(n) User_Identity_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_Identity_Pattern, encoded as an ASN.1 Element.
 */
export function _encode_User_Identity_Pattern(
  value: User_Identity_Pattern,
  elGetter: $.ASN1Encoder<User_Identity_Pattern>
) {
  if (!_cached_encoder_for_User_Identity_Pattern) {
    _cached_encoder_for_User_Identity_Pattern = _encode_String_Pattern;
  }
  return _cached_encoder_for_User_Identity_Pattern(value, elGetter);
}


/* eslint-enable */
