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
import { type Token, _decode_Token, _encode_Token } from '../XSD/Token.ta.mjs';

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

/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name} The decoded data structure.
 */
export const _decode_Name: $.ASN1Decoder<Name> = _decode_Token;

/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export const _encode_Name: $.ASN1Encoder<Name> = _encode_Token;


/* eslint-enable */
