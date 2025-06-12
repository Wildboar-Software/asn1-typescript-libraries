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

/* START_OF_SYMBOL_DEFINITION FourBit */
/**
 * @summary FourBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FourBit  ::=  INTEGER(0..15)
 * ```
 */
export type FourBit = INTEGER;
/* END_OF_SYMBOL_DEFINITION FourBit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FourBit */
let _cached_decoder_for_FourBit: $.ASN1Decoder<FourBit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FourBit */

/* START_OF_SYMBOL_DEFINITION _decode_FourBit */
/**
 * @summary Decodes an ASN.1 element into a(n) FourBit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FourBit} The decoded data structure.
 */
export function _decode_FourBit(el: _Element) {
  if (!_cached_decoder_for_FourBit) {
    _cached_decoder_for_FourBit = $._decodeInteger;
  }
  return _cached_decoder_for_FourBit(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FourBit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FourBit */
let _cached_encoder_for_FourBit: $.ASN1Encoder<FourBit> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FourBit */

/* START_OF_SYMBOL_DEFINITION _encode_FourBit */
/**
 * @summary Encodes a(n) FourBit into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FourBit, encoded as an ASN.1 Element.
 */
export function _encode_FourBit(
  value: FourBit,
  elGetter: $.ASN1Encoder<FourBit>
) {
  if (!_cached_encoder_for_FourBit) {
    _cached_encoder_for_FourBit = $._encodeInteger;
  }
  return _cached_encoder_for_FourBit(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FourBit */

/* eslint-enable */
