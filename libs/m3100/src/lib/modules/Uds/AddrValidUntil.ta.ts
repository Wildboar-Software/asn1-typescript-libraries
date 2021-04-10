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
  DateTime,
  _decode_DateTime,
  _encode_DateTime,
} from '../XSD/DateTime.ta';
export {
  DateTime,
  _decode_DateTime,
  _encode_DateTime,
} from '../XSD/DateTime.ta';

/* START_OF_SYMBOL_DEFINITION AddrValidUntil */
/**
 * @summary AddrValidUntil
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrValidUntil  ::=  DateTime
 * ```
 */
export type AddrValidUntil = DateTime; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddrValidUntil */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrValidUntil */
let _cached_decoder_for_AddrValidUntil: $.ASN1Decoder<AddrValidUntil> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrValidUntil */

/* START_OF_SYMBOL_DEFINITION _decode_AddrValidUntil */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrValidUntil
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrValidUntil} The decoded data structure.
 */
export function _decode_AddrValidUntil(el: _Element) {
  if (!_cached_decoder_for_AddrValidUntil) {
    _cached_decoder_for_AddrValidUntil = _decode_DateTime;
  }
  return _cached_decoder_for_AddrValidUntil(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrValidUntil */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrValidUntil */
let _cached_encoder_for_AddrValidUntil: $.ASN1Encoder<AddrValidUntil> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrValidUntil */

/* START_OF_SYMBOL_DEFINITION _encode_AddrValidUntil */
/**
 * @summary Encodes a(n) AddrValidUntil into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrValidUntil, encoded as an ASN.1 Element.
 */
export function _encode_AddrValidUntil(
  value: AddrValidUntil,
  elGetter: $.ASN1Encoder<AddrValidUntil>
) {
  if (!_cached_encoder_for_AddrValidUntil) {
    _cached_encoder_for_AddrValidUntil = _encode_DateTime;
  }
  return _cached_encoder_for_AddrValidUntil(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrValidUntil */

/* eslint-enable */
