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
  Language,
  _decode_Language,
  _encode_Language,
} from '../XSD/Language.ta';
export {
  Language,
  _decode_Language,
  _encode_Language,
} from '../XSD/Language.ta';

/* START_OF_SYMBOL_DEFINITION Lang */
/**
 * @summary Lang
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Lang  ::=  Language
 * ```
 */
export type Lang = Language; // DefinedType
/* END_OF_SYMBOL_DEFINITION Lang */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Lang */
let _cached_decoder_for_Lang: $.ASN1Decoder<Lang> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Lang */

/* START_OF_SYMBOL_DEFINITION _decode_Lang */
/**
 * @summary Decodes an ASN.1 element into a(n) Lang
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Lang} The decoded data structure.
 */
export function _decode_Lang(el: _Element) {
  if (!_cached_decoder_for_Lang) {
    _cached_decoder_for_Lang = _decode_Language;
  }
  return _cached_decoder_for_Lang(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Lang */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Lang */
let _cached_encoder_for_Lang: $.ASN1Encoder<Lang> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Lang */

/* START_OF_SYMBOL_DEFINITION _encode_Lang */
/**
 * @summary Encodes a(n) Lang into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Lang, encoded as an ASN.1 Element.
 */
export function _encode_Lang(value: Lang, elGetter: $.ASN1Encoder<Lang>) {
  if (!_cached_encoder_for_Lang) {
    _cached_encoder_for_Lang = _encode_Language;
  }
  return _cached_encoder_for_Lang(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Lang */

/* eslint-enable */
