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

/* START_OF_SYMBOL_DEFINITION ROASequence */
/**
 * @summary ROASequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ROASequence  ::=  SEQUENCE OF NumericString(SIZE (0..4))
 * ```
 */
export type ROASequence = NumericString[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ROASequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ROASequence */
let _cached_decoder_for_ROASequence: $.ASN1Decoder<ROASequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ROASequence */

/* START_OF_SYMBOL_DEFINITION _decode_ROASequence */
/**
 * @summary Decodes an ASN.1 element into a(n) ROASequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ROASequence} The decoded data structure.
 */
export function _decode_ROASequence(el: _Element) {
  if (!_cached_decoder_for_ROASequence) {
    _cached_decoder_for_ROASequence = $._decodeSequenceOf<NumericString>(
      () => $._decodeNumericString
    );
  }
  return _cached_decoder_for_ROASequence(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ROASequence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ROASequence */
let _cached_encoder_for_ROASequence: $.ASN1Encoder<ROASequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ROASequence */

/* START_OF_SYMBOL_DEFINITION _encode_ROASequence */
/**
 * @summary Encodes a(n) ROASequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ROASequence, encoded as an ASN.1 Element.
 */
export function _encode_ROASequence(
  value: ROASequence,
  elGetter: $.ASN1Encoder<ROASequence>
) {
  if (!_cached_encoder_for_ROASequence) {
    _cached_encoder_for_ROASequence = $._encodeSequenceOf<NumericString>(
      () => $._encodeNumericString,
      $.BER
    );
  }
  return _cached_encoder_for_ROASequence(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ROASequence */

/* eslint-enable */
