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

/* START_OF_SYMBOL_DEFINITION Explanation */
/**
 * @summary Explanation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Explanation  ::=  UTF8String
 * ```
 */
export type Explanation = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION Explanation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Explanation */
let _cached_decoder_for_Explanation: $.ASN1Decoder<Explanation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Explanation */

/* START_OF_SYMBOL_DEFINITION _decode_Explanation */
/**
 * @summary Decodes an ASN.1 element into a(n) Explanation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Explanation} The decoded data structure.
 */
export function _decode_Explanation(el: _Element) {
  if (!_cached_decoder_for_Explanation) {
    _cached_decoder_for_Explanation = $._decodeUTF8String;
  }
  return _cached_decoder_for_Explanation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Explanation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Explanation */
let _cached_encoder_for_Explanation: $.ASN1Encoder<Explanation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Explanation */

/* START_OF_SYMBOL_DEFINITION _encode_Explanation */
/**
 * @summary Encodes a(n) Explanation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Explanation, encoded as an ASN.1 Element.
 */
export function _encode_Explanation(
  value: Explanation,
  elGetter: $.ASN1Encoder<Explanation>
) {
  if (!_cached_encoder_for_Explanation) {
    _cached_encoder_for_Explanation = $._encodeUTF8String;
  }
  return _cached_encoder_for_Explanation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Explanation */

/* eslint-enable */
