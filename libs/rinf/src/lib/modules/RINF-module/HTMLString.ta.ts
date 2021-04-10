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

/* START_OF_SYMBOL_DEFINITION HTMLString */
/**
 * @summary HTMLString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HTMLString  ::=  UTF8String(CONSTRAINED BY {
 *      / * Shall be a valid HTML document (see [W3C HTML]) using only the markups
 *         <p>, <b>, </b>, <i>, </i>, <br/>, <a href> and </a> * /})
 * ```
 */
export type HTMLString = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION HTMLString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HTMLString */
let _cached_decoder_for_HTMLString: $.ASN1Decoder<HTMLString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HTMLString */

/* START_OF_SYMBOL_DEFINITION _decode_HTMLString */
/**
 * @summary Decodes an ASN.1 element into a(n) HTMLString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HTMLString} The decoded data structure.
 */
export function _decode_HTMLString(el: _Element) {
  if (!_cached_decoder_for_HTMLString) {
    _cached_decoder_for_HTMLString = $._decodeUTF8String;
  }
  return _cached_decoder_for_HTMLString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HTMLString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HTMLString */
let _cached_encoder_for_HTMLString: $.ASN1Encoder<HTMLString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HTMLString */

/* START_OF_SYMBOL_DEFINITION _encode_HTMLString */
/**
 * @summary Encodes a(n) HTMLString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HTMLString, encoded as an ASN.1 Element.
 */
export function _encode_HTMLString(
  value: HTMLString,
  elGetter: $.ASN1Encoder<HTMLString>
) {
  if (!_cached_encoder_for_HTMLString) {
    _cached_encoder_for_HTMLString = $._encodeUTF8String;
  }
  return _cached_encoder_for_HTMLString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HTMLString */

/* eslint-enable */
