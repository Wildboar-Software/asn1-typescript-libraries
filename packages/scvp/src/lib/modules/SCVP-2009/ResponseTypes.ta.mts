/* eslint-disable */
import {
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
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseTypes */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseTypes */
export const _decode_ResponseTypes = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ResponseTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTypes */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseTypes */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseTypes */
export const _encode_ResponseTypes = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ResponseTypes */

/* eslint-enable */
