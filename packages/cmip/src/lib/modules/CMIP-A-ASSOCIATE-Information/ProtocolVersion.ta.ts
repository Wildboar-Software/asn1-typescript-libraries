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

/* START_OF_SYMBOL_DEFINITION ProtocolVersion */
/**
 * @summary ProtocolVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtocolVersion  ::=  BIT STRING {version1(0), version2(1)}
 * ```
 */
export type ProtocolVersion = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION ProtocolVersion_version1 */
/**
 * @summary ProtocolVersion_version1
 * @constant
 */
export const ProtocolVersion_version1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProtocolVersion_version1 */

/* START_OF_SYMBOL_DEFINITION version1 */
/**
 * @summary version1
 * @constant
 */
export const version1: number = ProtocolVersion_version1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version1 */

/* START_OF_SYMBOL_DEFINITION ProtocolVersion_version2 */
/**
 * @summary ProtocolVersion_version2
 * @constant
 */
export const ProtocolVersion_version2: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ProtocolVersion_version2 */

/* START_OF_SYMBOL_DEFINITION version2 */
/**
 * @summary version2
 * @constant
 */
export const version2: number = ProtocolVersion_version2; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolVersion */
let _cached_decoder_for_ProtocolVersion: $.ASN1Decoder<ProtocolVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION _decode_ProtocolVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtocolVersion} The decoded data structure.
 */
export function _decode_ProtocolVersion(el: _Element) {
  if (!_cached_decoder_for_ProtocolVersion) {
    _cached_decoder_for_ProtocolVersion = $._decodeBitString;
  }
  return _cached_decoder_for_ProtocolVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolVersion */
let _cached_encoder_for_ProtocolVersion: $.ASN1Encoder<ProtocolVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtocolVersion */

/* START_OF_SYMBOL_DEFINITION _encode_ProtocolVersion */
/**
 * @summary Encodes a(n) ProtocolVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolVersion, encoded as an ASN.1 Element.
 */
export function _encode_ProtocolVersion(
  value: ProtocolVersion,
  elGetter: $.ASN1Encoder<ProtocolVersion>
) {
  if (!_cached_encoder_for_ProtocolVersion) {
    _cached_encoder_for_ProtocolVersion = $._encodeBitString;
  }
  return _cached_encoder_for_ProtocolVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtocolVersion */

/* eslint-enable */
