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

/* START_OF_SYMBOL_DEFINITION GMonth */
/**
 * @summary GMonth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GMonth  ::=  DateTimeType (Month)
 * ```
 */
export type GMonth = DateTimeType; // DefinedType
/* END_OF_SYMBOL_DEFINITION GMonth */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GMonth */
let _cached_decoder_for_GMonth: $.ASN1Decoder<GMonth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GMonth */

/* START_OF_SYMBOL_DEFINITION _decode_GMonth */
/**
 * @summary Decodes an ASN.1 element into a(n) GMonth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GMonth} The decoded data structure.
 */
export function _decode_GMonth(el: _Element) {
  if (!_cached_decoder_for_GMonth) {
    _cached_decoder_for_GMonth = _decode_DateTimeType;
  }
  return _cached_decoder_for_GMonth(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GMonth */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GMonth */
let _cached_encoder_for_GMonth: $.ASN1Encoder<GMonth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GMonth */

/* START_OF_SYMBOL_DEFINITION _encode_GMonth */
/**
 * @summary Encodes a(n) GMonth into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GMonth, encoded as an ASN.1 Element.
 */
export function _encode_GMonth(value: GMonth, elGetter: $.ASN1Encoder<GMonth>) {
  if (!_cached_encoder_for_GMonth) {
    _cached_encoder_for_GMonth = _encode_DateTimeType;
  }
  return _cached_encoder_for_GMonth(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GMonth */

/* eslint-enable */
