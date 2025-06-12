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
import {
  Association_data,
  _decode_Association_data,
  _encode_Association_data,
} from '../ACSE-1/Association-data.ta.mjs';
export {
  Association_data,
  _decode_Association_data,
  _encode_Association_data,
} from '../ACSE-1/Association-data.ta.mjs';

/* START_OF_SYMBOL_DEFINITION User_information */
/**
 * @summary User_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * User-information  ::=  Association-data
 * ```
 */
export type User_information = Association_data; // DefinedType
/* END_OF_SYMBOL_DEFINITION User_information */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_User_information */
let _cached_decoder_for_User_information: $.ASN1Decoder<User_information> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_User_information */

/* START_OF_SYMBOL_DEFINITION _decode_User_information */
/**
 * @summary Decodes an ASN.1 element into a(n) User_information
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {User_information} The decoded data structure.
 */
export function _decode_User_information(el: _Element) {
  if (!_cached_decoder_for_User_information) {
    _cached_decoder_for_User_information = _decode_Association_data;
  }
  return _cached_decoder_for_User_information(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_User_information */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_User_information */
let _cached_encoder_for_User_information: $.ASN1Encoder<User_information> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_User_information */

/* START_OF_SYMBOL_DEFINITION _encode_User_information */
/**
 * @summary Encodes a(n) User_information into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The User_information, encoded as an ASN.1 Element.
 */
export function _encode_User_information(
  value: User_information,
  elGetter: $.ASN1Encoder<User_information>
) {
  if (!_cached_encoder_for_User_information) {
    _cached_encoder_for_User_information = _encode_Association_data;
  }
  return _cached_encoder_for_User_information(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_User_information */

/* eslint-enable */
