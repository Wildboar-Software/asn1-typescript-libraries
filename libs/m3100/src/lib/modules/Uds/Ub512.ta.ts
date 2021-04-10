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

/* START_OF_SYMBOL_DEFINITION Ub512 */
/**
 * @summary Ub512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Ub512  ::=  UTF8String(SIZE (0..512))
 * ```
 */
export type Ub512 = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION Ub512 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Ub512 */
let _cached_decoder_for_Ub512: $.ASN1Decoder<Ub512> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Ub512 */

/* START_OF_SYMBOL_DEFINITION _decode_Ub512 */
/**
 * @summary Decodes an ASN.1 element into a(n) Ub512
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Ub512} The decoded data structure.
 */
export function _decode_Ub512(el: _Element) {
  if (!_cached_decoder_for_Ub512) {
    _cached_decoder_for_Ub512 = $._decodeUTF8String;
  }
  return _cached_decoder_for_Ub512(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Ub512 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Ub512 */
let _cached_encoder_for_Ub512: $.ASN1Encoder<Ub512> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Ub512 */

/* START_OF_SYMBOL_DEFINITION _encode_Ub512 */
/**
 * @summary Encodes a(n) Ub512 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ub512, encoded as an ASN.1 Element.
 */
export function _encode_Ub512(value: Ub512, elGetter: $.ASN1Encoder<Ub512>) {
  if (!_cached_encoder_for_Ub512) {
    _cached_encoder_for_Ub512 = $._encodeUTF8String;
  }
  return _cached_encoder_for_Ub512(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Ub512 */

/* eslint-enable */
