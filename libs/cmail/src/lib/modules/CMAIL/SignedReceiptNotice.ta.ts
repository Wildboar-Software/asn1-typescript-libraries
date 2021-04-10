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
  SignedReceiptNoticeType,
  _decode_SignedReceiptNoticeType,
  _encode_SignedReceiptNoticeType,
} from '../CMAIL/SignedReceiptNoticeType.ta';
export {
  SignedReceiptNoticeType,
  _decode_SignedReceiptNoticeType,
  _encode_SignedReceiptNoticeType,
} from '../CMAIL/SignedReceiptNoticeType.ta';

/* START_OF_SYMBOL_DEFINITION SignedReceiptNotice */
/**
 * @summary SignedReceiptNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedReceiptNotice     ::=  SignedReceiptNoticeType
 * ```
 */
export type SignedReceiptNotice = SignedReceiptNoticeType; // DefinedType
/* END_OF_SYMBOL_DEFINITION SignedReceiptNotice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedReceiptNotice */
let _cached_decoder_for_SignedReceiptNotice: $.ASN1Decoder<SignedReceiptNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedReceiptNotice */

/* START_OF_SYMBOL_DEFINITION _decode_SignedReceiptNotice */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedReceiptNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedReceiptNotice} The decoded data structure.
 */
export function _decode_SignedReceiptNotice(el: _Element) {
  if (!_cached_decoder_for_SignedReceiptNotice) {
    _cached_decoder_for_SignedReceiptNotice = _decode_SignedReceiptNoticeType;
  }
  return _cached_decoder_for_SignedReceiptNotice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedReceiptNotice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedReceiptNotice */
let _cached_encoder_for_SignedReceiptNotice: $.ASN1Encoder<SignedReceiptNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedReceiptNotice */

/* START_OF_SYMBOL_DEFINITION _encode_SignedReceiptNotice */
/**
 * @summary Encodes a(n) SignedReceiptNotice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedReceiptNotice, encoded as an ASN.1 Element.
 */
export function _encode_SignedReceiptNotice(
  value: SignedReceiptNotice,
  elGetter: $.ASN1Encoder<SignedReceiptNotice>
) {
  if (!_cached_encoder_for_SignedReceiptNotice) {
    _cached_encoder_for_SignedReceiptNotice = _encode_SignedReceiptNoticeType;
  }
  return _cached_encoder_for_SignedReceiptNotice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedReceiptNotice */

/* eslint-enable */
