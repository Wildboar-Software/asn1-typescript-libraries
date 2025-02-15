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

/* START_OF_SYMBOL_DEFINITION ABRT_source */
/**
 * @summary ABRT_source
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABRT-source  ::=  INTEGER {acse-service-user(0), acse-service-provider(1)
 * }(0..1, ...)
 * ```
 */
export type ABRT_source = INTEGER;
/* END_OF_SYMBOL_DEFINITION ABRT_source */

/* START_OF_SYMBOL_DEFINITION ABRT_source_acse_service_user */
/**
 * @summary ABRT_source_acse_service_user
 * @constant
 * @type {number}
 */
export const ABRT_source_acse_service_user: ABRT_source = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_source_acse_service_user */

/* START_OF_SYMBOL_DEFINITION acse_service_user */
/**
 * @summary ABRT_source_acse_service_user
 * @constant
 * @type {number}
 */
export const acse_service_user: ABRT_source = ABRT_source_acse_service_user; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION acse_service_user */

/* START_OF_SYMBOL_DEFINITION ABRT_source_acse_service_provider */
/**
 * @summary ABRT_source_acse_service_provider
 * @constant
 * @type {number}
 */
export const ABRT_source_acse_service_provider: ABRT_source = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_source_acse_service_provider */

/* START_OF_SYMBOL_DEFINITION acse_service_provider */
/**
 * @summary ABRT_source_acse_service_provider
 * @constant
 * @type {number}
 */
export const acse_service_provider: ABRT_source = ABRT_source_acse_service_provider; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION acse_service_provider */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_source */
let _cached_decoder_for_ABRT_source: $.ASN1Decoder<ABRT_source> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_source */

/* START_OF_SYMBOL_DEFINITION _decode_ABRT_source */
/**
 * @summary Decodes an ASN.1 element into a(n) ABRT_source
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ABRT_source} The decoded data structure.
 */
export function _decode_ABRT_source(el: _Element) {
  if (!_cached_decoder_for_ABRT_source) {
    _cached_decoder_for_ABRT_source = $._decodeInteger;
  }
  return _cached_decoder_for_ABRT_source(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ABRT_source */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_source */
let _cached_encoder_for_ABRT_source: $.ASN1Encoder<ABRT_source> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_source */

/* START_OF_SYMBOL_DEFINITION _encode_ABRT_source */
/**
 * @summary Encodes a(n) ABRT_source into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABRT_source, encoded as an ASN.1 Element.
 */
export function _encode_ABRT_source(
  value: ABRT_source,
  elGetter: $.ASN1Encoder<ABRT_source>
) {
  if (!_cached_encoder_for_ABRT_source) {
    _cached_encoder_for_ABRT_source = $._encodeInteger;
  }
  return _cached_encoder_for_ABRT_source(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ABRT_source */

/* eslint-enable */
