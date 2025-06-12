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

/* START_OF_SYMBOL_DEFINITION PKIConfirmContent */
/**
 * @summary PKIConfirmContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIConfirmContent  ::=  NULL
 * ```
 */
export type PKIConfirmContent = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION PKIConfirmContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIConfirmContent */
let _cached_decoder_for_PKIConfirmContent: $.ASN1Decoder<PKIConfirmContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIConfirmContent */

/* START_OF_SYMBOL_DEFINITION _decode_PKIConfirmContent */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIConfirmContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIConfirmContent} The decoded data structure.
 */
export function _decode_PKIConfirmContent(el: _Element) {
  if (!_cached_decoder_for_PKIConfirmContent) {
    _cached_decoder_for_PKIConfirmContent = $._decodeNull;
  }
  return _cached_decoder_for_PKIConfirmContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIConfirmContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIConfirmContent */
let _cached_encoder_for_PKIConfirmContent: $.ASN1Encoder<PKIConfirmContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIConfirmContent */

/* START_OF_SYMBOL_DEFINITION _encode_PKIConfirmContent */
/**
 * @summary Encodes a(n) PKIConfirmContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIConfirmContent, encoded as an ASN.1 Element.
 */
export function _encode_PKIConfirmContent(
  value: PKIConfirmContent,
  elGetter: $.ASN1Encoder<PKIConfirmContent>
) {
  if (!_cached_encoder_for_PKIConfirmContent) {
    _cached_encoder_for_PKIConfirmContent = $._encodeNull;
  }
  return _cached_encoder_for_PKIConfirmContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIConfirmContent */

/* eslint-enable */
