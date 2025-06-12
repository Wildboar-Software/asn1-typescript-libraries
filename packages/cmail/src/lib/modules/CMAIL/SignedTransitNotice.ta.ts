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
  SignedTransitNoticeType,
  _decode_SignedTransitNoticeType,
  _encode_SignedTransitNoticeType,
} from '../CMAIL/SignedTransitNoticeType.ta.js';
export {
  SignedTransitNoticeType,
  _decode_SignedTransitNoticeType,
  _encode_SignedTransitNoticeType,
} from '../CMAIL/SignedTransitNoticeType.ta.js';

/* START_OF_SYMBOL_DEFINITION SignedTransitNotice */
/**
 * @summary SignedTransitNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedTransitNotice     ::=  SignedTransitNoticeType
 * ```
 */
export type SignedTransitNotice = SignedTransitNoticeType; // DefinedType
/* END_OF_SYMBOL_DEFINITION SignedTransitNotice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedTransitNotice */
let _cached_decoder_for_SignedTransitNotice: $.ASN1Decoder<SignedTransitNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedTransitNotice */

/* START_OF_SYMBOL_DEFINITION _decode_SignedTransitNotice */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedTransitNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedTransitNotice} The decoded data structure.
 */
export function _decode_SignedTransitNotice(el: _Element) {
  if (!_cached_decoder_for_SignedTransitNotice) {
    _cached_decoder_for_SignedTransitNotice = _decode_SignedTransitNoticeType;
  }
  return _cached_decoder_for_SignedTransitNotice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedTransitNotice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedTransitNotice */
let _cached_encoder_for_SignedTransitNotice: $.ASN1Encoder<SignedTransitNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedTransitNotice */

/* START_OF_SYMBOL_DEFINITION _encode_SignedTransitNotice */
/**
 * @summary Encodes a(n) SignedTransitNotice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedTransitNotice, encoded as an ASN.1 Element.
 */
export function _encode_SignedTransitNotice(
  value: SignedTransitNotice,
  elGetter: $.ASN1Encoder<SignedTransitNotice>
) {
  if (!_cached_encoder_for_SignedTransitNotice) {
    _cached_encoder_for_SignedTransitNotice = _encode_SignedTransitNoticeType;
  }
  return _cached_encoder_for_SignedTransitNotice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedTransitNotice */

/* eslint-enable */
