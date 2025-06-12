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

/* START_OF_SYMBOL_DEFINITION Long */
/**
 * @summary Long
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Long  ::=  INTEGER (-9223372036854775808..9223372036854775807)
 * ```
 */
export type Long = INTEGER;
/* END_OF_SYMBOL_DEFINITION Long */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Long */
let _cached_decoder_for_Long: $.ASN1Decoder<Long> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Long */

/* START_OF_SYMBOL_DEFINITION _decode_Long */
/**
 * @summary Decodes an ASN.1 element into a(n) Long
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Long} The decoded data structure.
 */
export function _decode_Long(el: _Element) {
  if (!_cached_decoder_for_Long) {
    _cached_decoder_for_Long = $._decodeInteger;
  }
  return _cached_decoder_for_Long(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Long */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Long */
let _cached_encoder_for_Long: $.ASN1Encoder<Long> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Long */

/* START_OF_SYMBOL_DEFINITION _encode_Long */
/**
 * @summary Encodes a(n) Long into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Long, encoded as an ASN.1 Element.
 */
export function _encode_Long(value: Long, elGetter: $.ASN1Encoder<Long>) {
  if (!_cached_encoder_for_Long) {
    _cached_encoder_for_Long = $._encodeInteger;
  }
  return _cached_encoder_for_Long(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Long */

/* eslint-enable */
