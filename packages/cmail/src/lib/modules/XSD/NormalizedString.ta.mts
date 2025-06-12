/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
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
import { String, _decode_String, _encode_String } from '../XSD/String.ta.mjs';
export { String, _decode_String, _encode_String } from '../XSD/String.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NormalizedString */
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
/* END_OF_SYMBOL_DEFINITION NormalizedString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NormalizedString */
let _cached_decoder_for_NormalizedString: $.ASN1Decoder<NormalizedString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NormalizedString */

/* START_OF_SYMBOL_DEFINITION _decode_NormalizedString */
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
/* END_OF_SYMBOL_DEFINITION _decode_NormalizedString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NormalizedString */
let _cached_encoder_for_NormalizedString: $.ASN1Encoder<NormalizedString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NormalizedString */

/* START_OF_SYMBOL_DEFINITION _encode_NormalizedString */
/**
 * @summary Encodes a(n) NormalizedString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
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

/* END_OF_SYMBOL_DEFINITION _encode_NormalizedString */

/* eslint-enable */
