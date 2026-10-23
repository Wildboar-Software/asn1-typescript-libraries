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
 * Matcher for a user-identity attribute; same encoding as
 * `String-Pattern`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-Identity-Pattern  ::=  String-Pattern
 * ```
 */
export type User_Identity_Pattern = String_Pattern; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) User_Identity_Pattern
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_Identity_Pattern} The decoded data structure.
 */
export const _decode_User_Identity_Pattern: $.ASN1Decoder<User_Identity_Pattern> = _decode_String_Pattern;

/**
 * @summary Encodes a(n) User_Identity_Pattern into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_Identity_Pattern, encoded as an ASN.1 Element.
 */
export const _encode_User_Identity_Pattern: $.ASN1Encoder<User_Identity_Pattern> = _encode_String_Pattern;


/* eslint-enable */
