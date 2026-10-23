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
import { String, _decode_String, _encode_String } from '../XSD/String.ta.mjs';

/**
 * @summary NormalizedString
 * @description
 *
 * Mapping of XML Schema `xsd:normalizedString` (Part 2, 3.3.1):
 * no CR, LF, or TAB. ITU-T Rec. X.694 | ISO/IEC 8825-5.
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

/**
 * @summary Decodes an ASN.1 element into a(n) NormalizedString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NormalizedString} The decoded data structure.
 */
export const _decode_NormalizedString: $.ASN1Decoder<NormalizedString> = _decode_String;

/**
 * @summary Encodes a(n) NormalizedString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NormalizedString, encoded as an ASN.1 Element.
 */
export const _encode_NormalizedString: $.ASN1Encoder<NormalizedString> = _encode_String;


/* eslint-enable */
