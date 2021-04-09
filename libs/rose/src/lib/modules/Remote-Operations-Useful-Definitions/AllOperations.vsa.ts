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
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';
export { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca';

/* START_OF_SYMBOL_DEFINITION AllOperations */
/**
 * @summary AllOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllOperations{OPERATION-PACKAGE:package} OPERATION ::= {ConsumerPerforms{package} | SupplierPerforms{package}}
 * ```
 *
 * @type {OPERATION}
 */
export type AllOperations = OPERATION; // VALUE_SET_TYPE
/* END_OF_SYMBOL_DEFINITION AllOperations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AllOperations */
let _cached_decoder_for_AllOperations: $.ASN1Decoder<AllOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AllOperations */

/* START_OF_SYMBOL_DEFINITION _decode_AllOperations */
export function _decode_AllOperations(el: _Element) {
  if (!_cached_decoder_for_AllOperations) {
    _cached_decoder_for_AllOperations = _decode_OPERATION;
  }
  return _cached_decoder_for_AllOperations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AllOperations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AllOperations */
let _cached_encoder_for_AllOperations: $.ASN1Encoder<AllOperations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AllOperations */

/* START_OF_SYMBOL_DEFINITION _encode_AllOperations */
export function _encode_AllOperations(
  value: AllOperations,
  elGetter: $.ASN1Encoder<AllOperations>
) {
  if (!_cached_encoder_for_AllOperations) {
    _cached_encoder_for_AllOperations = _encode_OPERATION;
  }
  return _cached_encoder_for_AllOperations(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_AllOperations */

/* eslint-enable */
