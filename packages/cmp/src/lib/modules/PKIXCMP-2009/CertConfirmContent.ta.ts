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
  CertStatus,
  _decode_CertStatus,
  _encode_CertStatus,
} from '../PKIXCMP-2009/CertStatus.ta.js';
export {
  CertStatus,
  _decode_CertStatus,
  _encode_CertStatus,
} from '../PKIXCMP-2009/CertStatus.ta.js';

/* START_OF_SYMBOL_DEFINITION CertConfirmContent */
/**
 * @summary CertConfirmContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertConfirmContent  ::=  SEQUENCE OF CertStatus
 * ```
 */
export type CertConfirmContent = CertStatus[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CertConfirmContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertConfirmContent */
let _cached_decoder_for_CertConfirmContent: $.ASN1Decoder<CertConfirmContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertConfirmContent */

/* START_OF_SYMBOL_DEFINITION _decode_CertConfirmContent */
/**
 * @summary Decodes an ASN.1 element into a(n) CertConfirmContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertConfirmContent} The decoded data structure.
 */
export function _decode_CertConfirmContent(el: _Element) {
  if (!_cached_decoder_for_CertConfirmContent) {
    _cached_decoder_for_CertConfirmContent = $._decodeSequenceOf<CertStatus>(
      () => _decode_CertStatus
    );
  }
  return _cached_decoder_for_CertConfirmContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertConfirmContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertConfirmContent */
let _cached_encoder_for_CertConfirmContent: $.ASN1Encoder<CertConfirmContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertConfirmContent */

/* START_OF_SYMBOL_DEFINITION _encode_CertConfirmContent */
/**
 * @summary Encodes a(n) CertConfirmContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertConfirmContent, encoded as an ASN.1 Element.
 */
export function _encode_CertConfirmContent(
  value: CertConfirmContent,
  elGetter: $.ASN1Encoder<CertConfirmContent>
) {
  if (!_cached_encoder_for_CertConfirmContent) {
    _cached_encoder_for_CertConfirmContent = $._encodeSequenceOf<CertStatus>(
      () => _encode_CertStatus,
      $.BER
    );
  }
  return _cached_encoder_for_CertConfirmContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertConfirmContent */

/* eslint-enable */
