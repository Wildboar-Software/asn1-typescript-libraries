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

/* START_OF_SYMBOL_DEFINITION FADU_Identity_first_last */
/**
 * @summary FADU_Identity_first_last
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FADU-Identity-first-last ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FADU_Identity_first_last = INTEGER;
/* END_OF_SYMBOL_DEFINITION FADU_Identity_first_last */

/* START_OF_SYMBOL_DEFINITION FADU_Identity_first_last_first */
/**
 * @summary FADU_Identity_first_last_first
 * @constant
 * @type {number}
 */
export const FADU_Identity_first_last_first: FADU_Identity_first_last = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FADU_Identity_first_last_first */

/* START_OF_SYMBOL_DEFINITION first */
/**
 * @summary FADU_Identity_first_last_first
 * @constant
 * @type {number}
 */
export const first: FADU_Identity_first_last = FADU_Identity_first_last_first; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION first */

/* START_OF_SYMBOL_DEFINITION FADU_Identity_first_last_last */
/**
 * @summary FADU_Identity_first_last_last
 * @constant
 * @type {number}
 */
export const FADU_Identity_first_last_last: FADU_Identity_first_last = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION FADU_Identity_first_last_last */

/* START_OF_SYMBOL_DEFINITION last */
/**
 * @summary FADU_Identity_first_last_last
 * @constant
 * @type {number}
 */
export const last: FADU_Identity_first_last = FADU_Identity_first_last_last; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION last */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FADU_Identity_first_last */
let _cached_decoder_for_FADU_Identity_first_last: $.ASN1Decoder<FADU_Identity_first_last> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FADU_Identity_first_last */

/* START_OF_SYMBOL_DEFINITION _decode_FADU_Identity_first_last */
/**
 * @summary Decodes an ASN.1 element into a(n) FADU_Identity_first_last
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FADU_Identity_first_last} The decoded data structure.
 */
export function _decode_FADU_Identity_first_last(el: _Element) {
  if (!_cached_decoder_for_FADU_Identity_first_last) {
    _cached_decoder_for_FADU_Identity_first_last = $._decodeInteger;
  }
  return _cached_decoder_for_FADU_Identity_first_last(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FADU_Identity_first_last */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FADU_Identity_first_last */
let _cached_encoder_for_FADU_Identity_first_last: $.ASN1Encoder<FADU_Identity_first_last> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FADU_Identity_first_last */

/* START_OF_SYMBOL_DEFINITION _encode_FADU_Identity_first_last */
/**
 * @summary Encodes a(n) FADU_Identity_first_last into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FADU_Identity_first_last, encoded as an ASN.1 Element.
 */
export function _encode_FADU_Identity_first_last(
  value: FADU_Identity_first_last,
  elGetter: $.ASN1Encoder<FADU_Identity_first_last>
) {
  if (!_cached_encoder_for_FADU_Identity_first_last) {
    _cached_encoder_for_FADU_Identity_first_last = $._encodeInteger;
  }
  return _cached_encoder_for_FADU_Identity_first_last(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FADU_Identity_first_last */

/* eslint-enable */
