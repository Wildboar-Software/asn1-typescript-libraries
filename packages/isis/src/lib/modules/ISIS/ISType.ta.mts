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

/* START_OF_SYMBOL_DEFINITION _enum_for_ISType */
/**
 * @summary ISType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISType  ::=  ENUMERATED {level1IS(1), level2IS(2)}
 * ```@enum {number}
 */
export enum _enum_for_ISType {
  level1IS = 1,
  level2IS = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ISType */

/* START_OF_SYMBOL_DEFINITION ISType */
/**
 * @summary ISType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISType  ::=  ENUMERATED {level1IS(1), level2IS(2)}
 * ```@enum {number}
 */
export type ISType = _enum_for_ISType;
/* END_OF_SYMBOL_DEFINITION ISType */

/* START_OF_SYMBOL_DEFINITION ISType */
/**
 * @summary ISType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ISType  ::=  ENUMERATED {level1IS(1), level2IS(2)}
 * ```@enum {number}
 */
export const ISType = _enum_for_ISType;
/* END_OF_SYMBOL_DEFINITION ISType */

/* START_OF_SYMBOL_DEFINITION ISType_level1IS */
/**
 * @summary ISType_level1IS
 * @constant
 * @type {number}
 */
export const ISType_level1IS: ISType =
  ISType.level1IS; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ISType_level1IS */

/* START_OF_SYMBOL_DEFINITION level1IS */
/**
 * @summary level1IS
 * @constant
 * @type {number}
 */
export const level1IS: ISType =
  ISType.level1IS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level1IS */

/* START_OF_SYMBOL_DEFINITION ISType_level2IS */
/**
 * @summary ISType_level2IS
 * @constant
 * @type {number}
 */
export const ISType_level2IS: ISType =
  ISType.level2IS; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ISType_level2IS */

/* START_OF_SYMBOL_DEFINITION level2IS */
/**
 * @summary level2IS
 * @constant
 * @type {number}
 */
export const level2IS: ISType =
  ISType.level2IS; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION level2IS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ISType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ISType */

/* START_OF_SYMBOL_DEFINITION _decode_ISType */
export const _decode_ISType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ISType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ISType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ISType */

/* START_OF_SYMBOL_DEFINITION _encode_ISType */
export const _encode_ISType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ISType */

/* eslint-enable */
