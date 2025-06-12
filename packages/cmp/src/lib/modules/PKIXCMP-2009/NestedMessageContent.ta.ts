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
  PKIMessages,
  _decode_PKIMessages,
  _encode_PKIMessages,
} from '../PKIXCMP-2009/PKIMessages.ta.js';
export {
  PKIMessages,
  _decode_PKIMessages,
  _encode_PKIMessages,
} from '../PKIXCMP-2009/PKIMessages.ta.js';

/* START_OF_SYMBOL_DEFINITION NestedMessageContent */
/**
 * @summary NestedMessageContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NestedMessageContent  ::=  PKIMessages
 * ```
 */
export type NestedMessageContent = PKIMessages; // DefinedType
/* END_OF_SYMBOL_DEFINITION NestedMessageContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NestedMessageContent */
let _cached_decoder_for_NestedMessageContent: $.ASN1Decoder<NestedMessageContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NestedMessageContent */

/* START_OF_SYMBOL_DEFINITION _decode_NestedMessageContent */
/**
 * @summary Decodes an ASN.1 element into a(n) NestedMessageContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NestedMessageContent} The decoded data structure.
 */
export function _decode_NestedMessageContent(el: _Element) {
  if (!_cached_decoder_for_NestedMessageContent) {
    _cached_decoder_for_NestedMessageContent = _decode_PKIMessages;
  }
  return _cached_decoder_for_NestedMessageContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NestedMessageContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NestedMessageContent */
let _cached_encoder_for_NestedMessageContent: $.ASN1Encoder<NestedMessageContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NestedMessageContent */

/* START_OF_SYMBOL_DEFINITION _encode_NestedMessageContent */
/**
 * @summary Encodes a(n) NestedMessageContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NestedMessageContent, encoded as an ASN.1 Element.
 */
export function _encode_NestedMessageContent(
  value: NestedMessageContent,
  elGetter: $.ASN1Encoder<NestedMessageContent>
) {
  if (!_cached_encoder_for_NestedMessageContent) {
    _cached_encoder_for_NestedMessageContent = _encode_PKIMessages;
  }
  return _cached_encoder_for_NestedMessageContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NestedMessageContent */

/* eslint-enable */
