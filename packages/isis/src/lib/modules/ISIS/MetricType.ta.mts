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

/* START_OF_SYMBOL_DEFINITION _enum_for_MetricType */
/**
 * @summary MetricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetricType  ::=  ENUMERATED {internal(0), external(1)}
 * ```@enum {number}
 */
export enum _enum_for_MetricType {
  internal = 0,
  external = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_MetricType */

/* START_OF_SYMBOL_DEFINITION MetricType */
/**
 * @summary MetricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetricType  ::=  ENUMERATED {internal(0), external(1)}
 * ```@enum {number}
 */
export type MetricType = _enum_for_MetricType;
/* END_OF_SYMBOL_DEFINITION MetricType */

/* START_OF_SYMBOL_DEFINITION MetricType */
/**
 * @summary MetricType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetricType  ::=  ENUMERATED {internal(0), external(1)}
 * ```@enum {number}
 */
export const MetricType = _enum_for_MetricType;
/* END_OF_SYMBOL_DEFINITION MetricType */

/* START_OF_SYMBOL_DEFINITION MetricType_internal */
/**
 * @summary MetricType_internal
 * @constant
 * @type {number}
 */
export const MetricType_internal: MetricType =
  MetricType.internal; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MetricType_internal */

/* START_OF_SYMBOL_DEFINITION internal */
/**
 * @summary internal
 * @constant
 * @type {number}
 */
export const internal: MetricType =
  MetricType.internal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internal */

/* START_OF_SYMBOL_DEFINITION MetricType_external */
/**
 * @summary MetricType_external
 * @constant
 * @type {number}
 */
export const MetricType_external: MetricType =
  MetricType.external; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MetricType_external */

/* START_OF_SYMBOL_DEFINITION external */
/**
 * @summary external
 * @constant
 * @type {number}
 */
export const external: MetricType =
  MetricType.external; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION external */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MetricType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MetricType */

/* START_OF_SYMBOL_DEFINITION _decode_MetricType */
export const _decode_MetricType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_MetricType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MetricType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MetricType */

/* START_OF_SYMBOL_DEFINITION _encode_MetricType */
export const _encode_MetricType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_MetricType */

/* eslint-enable */
