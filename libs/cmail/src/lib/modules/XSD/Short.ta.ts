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

/* START_OF_SYMBOL_DEFINITION Short */
/**
 * @summary Short
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Short  ::=  INTEGER (-32768..32767)
 * ```
 */
export type Short = INTEGER;
/* END_OF_SYMBOL_DEFINITION Short */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Short */
let _cached_decoder_for_Short: $.ASN1Decoder<Short> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Short */

/* START_OF_SYMBOL_DEFINITION _decode_Short */
/**
 * @summary Decodes an ASN.1 element into a(n) Short
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Short} The decoded data structure.
 */
export function _decode_Short(el: _Element) {
  if (!_cached_decoder_for_Short) {
    _cached_decoder_for_Short = $._decodeInteger;
  }
  return _cached_decoder_for_Short(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Short */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Short */
let _cached_encoder_for_Short: $.ASN1Encoder<Short> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Short */

/* START_OF_SYMBOL_DEFINITION _encode_Short */
/**
 * @summary Encodes a(n) Short into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Short, encoded as an ASN.1 Element.
 */
export function _encode_Short(value: Short, elGetter: $.ASN1Encoder<Short>) {
  if (!_cached_encoder_for_Short) {
    _cached_encoder_for_Short = $._encodeInteger;
  }
  return _cached_encoder_for_Short(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Short */

/* eslint-enable */
