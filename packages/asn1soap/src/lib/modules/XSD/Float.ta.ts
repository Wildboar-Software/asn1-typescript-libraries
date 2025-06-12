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

/* START_OF_SYMBOL_DEFINITION Float */
/**
 * @summary Float
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Float  ::=     REAL (0 | MINUS-INFINITY | PLUS-INFINITY | NOT-A-NUMBER | WITH COMPONENTS {
 *             mantissa(-16777215..16777215),
 *             base(2),
 *             exponent(-149..104)})
 * ```
 */
export type Float = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION Float */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Float */
let _cached_decoder_for_Float: $.ASN1Decoder<Float> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Float */

/* START_OF_SYMBOL_DEFINITION _decode_Float */
/**
 * @summary Decodes an ASN.1 element into a(n) Float
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Float} The decoded data structure.
 */
export function _decode_Float(el: _Element) {
  if (!_cached_decoder_for_Float) {
    _cached_decoder_for_Float = $._decodeReal;
  }
  return _cached_decoder_for_Float(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Float */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Float */
let _cached_encoder_for_Float: $.ASN1Encoder<Float> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Float */

/* START_OF_SYMBOL_DEFINITION _encode_Float */
/**
 * @summary Encodes a(n) Float into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Float, encoded as an ASN.1 Element.
 */
export function _encode_Float(value: Float, elGetter: $.ASN1Encoder<Float>) {
  if (!_cached_encoder_for_Float) {
    _cached_encoder_for_Float = $._encodeReal;
  }
  return _cached_encoder_for_Float(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Float */

/* eslint-enable */
