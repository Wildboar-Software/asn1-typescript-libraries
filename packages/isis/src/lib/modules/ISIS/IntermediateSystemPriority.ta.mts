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

/* START_OF_SYMBOL_DEFINITION IntermediateSystemPriority */
/**
 * @summary IntermediateSystemPriority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntermediateSystemPriority  ::=  INTEGER(1..127)
 * ```
 */
export type IntermediateSystemPriority = INTEGER;
/* END_OF_SYMBOL_DEFINITION IntermediateSystemPriority */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntermediateSystemPriority */
let _cached_decoder_for_IntermediateSystemPriority: $.ASN1Decoder<IntermediateSystemPriority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntermediateSystemPriority */

/* START_OF_SYMBOL_DEFINITION _decode_IntermediateSystemPriority */
/**
 * @summary Decodes an ASN.1 element into a(n) IntermediateSystemPriority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntermediateSystemPriority} The decoded data structure.
 */
export function _decode_IntermediateSystemPriority(el: _Element) {
  if (!_cached_decoder_for_IntermediateSystemPriority) {
    _cached_decoder_for_IntermediateSystemPriority = $._decodeInteger;
  }
  return _cached_decoder_for_IntermediateSystemPriority(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IntermediateSystemPriority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntermediateSystemPriority */
let _cached_encoder_for_IntermediateSystemPriority: $.ASN1Encoder<IntermediateSystemPriority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntermediateSystemPriority */

/* START_OF_SYMBOL_DEFINITION _encode_IntermediateSystemPriority */
/**
 * @summary Encodes a(n) IntermediateSystemPriority into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntermediateSystemPriority, encoded as an ASN.1 Element.
 */
export function _encode_IntermediateSystemPriority(
  value: IntermediateSystemPriority,
  elGetter: $.ASN1Encoder<IntermediateSystemPriority>
) {
  if (!_cached_encoder_for_IntermediateSystemPriority) {
    _cached_encoder_for_IntermediateSystemPriority = $._encodeInteger;
  }
  return _cached_encoder_for_IntermediateSystemPriority(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IntermediateSystemPriority */

/* eslint-enable */
