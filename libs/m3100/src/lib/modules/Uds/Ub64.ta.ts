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

/* START_OF_SYMBOL_DEFINITION Ub64 */
/**
 * @summary Ub64
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Ub64  ::=  UTF8String(SIZE (0..64))
 * ```
 */
export type Ub64 = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION Ub64 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Ub64 */
let _cached_decoder_for_Ub64: $.ASN1Decoder<Ub64> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Ub64 */

/* START_OF_SYMBOL_DEFINITION _decode_Ub64 */
/**
 * @summary Decodes an ASN.1 element into a(n) Ub64
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Ub64} The decoded data structure.
 */
export function _decode_Ub64(el: _Element) {
  if (!_cached_decoder_for_Ub64) {
    _cached_decoder_for_Ub64 = $._decodeUTF8String;
  }
  return _cached_decoder_for_Ub64(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Ub64 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Ub64 */
let _cached_encoder_for_Ub64: $.ASN1Encoder<Ub64> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Ub64 */

/* START_OF_SYMBOL_DEFINITION _encode_Ub64 */
/**
 * @summary Encodes a(n) Ub64 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ub64, encoded as an ASN.1 Element.
 */
export function _encode_Ub64(value: Ub64, elGetter: $.ASN1Encoder<Ub64>) {
  if (!_cached_encoder_for_Ub64) {
    _cached_encoder_for_Ub64 = $._encodeUTF8String;
  }
  return _cached_encoder_for_Ub64(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Ub64 */

/* eslint-enable */
