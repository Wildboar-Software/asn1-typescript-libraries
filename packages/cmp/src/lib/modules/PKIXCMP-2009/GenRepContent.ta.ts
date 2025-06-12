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
  InfoTypeAndValue,
  _decode_InfoTypeAndValue,
  _encode_InfoTypeAndValue,
} from '../PKIXCMP-2009/InfoTypeAndValue.ta.js';
export {
  InfoTypeAndValue,
  _decode_InfoTypeAndValue,
  _encode_InfoTypeAndValue,
} from '../PKIXCMP-2009/InfoTypeAndValue.ta.js';

/* START_OF_SYMBOL_DEFINITION GenRepContent */
/**
 * @summary GenRepContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GenRepContent  ::=  SEQUENCE OF InfoTypeAndValue
 * ```
 */
export type GenRepContent = InfoTypeAndValue[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION GenRepContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GenRepContent */
let _cached_decoder_for_GenRepContent: $.ASN1Decoder<GenRepContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GenRepContent */

/* START_OF_SYMBOL_DEFINITION _decode_GenRepContent */
/**
 * @summary Decodes an ASN.1 element into a(n) GenRepContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GenRepContent} The decoded data structure.
 */
export function _decode_GenRepContent(el: _Element) {
  if (!_cached_decoder_for_GenRepContent) {
    _cached_decoder_for_GenRepContent = $._decodeSequenceOf<InfoTypeAndValue>(
      () => _decode_InfoTypeAndValue
    );
  }
  return _cached_decoder_for_GenRepContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GenRepContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GenRepContent */
let _cached_encoder_for_GenRepContent: $.ASN1Encoder<GenRepContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GenRepContent */

/* START_OF_SYMBOL_DEFINITION _encode_GenRepContent */
/**
 * @summary Encodes a(n) GenRepContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenRepContent, encoded as an ASN.1 Element.
 */
export function _encode_GenRepContent(
  value: GenRepContent,
  elGetter: $.ASN1Encoder<GenRepContent>
) {
  if (!_cached_encoder_for_GenRepContent) {
    _cached_encoder_for_GenRepContent = $._encodeSequenceOf<InfoTypeAndValue>(
      () => _encode_InfoTypeAndValue,
      $.BER
    );
  }
  return _cached_encoder_for_GenRepContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GenRepContent */

/* eslint-enable */
