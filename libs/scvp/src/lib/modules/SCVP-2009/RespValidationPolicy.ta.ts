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
import {
  ValidationPolicy,
  _decode_ValidationPolicy,
  _encode_ValidationPolicy,
} from '../SCVP-2009/ValidationPolicy.ta';
export {
  ValidationPolicy,
  _decode_ValidationPolicy,
  _encode_ValidationPolicy,
} from '../SCVP-2009/ValidationPolicy.ta';

/* START_OF_SYMBOL_DEFINITION RespValidationPolicy */
/**
 * @summary RespValidationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RespValidationPolicy  ::=  ValidationPolicy
 * ```
 */
export type RespValidationPolicy = ValidationPolicy; // DefinedType
/* END_OF_SYMBOL_DEFINITION RespValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RespValidationPolicy */
let _cached_decoder_for_RespValidationPolicy: $.ASN1Decoder<RespValidationPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RespValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _decode_RespValidationPolicy */
/**
 * @summary Decodes an ASN.1 element into a(n) RespValidationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RespValidationPolicy} The decoded data structure.
 */
export function _decode_RespValidationPolicy(el: _Element) {
  if (!_cached_decoder_for_RespValidationPolicy) {
    _cached_decoder_for_RespValidationPolicy = _decode_ValidationPolicy;
  }
  return _cached_decoder_for_RespValidationPolicy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RespValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RespValidationPolicy */
let _cached_encoder_for_RespValidationPolicy: $.ASN1Encoder<RespValidationPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RespValidationPolicy */

/* START_OF_SYMBOL_DEFINITION _encode_RespValidationPolicy */
/**
 * @summary Encodes a(n) RespValidationPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RespValidationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_RespValidationPolicy(
  value: RespValidationPolicy,
  elGetter: $.ASN1Encoder<RespValidationPolicy>
) {
  if (!_cached_encoder_for_RespValidationPolicy) {
    _cached_encoder_for_RespValidationPolicy = _encode_ValidationPolicy;
  }
  return _cached_encoder_for_RespValidationPolicy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RespValidationPolicy */

/* eslint-enable */
