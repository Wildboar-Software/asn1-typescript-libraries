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

/* START_OF_SYMBOL_DEFINITION Release_response_reason */
/**
 * @summary Release_response_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-response-reason  ::=  INTEGER {
 *   normal(0), not-finished(1), user-defined(30)}(0 | 1 | 30, ...)
 * ```
 */
export type Release_response_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Release_response_reason */

/* START_OF_SYMBOL_DEFINITION Release_response_reason_normal */
/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const Release_response_reason_normal: Release_response_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_response_reason_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const normal: Release_response_reason = Release_response_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION Release_response_reason_not_finished */
/**
 * @summary Release_response_reason_not_finished
 * @constant
 * @type {number}
 */
export const Release_response_reason_not_finished: Release_response_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_response_reason_not_finished */

/* START_OF_SYMBOL_DEFINITION not_finished */
/**
 * @summary Release_response_reason_not_finished
 * @constant
 * @type {number}
 */
export const not_finished: Release_response_reason = Release_response_reason_not_finished; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION not_finished */

/* START_OF_SYMBOL_DEFINITION Release_response_reason_user_defined */
/**
 * @summary Release_response_reason_user_defined
 * @constant
 * @type {number}
 */
export const Release_response_reason_user_defined: Release_response_reason = 30; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_response_reason_user_defined */

/* START_OF_SYMBOL_DEFINITION user_defined */
/**
 * @summary Release_response_reason_user_defined
 * @constant
 * @type {number}
 */
export const user_defined: Release_response_reason = Release_response_reason_user_defined; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_defined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_response_reason */
let _cached_decoder_for_Release_response_reason: $.ASN1Decoder<Release_response_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_response_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Release_response_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) Release_response_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Release_response_reason} The decoded data structure.
 */
export function _decode_Release_response_reason(el: _Element) {
  if (!_cached_decoder_for_Release_response_reason) {
    _cached_decoder_for_Release_response_reason = $._decodeInteger;
  }
  return _cached_decoder_for_Release_response_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Release_response_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_response_reason */
let _cached_encoder_for_Release_response_reason: $.ASN1Encoder<Release_response_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_response_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Release_response_reason */
/**
 * @summary Encodes a(n) Release_response_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Release_response_reason, encoded as an ASN.1 Element.
 */
export function _encode_Release_response_reason(
  value: Release_response_reason,
  elGetter: $.ASN1Encoder<Release_response_reason>
) {
  if (!_cached_encoder_for_Release_response_reason) {
    _cached_encoder_for_Release_response_reason = $._encodeInteger;
  }
  return _cached_encoder_for_Release_response_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Release_response_reason */

/* eslint-enable */
