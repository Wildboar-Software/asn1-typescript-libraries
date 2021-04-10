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

/* START_OF_SYMBOL_DEFINITION MemoryAddress */
/**
 * @summary MemoryAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MemoryAddress  ::=  INTEGER
 * ```
 */
export type MemoryAddress = INTEGER;
/* END_OF_SYMBOL_DEFINITION MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MemoryAddress */
let _cached_decoder_for_MemoryAddress: $.ASN1Decoder<MemoryAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _decode_MemoryAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) MemoryAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MemoryAddress} The decoded data structure.
 */
export function _decode_MemoryAddress(el: _Element) {
  if (!_cached_decoder_for_MemoryAddress) {
    _cached_decoder_for_MemoryAddress = $._decodeInteger;
  }
  return _cached_decoder_for_MemoryAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MemoryAddress */
let _cached_encoder_for_MemoryAddress: $.ASN1Encoder<MemoryAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MemoryAddress */

/* START_OF_SYMBOL_DEFINITION _encode_MemoryAddress */
/**
 * @summary Encodes a(n) MemoryAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MemoryAddress, encoded as an ASN.1 Element.
 */
export function _encode_MemoryAddress(
  value: MemoryAddress,
  elGetter: $.ASN1Encoder<MemoryAddress>
) {
  if (!_cached_encoder_for_MemoryAddress) {
    _cached_encoder_for_MemoryAddress = $._encodeInteger;
  }
  return _cached_encoder_for_MemoryAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MemoryAddress */

/* eslint-enable */
