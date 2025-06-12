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

/* START_OF_SYMBOL_DEFINITION GraphicStringType */
/**
 * @summary GraphicStringType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GraphicStringType  ::=  GraphicString
 * ```
 */
export type GraphicStringType = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION GraphicStringType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GraphicStringType */
let _cached_decoder_for_GraphicStringType: $.ASN1Decoder<GraphicStringType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GraphicStringType */

/* START_OF_SYMBOL_DEFINITION _decode_GraphicStringType */
/**
 * @summary Decodes an ASN.1 element into a(n) GraphicStringType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GraphicStringType} The decoded data structure.
 */
export function _decode_GraphicStringType(el: _Element) {
  if (!_cached_decoder_for_GraphicStringType) {
    _cached_decoder_for_GraphicStringType = $._decodeGraphicString;
  }
  return _cached_decoder_for_GraphicStringType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GraphicStringType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GraphicStringType */
let _cached_encoder_for_GraphicStringType: $.ASN1Encoder<GraphicStringType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GraphicStringType */

/* START_OF_SYMBOL_DEFINITION _encode_GraphicStringType */
/**
 * @summary Encodes a(n) GraphicStringType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GraphicStringType, encoded as an ASN.1 Element.
 */
export function _encode_GraphicStringType(
  value: GraphicStringType,
  elGetter: $.ASN1Encoder<GraphicStringType>
) {
  if (!_cached_encoder_for_GraphicStringType) {
    _cached_encoder_for_GraphicStringType = $._encodeGraphicString;
  }
  return _cached_encoder_for_GraphicStringType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GraphicStringType */

/* eslint-enable */
