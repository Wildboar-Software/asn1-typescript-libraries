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
import { Ub64, _decode_Ub64, _encode_Ub64 } from '../Uds2/Ub64.ta';
export { Ub64, _decode_Ub64, _encode_Ub64 } from '../Uds2/Ub64.ta';

/* START_OF_SYMBOL_DEFINITION LocalityCode */
/**
 * @summary LocalityCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocalityCode  ::=  Ub64
 * ```
 */
export type LocalityCode = Ub64; // DefinedType
/* END_OF_SYMBOL_DEFINITION LocalityCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalityCode */
let _cached_decoder_for_LocalityCode: $.ASN1Decoder<LocalityCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocalityCode */

/* START_OF_SYMBOL_DEFINITION _decode_LocalityCode */
/**
 * @summary Decodes an ASN.1 element into a(n) LocalityCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocalityCode} The decoded data structure.
 */
export function _decode_LocalityCode(el: _Element) {
  if (!_cached_decoder_for_LocalityCode) {
    _cached_decoder_for_LocalityCode = _decode_Ub64;
  }
  return _cached_decoder_for_LocalityCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocalityCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalityCode */
let _cached_encoder_for_LocalityCode: $.ASN1Encoder<LocalityCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocalityCode */

/* START_OF_SYMBOL_DEFINITION _encode_LocalityCode */
/**
 * @summary Encodes a(n) LocalityCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalityCode, encoded as an ASN.1 Element.
 */
export function _encode_LocalityCode(
  value: LocalityCode,
  elGetter: $.ASN1Encoder<LocalityCode>
) {
  if (!_cached_encoder_for_LocalityCode) {
    _cached_encoder_for_LocalityCode = _encode_Ub64;
  }
  return _cached_encoder_for_LocalityCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocalityCode */

/* eslint-enable */
