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

/* START_OF_SYMBOL_DEFINITION IntegrityOptions */
/**
 * @summary IntegrityOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntegrityOptions  ::=  BOOLEAN
 * ```
 */
export type IntegrityOptions = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION IntegrityOptions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntegrityOptions */
let _cached_decoder_for_IntegrityOptions: $.ASN1Decoder<IntegrityOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntegrityOptions */

/* START_OF_SYMBOL_DEFINITION _decode_IntegrityOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) IntegrityOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntegrityOptions} The decoded data structure.
 */
export function _decode_IntegrityOptions(el: _Element) {
  if (!_cached_decoder_for_IntegrityOptions) {
    _cached_decoder_for_IntegrityOptions = $._decodeBoolean;
  }
  return _cached_decoder_for_IntegrityOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IntegrityOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntegrityOptions */
let _cached_encoder_for_IntegrityOptions: $.ASN1Encoder<IntegrityOptions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntegrityOptions */

/* START_OF_SYMBOL_DEFINITION _encode_IntegrityOptions */
/**
 * @summary Encodes a(n) IntegrityOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntegrityOptions, encoded as an ASN.1 Element.
 */
export function _encode_IntegrityOptions(
  value: IntegrityOptions,
  elGetter: $.ASN1Encoder<IntegrityOptions>
) {
  if (!_cached_encoder_for_IntegrityOptions) {
    _cached_encoder_for_IntegrityOptions = $._encodeBoolean;
  }
  return _cached_encoder_for_IntegrityOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IntegrityOptions */

/* eslint-enable */
