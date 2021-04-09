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
import { ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca';
export { ERROR } from '../Remote-Operations-Information-Objects/ERROR.oca';

/* START_OF_SYMBOL_DEFINITION Errors */
/**
 * @summary Errors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Errors{OPERATION:Operations} ERROR ::= {Operations.&Errors}
 * ```
 *
 * @type {ERROR}
 */
export type Errors = ERROR; // VALUE_SET_TYPE
/* END_OF_SYMBOL_DEFINITION Errors */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Errors */
let _cached_decoder_for_Errors: $.ASN1Decoder<Errors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Errors */

/* START_OF_SYMBOL_DEFINITION _decode_Errors */
export function _decode_Errors(el: _Element) {
  if (!_cached_decoder_for_Errors) {
    _cached_decoder_for_Errors = _decode_ERROR;
  }
  return _cached_decoder_for_Errors(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Errors */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Errors */
let _cached_encoder_for_Errors: $.ASN1Encoder<Errors> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Errors */

/* START_OF_SYMBOL_DEFINITION _encode_Errors */
export function _encode_Errors(value: Errors, elGetter: $.ASN1Encoder<Errors>) {
  if (!_cached_encoder_for_Errors) {
    _cached_encoder_for_Errors = _encode_ERROR;
  }
  return _cached_encoder_for_Errors(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_Errors */

/* eslint-enable */
