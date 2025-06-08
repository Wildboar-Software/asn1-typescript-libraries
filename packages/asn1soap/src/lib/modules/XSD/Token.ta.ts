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
import * as $ from 'asn1-ts/dist/node/functional';
import {
  NormalizedString,
  _decode_NormalizedString,
  _encode_NormalizedString,
} from '../XSD/NormalizedString.ta';
export {
  NormalizedString,
  _decode_NormalizedString,
  _encode_NormalizedString,
} from '../XSD/NormalizedString.ta';

/* START_OF_SYMBOL_DEFINITION Token */
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
/* END_OF_SYMBOL_DEFINITION Token */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Token */
let _cached_decoder_for_Token: $.ASN1Decoder<Token> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Token */

/* START_OF_SYMBOL_DEFINITION _decode_Token */
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
/* END_OF_SYMBOL_DEFINITION _decode_Token */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Token */
let _cached_encoder_for_Token: $.ASN1Encoder<Token> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Token */

/* START_OF_SYMBOL_DEFINITION _encode_Token */
/**
 * @summary Encodes a(n) Token into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Token, encoded as an ASN.1 Element.
 */
export function _encode_Token(value: Token, elGetter: $.ASN1Encoder<Token>) {
  if (!_cached_encoder_for_Token) {
    _cached_encoder_for_Token = _encode_NormalizedString;
  }
  return _cached_encoder_for_Token(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Token */

/* eslint-enable */
