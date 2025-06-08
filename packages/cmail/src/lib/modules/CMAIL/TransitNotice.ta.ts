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
  TransitNoticeType,
  _decode_TransitNoticeType,
  _encode_TransitNoticeType,
} from '../CMAIL/TransitNoticeType.ta';
export {
  TransitNoticeType,
  _decode_TransitNoticeType,
  _encode_TransitNoticeType,
} from '../CMAIL/TransitNoticeType.ta';

/* START_OF_SYMBOL_DEFINITION TransitNotice */
/**
 * @summary TransitNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransitNotice         ::=  TransitNoticeType
 * ```
 */
export type TransitNotice = TransitNoticeType; // DefinedType
/* END_OF_SYMBOL_DEFINITION TransitNotice */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TransitNotice */
let _cached_decoder_for_TransitNotice: $.ASN1Decoder<TransitNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TransitNotice */

/* START_OF_SYMBOL_DEFINITION _decode_TransitNotice */
/**
 * @summary Decodes an ASN.1 element into a(n) TransitNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransitNotice} The decoded data structure.
 */
export function _decode_TransitNotice(el: _Element) {
  if (!_cached_decoder_for_TransitNotice) {
    _cached_decoder_for_TransitNotice = _decode_TransitNoticeType;
  }
  return _cached_decoder_for_TransitNotice(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TransitNotice */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TransitNotice */
let _cached_encoder_for_TransitNotice: $.ASN1Encoder<TransitNotice> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TransitNotice */

/* START_OF_SYMBOL_DEFINITION _encode_TransitNotice */
/**
 * @summary Encodes a(n) TransitNotice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitNotice, encoded as an ASN.1 Element.
 */
export function _encode_TransitNotice(
  value: TransitNotice,
  elGetter: $.ASN1Encoder<TransitNotice>
) {
  if (!_cached_encoder_for_TransitNotice) {
    _cached_encoder_for_TransitNotice = _encode_TransitNoticeType;
  }
  return _cached_encoder_for_TransitNotice(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TransitNotice */

/* eslint-enable */
