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

/* START_OF_SYMBOL_DEFINITION Request_Operation_Result */
/**
 * @summary Request_Operation_Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Request-Operation-Result  ::=  [APPLICATION 31] IMPLICIT INTEGER {
 *   summary(0), fiii-list(1)}
 * ```
 */
export type Request_Operation_Result = INTEGER;
/* END_OF_SYMBOL_DEFINITION Request_Operation_Result */

/* START_OF_SYMBOL_DEFINITION Request_Operation_Result_summary */
/**
 * @summary Request_Operation_Result_summary
 * @constant
 * @type {number}
 */
export const Request_Operation_Result_summary: Request_Operation_Result = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Request_Operation_Result_summary */

/* START_OF_SYMBOL_DEFINITION summary */
/**
 * @summary Request_Operation_Result_summary
 * @constant
 * @type {number}
 */
export const summary: Request_Operation_Result = Request_Operation_Result_summary; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION summary */

/* START_OF_SYMBOL_DEFINITION Request_Operation_Result_fiii_list */
/**
 * @summary Request_Operation_Result_fiii_list
 * @constant
 * @type {number}
 */
export const Request_Operation_Result_fiii_list: Request_Operation_Result = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Request_Operation_Result_fiii_list */

/* START_OF_SYMBOL_DEFINITION fiii_list */
/**
 * @summary Request_Operation_Result_fiii_list
 * @constant
 * @type {number}
 */
export const fiii_list: Request_Operation_Result = Request_Operation_Result_fiii_list; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION fiii_list */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Request_Operation_Result */
let _cached_decoder_for_Request_Operation_Result: $.ASN1Decoder<Request_Operation_Result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Request_Operation_Result */

/* START_OF_SYMBOL_DEFINITION _decode_Request_Operation_Result */
/**
 * @summary Decodes an ASN.1 element into a(n) Request_Operation_Result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Request_Operation_Result} The decoded data structure.
 */
export function _decode_Request_Operation_Result(el: _Element) {
  if (!_cached_decoder_for_Request_Operation_Result) {
    _cached_decoder_for_Request_Operation_Result = $._decode_implicit<Request_Operation_Result>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_Request_Operation_Result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Request_Operation_Result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Request_Operation_Result */
let _cached_encoder_for_Request_Operation_Result: $.ASN1Encoder<Request_Operation_Result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Request_Operation_Result */

/* START_OF_SYMBOL_DEFINITION _encode_Request_Operation_Result */
/**
 * @summary Encodes a(n) Request_Operation_Result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request_Operation_Result, encoded as an ASN.1 Element.
 */
export function _encode_Request_Operation_Result(
  value: Request_Operation_Result,
  elGetter: $.ASN1Encoder<Request_Operation_Result>
) {
  if (!_cached_encoder_for_Request_Operation_Result) {
    _cached_encoder_for_Request_Operation_Result = $._encode_implicit(
      _TagClass.application,
      31,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_Request_Operation_Result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Request_Operation_Result */

/* eslint-enable */
