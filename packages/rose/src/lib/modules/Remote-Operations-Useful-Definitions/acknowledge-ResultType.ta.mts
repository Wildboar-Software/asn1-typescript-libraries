/* eslint-disable */
import {
  ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_acknowledge_ResultType */
export enum _enum_for_acknowledge_ResultType {
  acknowledged = 0,
  unknown = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION acknowledge_ResultType */
/**
 * @summary acknowledge_ResultType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acknowledge-ResultType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type acknowledge_ResultType =
  | _enum_for_acknowledge_ResultType
  | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION acknowledge_ResultType_acknowledged */
/**
 * @summary acknowledge_ResultType_acknowledged
 * @constant
 * @type {number}
 */
export const acknowledge_ResultType_acknowledged: acknowledge_ResultType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION acknowledge_ResultType_acknowledged */

/* START_OF_SYMBOL_DEFINITION acknowledged */
/**
 * @summary acknowledged
 * @constant
 * @type {number}
 */
export const acknowledged: acknowledge_ResultType = acknowledge_ResultType_acknowledged; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION acknowledged */

/* START_OF_SYMBOL_DEFINITION acknowledge_ResultType_unknown */
/**
 * @summary acknowledge_ResultType_unknown
 * @constant
 * @type {number}
 */
export const acknowledge_ResultType_unknown: acknowledge_ResultType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION acknowledge_ResultType_unknown */

/* START_OF_SYMBOL_DEFINITION unknown */
/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: acknowledge_ResultType = acknowledge_ResultType_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_acknowledge_ResultType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION _decode_acknowledge_ResultType */
export const _decode_acknowledge_ResultType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_acknowledge_ResultType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_acknowledge_ResultType */

/* START_OF_SYMBOL_DEFINITION _encode_acknowledge_ResultType */
export const _encode_acknowledge_ResultType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_acknowledge_ResultType */

/* eslint-enable */
