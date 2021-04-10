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

/* START_OF_SYMBOL_DEFINITION AddrValidFrom */
/**
 * @summary AddrValidFrom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrValidFrom  ::=  DateTime
 * ```
 */
export type AddrValidFrom = DateTime; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddrValidFrom */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrValidFrom */
let _cached_decoder_for_AddrValidFrom: $.ASN1Decoder<AddrValidFrom> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrValidFrom */

/* START_OF_SYMBOL_DEFINITION _decode_AddrValidFrom */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrValidFrom
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrValidFrom} The decoded data structure.
 */
export function _decode_AddrValidFrom(el: _Element) {
  if (!_cached_decoder_for_AddrValidFrom) {
    _cached_decoder_for_AddrValidFrom = _decode_DateTime;
  }
  return _cached_decoder_for_AddrValidFrom(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrValidFrom */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrValidFrom */
let _cached_encoder_for_AddrValidFrom: $.ASN1Encoder<AddrValidFrom> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrValidFrom */

/* START_OF_SYMBOL_DEFINITION _encode_AddrValidFrom */
/**
 * @summary Encodes a(n) AddrValidFrom into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrValidFrom, encoded as an ASN.1 Element.
 */
export function _encode_AddrValidFrom(
  value: AddrValidFrom,
  elGetter: $.ASN1Encoder<AddrValidFrom>
) {
  if (!_cached_encoder_for_AddrValidFrom) {
    _cached_encoder_for_AddrValidFrom = _encode_DateTime;
  }
  return _cached_encoder_for_AddrValidFrom(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrValidFrom */

/* eslint-enable */
