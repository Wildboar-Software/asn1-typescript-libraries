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

/* START_OF_SYMBOL_DEFINITION AP_invocation_identifier */
/**
 * @summary AP_invocation_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-invocation-identifier  ::=  INTEGER
 * ```
 */
export type AP_invocation_identifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION AP_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_invocation_identifier */
let _cached_decoder_for_AP_invocation_identifier: $.ASN1Decoder<AP_invocation_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AP_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_AP_invocation_identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) AP_invocation_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AP_invocation_identifier} The decoded data structure.
 */
export function _decode_AP_invocation_identifier(el: _Element) {
  if (!_cached_decoder_for_AP_invocation_identifier) {
    _cached_decoder_for_AP_invocation_identifier = $._decodeInteger;
  }
  return _cached_decoder_for_AP_invocation_identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AP_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_invocation_identifier */
let _cached_encoder_for_AP_invocation_identifier: $.ASN1Encoder<AP_invocation_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AP_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_AP_invocation_identifier */
/**
 * @summary Encodes a(n) AP_invocation_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_invocation_identifier, encoded as an ASN.1 Element.
 */
export function _encode_AP_invocation_identifier(
  value: AP_invocation_identifier,
  elGetter: $.ASN1Encoder<AP_invocation_identifier>
) {
  if (!_cached_encoder_for_AP_invocation_identifier) {
    _cached_encoder_for_AP_invocation_identifier = $._encodeInteger;
  }
  return _cached_encoder_for_AP_invocation_identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AP_invocation_identifier */

/* eslint-enable */
