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

/* START_OF_SYMBOL_DEFINITION Int32 */
/**
 * @summary Int32
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Int32            ::=  INTEGER (-2147483648..2147483647)
 * ```
 */
export type Int32 = INTEGER;
/* END_OF_SYMBOL_DEFINITION Int32 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Int32 */
let _cached_decoder_for_Int32: $.ASN1Decoder<Int32> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Int32 */

/* START_OF_SYMBOL_DEFINITION _decode_Int32 */
/**
 * @summary Decodes an ASN.1 element into a(n) Int32
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Int32} The decoded data structure.
 */
export function _decode_Int32(el: _Element) {
  if (!_cached_decoder_for_Int32) {
    _cached_decoder_for_Int32 = $._decodeInteger;
  }
  return _cached_decoder_for_Int32(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Int32 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Int32 */
let _cached_encoder_for_Int32: $.ASN1Encoder<Int32> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Int32 */

/* START_OF_SYMBOL_DEFINITION _encode_Int32 */
/**
 * @summary Encodes a(n) Int32 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Int32, encoded as an ASN.1 Element.
 */
export function _encode_Int32(value: Int32, elGetter: $.ASN1Encoder<Int32>) {
  if (!_cached_encoder_for_Int32) {
    _cached_encoder_for_Int32 = $._encodeInteger;
  }
  return _cached_encoder_for_Int32(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Int32 */

/* eslint-enable */
