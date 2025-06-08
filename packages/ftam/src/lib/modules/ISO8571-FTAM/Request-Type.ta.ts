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

/* START_OF_SYMBOL_DEFINITION Request_Type */
/**
 * @summary Request_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Request-Type  ::=  [APPLICATION 31] IMPLICIT INTEGER {read(0), write(1)}
 * ```
 */
export type Request_Type = INTEGER;
/* END_OF_SYMBOL_DEFINITION Request_Type */

/* START_OF_SYMBOL_DEFINITION Request_Type_read */
/**
 * @summary Request_Type_read
 * @constant
 * @type {number}
 */
export const Request_Type_read: Request_Type = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Request_Type_read */

/* START_OF_SYMBOL_DEFINITION read */
/**
 * @summary Request_Type_read
 * @constant
 * @type {number}
 */
export const read: Request_Type = Request_Type_read; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION read */

/* START_OF_SYMBOL_DEFINITION Request_Type_write */
/**
 * @summary Request_Type_write
 * @constant
 * @type {number}
 */
export const Request_Type_write: Request_Type = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Request_Type_write */

/* START_OF_SYMBOL_DEFINITION write */
/**
 * @summary Request_Type_write
 * @constant
 * @type {number}
 */
export const write: Request_Type = Request_Type_write; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION write */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Request_Type */
let _cached_decoder_for_Request_Type: $.ASN1Decoder<Request_Type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Request_Type */

/* START_OF_SYMBOL_DEFINITION _decode_Request_Type */
/**
 * @summary Decodes an ASN.1 element into a(n) Request_Type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Request_Type} The decoded data structure.
 */
export function _decode_Request_Type(el: _Element) {
  if (!_cached_decoder_for_Request_Type) {
    _cached_decoder_for_Request_Type = $._decode_implicit<Request_Type>(
      () => $._decodeInteger
    );
  }
  return _cached_decoder_for_Request_Type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Request_Type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Request_Type */
let _cached_encoder_for_Request_Type: $.ASN1Encoder<Request_Type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Request_Type */

/* START_OF_SYMBOL_DEFINITION _encode_Request_Type */
/**
 * @summary Encodes a(n) Request_Type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request_Type, encoded as an ASN.1 Element.
 */
export function _encode_Request_Type(
  value: Request_Type,
  elGetter: $.ASN1Encoder<Request_Type>
) {
  if (!_cached_encoder_for_Request_Type) {
    _cached_encoder_for_Request_Type = $._encode_implicit(
      _TagClass.application,
      31,
      () => $._encodeInteger,
      $.BER
    );
  }
  return _cached_encoder_for_Request_Type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Request_Type */

/* eslint-enable */
