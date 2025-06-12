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
import { Token, _decode_Token, _encode_Token } from '../XSD/Token.ta.js';
export { Token, _decode_Token, _encode_Token } from '../XSD/Token.ta.js';

/* START_OF_SYMBOL_DEFINITION Name */
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
/* END_OF_SYMBOL_DEFINITION Name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Name */
let _cached_decoder_for_Name: $.ASN1Decoder<Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Name */

/* START_OF_SYMBOL_DEFINITION _decode_Name */
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
/* END_OF_SYMBOL_DEFINITION _decode_Name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Name */
let _cached_encoder_for_Name: $.ASN1Encoder<Name> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Name */

/* START_OF_SYMBOL_DEFINITION _encode_Name */
/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export function _encode_Name(value: Name, elGetter: $.ASN1Encoder<Name>) {
  if (!_cached_encoder_for_Name) {
    _cached_encoder_for_Name = _encode_Token;
  }
  return _cached_encoder_for_Name(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Name */

/* eslint-enable */
