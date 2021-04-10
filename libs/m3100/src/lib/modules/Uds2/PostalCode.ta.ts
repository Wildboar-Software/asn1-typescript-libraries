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
import { Ub40, _decode_Ub40, _encode_Ub40 } from '../Uds2/Ub40.ta';
export { Ub40, _decode_Ub40, _encode_Ub40 } from '../Uds2/Ub40.ta';

/* START_OF_SYMBOL_DEFINITION PostalCode */
/**
 * @summary PostalCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalCode  ::=  Ub40
 * ```
 */
export type PostalCode = Ub40; // DefinedType
/* END_OF_SYMBOL_DEFINITION PostalCode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PostalCode */
let _cached_decoder_for_PostalCode: $.ASN1Decoder<PostalCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PostalCode */

/* START_OF_SYMBOL_DEFINITION _decode_PostalCode */
/**
 * @summary Decodes an ASN.1 element into a(n) PostalCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostalCode} The decoded data structure.
 */
export function _decode_PostalCode(el: _Element) {
  if (!_cached_decoder_for_PostalCode) {
    _cached_decoder_for_PostalCode = _decode_Ub40;
  }
  return _cached_decoder_for_PostalCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PostalCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PostalCode */
let _cached_encoder_for_PostalCode: $.ASN1Encoder<PostalCode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PostalCode */

/* START_OF_SYMBOL_DEFINITION _encode_PostalCode */
/**
 * @summary Encodes a(n) PostalCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalCode, encoded as an ASN.1 Element.
 */
export function _encode_PostalCode(
  value: PostalCode,
  elGetter: $.ASN1Encoder<PostalCode>
) {
  if (!_cached_encoder_for_PostalCode) {
    _cached_encoder_for_PostalCode = _encode_Ub40;
  }
  return _cached_encoder_for_PostalCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PostalCode */

/* eslint-enable */
