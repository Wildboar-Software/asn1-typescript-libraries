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

/* START_OF_SYMBOL_DEFINITION HeaderVersion_header_major */
/**
 * @summary HeaderVersion_header_major
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderVersion-header-major ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type HeaderVersion_header_major = INTEGER;
/* END_OF_SYMBOL_DEFINITION HeaderVersion_header_major */

/* START_OF_SYMBOL_DEFINITION HeaderVersion_header_major_version1 */
/**
 * @summary HeaderVersion_header_major_version1
 * @constant
 * @type {number}
 */
export const HeaderVersion_header_major_version1: HeaderVersion_header_major = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION HeaderVersion_header_major_version1 */

/* START_OF_SYMBOL_DEFINITION version1 */
/**
 * @summary HeaderVersion_header_major_version1
 * @constant
 * @type {number}
 */
export const version1: HeaderVersion_header_major = HeaderVersion_header_major_version1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION version1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderVersion_header_major */
let _cached_decoder_for_HeaderVersion_header_major: $.ASN1Decoder<HeaderVersion_header_major> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HeaderVersion_header_major */

/* START_OF_SYMBOL_DEFINITION _decode_HeaderVersion_header_major */
/**
 * @summary Decodes an ASN.1 element into a(n) HeaderVersion_header_major
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HeaderVersion_header_major} The decoded data structure.
 */
export function _decode_HeaderVersion_header_major(el: _Element) {
  if (!_cached_decoder_for_HeaderVersion_header_major) {
    _cached_decoder_for_HeaderVersion_header_major = $._decodeInteger;
  }
  return _cached_decoder_for_HeaderVersion_header_major(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HeaderVersion_header_major */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderVersion_header_major */
let _cached_encoder_for_HeaderVersion_header_major: $.ASN1Encoder<HeaderVersion_header_major> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HeaderVersion_header_major */

/* START_OF_SYMBOL_DEFINITION _encode_HeaderVersion_header_major */
/**
 * @summary Encodes a(n) HeaderVersion_header_major into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeaderVersion_header_major, encoded as an ASN.1 Element.
 */
export function _encode_HeaderVersion_header_major(
  value: HeaderVersion_header_major,
  elGetter: $.ASN1Encoder<HeaderVersion_header_major>
) {
  if (!_cached_encoder_for_HeaderVersion_header_major) {
    _cached_encoder_for_HeaderVersion_header_major = $._encodeInteger;
  }
  return _cached_encoder_for_HeaderVersion_header_major(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HeaderVersion_header_major */

/* eslint-enable */
