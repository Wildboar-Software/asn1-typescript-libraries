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
  DateTimeType,
  _decode_DateTimeType,
  _encode_DateTimeType,
} from '../XSD/DateTimeType.ta';
export {
  DateTimeType,
  _decode_DateTimeType,
  _encode_DateTimeType,
} from '../XSD/DateTimeType.ta';

/* START_OF_SYMBOL_DEFINITION MonthDay */
/**
 * @summary MonthDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MonthDay  ::=  DateTimeType(FROM ("0".."9" | "Z:+-"))
 *             (CONSTRAINED BY {/ * W3C XML Schema Part 2, 3.2.12 * /})
 * ```
 */
export type MonthDay = DateTimeType; // DefinedType
/* END_OF_SYMBOL_DEFINITION MonthDay */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MonthDay */
let _cached_decoder_for_MonthDay: $.ASN1Decoder<MonthDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MonthDay */

/* START_OF_SYMBOL_DEFINITION _decode_MonthDay */
/**
 * @summary Decodes an ASN.1 element into a(n) MonthDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MonthDay} The decoded data structure.
 */
export function _decode_MonthDay(el: _Element) {
  if (!_cached_decoder_for_MonthDay) {
    _cached_decoder_for_MonthDay = _decode_DateTimeType;
  }
  return _cached_decoder_for_MonthDay(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MonthDay */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MonthDay */
let _cached_encoder_for_MonthDay: $.ASN1Encoder<MonthDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MonthDay */

/* START_OF_SYMBOL_DEFINITION _encode_MonthDay */
/**
 * @summary Encodes a(n) MonthDay into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonthDay, encoded as an ASN.1 Element.
 */
export function _encode_MonthDay(
  value: MonthDay,
  elGetter: $.ASN1Encoder<MonthDay>
) {
  if (!_cached_encoder_for_MonthDay) {
    _cached_encoder_for_MonthDay = _encode_DateTimeType;
  }
  return _cached_encoder_for_MonthDay(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MonthDay */

/* eslint-enable */
