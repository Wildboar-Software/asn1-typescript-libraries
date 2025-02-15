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
  CertReply,
  _decode_CertReply,
  _encode_CertReply,
} from '../SCVP-2009/CertReply.ta';
export {
  CertReply,
  _decode_CertReply,
  _encode_CertReply,
} from '../SCVP-2009/CertReply.ta';

/* START_OF_SYMBOL_DEFINITION ReplyObjects */
/**
 * @summary ReplyObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyObjects  ::=  SEQUENCE SIZE (1..MAX) OF CertReply
 * ```
 */
export type ReplyObjects = CertReply[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ReplyObjects */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyObjects */
let _cached_decoder_for_ReplyObjects: $.ASN1Decoder<ReplyObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyObjects */

/* START_OF_SYMBOL_DEFINITION _decode_ReplyObjects */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplyObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyObjects} The decoded data structure.
 */
export function _decode_ReplyObjects(el: _Element) {
  if (!_cached_decoder_for_ReplyObjects) {
    _cached_decoder_for_ReplyObjects = $._decodeSequenceOf<CertReply>(
      () => _decode_CertReply
    );
  }
  return _cached_decoder_for_ReplyObjects(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplyObjects */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyObjects */
let _cached_encoder_for_ReplyObjects: $.ASN1Encoder<ReplyObjects> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyObjects */

/* START_OF_SYMBOL_DEFINITION _encode_ReplyObjects */
/**
 * @summary Encodes a(n) ReplyObjects into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyObjects, encoded as an ASN.1 Element.
 */
export function _encode_ReplyObjects(
  value: ReplyObjects,
  elGetter: $.ASN1Encoder<ReplyObjects>
) {
  if (!_cached_encoder_for_ReplyObjects) {
    _cached_encoder_for_ReplyObjects = $._encodeSequenceOf<CertReply>(
      () => _encode_CertReply,
      $.BER
    );
  }
  return _cached_encoder_for_ReplyObjects(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplyObjects */

/* eslint-enable */
