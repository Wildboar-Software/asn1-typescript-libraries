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

/* START_OF_SYMBOL_DEFINITION NAddress */
/**
 * @summary NAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAddress  ::=  NLM.NAddress
 * ```
 */
export type NAddress = NLM.NAddress; // DefinedType
/* END_OF_SYMBOL_DEFINITION NAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NAddress */
let _cached_decoder_for_NAddress: $.ASN1Decoder<NAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NAddress */

/* START_OF_SYMBOL_DEFINITION _decode_NAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) NAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NAddress} The decoded data structure.
 */
export function _decode_NAddress(el: _Element) {
  if (!_cached_decoder_for_NAddress) {
    _cached_decoder_for_NAddress = NLM._decode_NAddress;
  }
  return _cached_decoder_for_NAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NAddress */
let _cached_encoder_for_NAddress: $.ASN1Encoder<NAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NAddress */

/* START_OF_SYMBOL_DEFINITION _encode_NAddress */
/**
 * @summary Encodes a(n) NAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NAddress, encoded as an ASN.1 Element.
 */
export function _encode_NAddress(
  value: NAddress,
  elGetter: $.ASN1Encoder<NAddress>
) {
  if (!_cached_encoder_for_NAddress) {
    _cached_encoder_for_NAddress = NLM._encode_NAddress;
  }
  return _cached_encoder_for_NAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NAddress */

/* eslint-enable */
