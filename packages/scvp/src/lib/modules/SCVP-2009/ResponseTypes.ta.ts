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

/* START_OF_SYMBOL_DEFINITION _enum_for_ResponseTypes */
/**
 * @summary ResponseTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTypes   ::=  ENUMERATED {
 *     cached-only                (0),
 *     non-cached-only            (1),
 *     cached-and-non-cached      (2)
 * }
 * ```@enum {number}
 */
export enum _enum_for_ResponseTypes {
  cached_only = 0,
  non_cached_only = 1,
  cached_and_non_cached = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ResponseTypes */

/* START_OF_SYMBOL_DEFINITION ResponseTypes */
/**
 * @summary ResponseTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTypes   ::=  ENUMERATED {
 *     cached-only                (0),
 *     non-cached-only            (1),
 *     cached-and-non-cached      (2)
 * }
 * ```@enum {number}
 */
export type ResponseTypes = _enum_for_ResponseTypes;
/* END_OF_SYMBOL_DEFINITION ResponseTypes */

/* START_OF_SYMBOL_DEFINITION ResponseTypes */
/**
 * @summary ResponseTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseTypes   ::=  ENUMERATED {
 *     cached-only                (0),
 *     non-cached-only            (1),
 *     cached-and-non-cached      (2)
 * }
 * ```@enum {number}
 */
export const ResponseTypes = _enum_for_ResponseTypes;
/* END_OF_SYMBOL_DEFINITION ResponseTypes */

/* START_OF_SYMBOL_DEFINITION ResponseTypes_cached_only */
/**
 * @summary ResponseTypes_cached_only
 * @constant
 * @type {number}
 */
export const ResponseTypes_cached_only: ResponseTypes =
  ResponseTypes.cached_only; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResponseTypes_cached_only */

/* START_OF_SYMBOL_DEFINITION cached_only */
/**
 * @summary cached_only
 * @constant
 * @type {number}
 */
export const cached_only: ResponseTypes =
  ResponseTypes.cached_only; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cached_only */

/* START_OF_SYMBOL_DEFINITION ResponseTypes_non_cached_only */
/**
 * @summary ResponseTypes_non_cached_only
 * @constant
 * @type {number}
 */
export const ResponseTypes_non_cached_only: ResponseTypes =
  ResponseTypes.non_cached_only; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResponseTypes_non_cached_only */

/* START_OF_SYMBOL_DEFINITION non_cached_only */
/**
 * @summary non_cached_only
 * @constant
 * @type {number}
 */
export const non_cached_only: ResponseTypes =
  ResponseTypes.non_cached_only; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION non_cached_only */

/* START_OF_SYMBOL_DEFINITION ResponseTypes_cached_and_non_cached */
/**
 * @summary ResponseTypes_cached_and_non_cached
 * @constant
 * @type {number}
 */
export const ResponseTypes_cached_and_non_cached: ResponseTypes =
  ResponseTypes.cached_and_non_cached; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ResponseTypes_cached_and_non_cached */

/* START_OF_SYMBOL_DEFINITION cached_and_non_cached */
/**
 * @summary cached_and_non_cached
 * @constant
 * @type {number}
 */
export const cached_and_non_cached: ResponseTypes =
  ResponseTypes.cached_and_non_cached; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cached_and_non_cached */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseTypes */
let _cached_decoder_for_ResponseTypes: $.ASN1Decoder<ResponseTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseTypes */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponseTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseTypes} The decoded data structure.
 */
export function _decode_ResponseTypes(el: _Element) {
  if (!_cached_decoder_for_ResponseTypes) {
    _cached_decoder_for_ResponseTypes = $._decodeEnumerated;
  }
  return _cached_decoder_for_ResponseTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponseTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTypes */
let _cached_encoder_for_ResponseTypes: $.ASN1Encoder<ResponseTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTypes */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseTypes */
/**
 * @summary Encodes a(n) ResponseTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseTypes, encoded as an ASN.1 Element.
 */
export function _encode_ResponseTypes(
  value: ResponseTypes,
  elGetter: $.ASN1Encoder<ResponseTypes>
) {
  if (!_cached_encoder_for_ResponseTypes) {
    _cached_encoder_for_ResponseTypes = $._encodeEnumerated;
  }
  return _cached_encoder_for_ResponseTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponseTypes */

/* eslint-enable */
