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

/* START_OF_SYMBOL_DEFINITION Degree_Of_Overlap */
/**
 * @summary Degree_Of_Overlap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Degree-Of-Overlap  ::=  [APPLICATION 30] IMPLICIT INTEGER {
 *   normal(0), consecutive(1), concurrent(2)}
 * ```
 */
export type Degree_Of_Overlap = INTEGER;
/* END_OF_SYMBOL_DEFINITION Degree_Of_Overlap */

/* START_OF_SYMBOL_DEFINITION Degree_Of_Overlap_normal */
/**
 * @summary Degree_Of_Overlap_normal
 * @constant
 * @type {number}
 */
export const Degree_Of_Overlap_normal: Degree_Of_Overlap = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Degree_Of_Overlap_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary Degree_Of_Overlap_normal
 * @constant
 * @type {number}
 */
export const normal: Degree_Of_Overlap = Degree_Of_Overlap_normal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION Degree_Of_Overlap_consecutive */
/**
 * @summary Degree_Of_Overlap_consecutive
 * @constant
 * @type {number}
 */
export const Degree_Of_Overlap_consecutive: Degree_Of_Overlap = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Degree_Of_Overlap_consecutive */

/* START_OF_SYMBOL_DEFINITION consecutive */
/**
 * @summary Degree_Of_Overlap_consecutive
 * @constant
 * @type {number}
 */
export const consecutive: Degree_Of_Overlap = Degree_Of_Overlap_consecutive; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION consecutive */

/* START_OF_SYMBOL_DEFINITION Degree_Of_Overlap_concurrent */
/**
 * @summary Degree_Of_Overlap_concurrent
 * @constant
 * @type {number}
 */
export const Degree_Of_Overlap_concurrent: Degree_Of_Overlap = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Degree_Of_Overlap_concurrent */

/* START_OF_SYMBOL_DEFINITION concurrent */
/**
 * @summary Degree_Of_Overlap_concurrent
 * @constant
 * @type {number}
 */
export const concurrent: Degree_Of_Overlap = Degree_Of_Overlap_concurrent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION concurrent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Degree_Of_Overlap */
let _cached_decoder_for_Degree_Of_Overlap: $.ASN1Decoder<Degree_Of_Overlap> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Degree_Of_Overlap */

/* START_OF_SYMBOL_DEFINITION _decode_Degree_Of_Overlap */
/**
 * @summary Decodes an ASN.1 element into a(n) Degree_Of_Overlap
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Degree_Of_Overlap} The decoded data structure.
 */
export function _decode_Degree_Of_Overlap(el: _Element) {
  if (!_cached_decoder_for_Degree_Of_Overlap) {
    _cached_decoder_for_Degree_Of_Overlap = $._decode_implicit<Degree_Of_Overlap>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_Degree_Of_Overlap(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Degree_Of_Overlap */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Degree_Of_Overlap */
let _cached_encoder_for_Degree_Of_Overlap: $.ASN1Encoder<Degree_Of_Overlap> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Degree_Of_Overlap */

/* START_OF_SYMBOL_DEFINITION _encode_Degree_Of_Overlap */
/**
 * @summary Encodes a(n) Degree_Of_Overlap into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Degree_Of_Overlap, encoded as an ASN.1 Element.
 */
export function _encode_Degree_Of_Overlap(
  value: Degree_Of_Overlap,
  elGetter: $.ASN1Encoder<Degree_Of_Overlap>
) {
  if (!_cached_encoder_for_Degree_Of_Overlap) {
    _cached_encoder_for_Degree_Of_Overlap = $._encode_implicit(
      _TagClass.application,
      30,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_Degree_Of_Overlap(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Degree_Of_Overlap */

/* eslint-enable */
