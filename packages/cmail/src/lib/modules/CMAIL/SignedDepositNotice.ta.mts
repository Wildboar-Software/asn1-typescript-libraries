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
import {
  SignedDepositNoticeType,
  _decode_SignedDepositNoticeType,
  _encode_SignedDepositNoticeType,
} from '../CMAIL/SignedDepositNoticeType.ta.mjs';
export {
  SignedDepositNoticeType,
  _decode_SignedDepositNoticeType,
  _encode_SignedDepositNoticeType,
} from '../CMAIL/SignedDepositNoticeType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SignedDepositNotice */
/**
 * @summary SignedDepositNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedDepositNotice      ::=  SignedDepositNoticeType
 * ```
 */
export type SignedDepositNotice = SignedDepositNoticeType; // DefinedType
/* END_OF_SYMBOL_DEFINITION SignedDepositNotice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedDepositNotice */
let _cached_decoder_for_SignedDepositNotice: $.ASN1Decoder<SignedDepositNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedDepositNotice */

/* START_OF_SYMBOL_DEFINITION _decode_SignedDepositNotice */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedDepositNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedDepositNotice} The decoded data structure.
 */
export function _decode_SignedDepositNotice(el: _Element) {
  if (!_cached_decoder_for_SignedDepositNotice) {
    _cached_decoder_for_SignedDepositNotice = _decode_SignedDepositNoticeType;
  }
  return _cached_decoder_for_SignedDepositNotice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedDepositNotice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedDepositNotice */
let _cached_encoder_for_SignedDepositNotice: $.ASN1Encoder<SignedDepositNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedDepositNotice */

/* START_OF_SYMBOL_DEFINITION _encode_SignedDepositNotice */
/**
 * @summary Encodes a(n) SignedDepositNotice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedDepositNotice, encoded as an ASN.1 Element.
 */
export function _encode_SignedDepositNotice(
  value: SignedDepositNotice,
  elGetter: $.ASN1Encoder<SignedDepositNotice>
) {
  if (!_cached_encoder_for_SignedDepositNotice) {
    _cached_encoder_for_SignedDepositNotice = _encode_SignedDepositNoticeType;
  }
  return _cached_encoder_for_SignedDepositNotice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedDepositNotice */

/* eslint-enable */
