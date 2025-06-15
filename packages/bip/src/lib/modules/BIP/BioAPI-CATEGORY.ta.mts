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

/* START_OF_SYMBOL_DEFINITION _enum_for_BioAPI_CATEGORY */
export enum _enum_for_BioAPI_CATEGORY {
  archive = 0,
  comparisonAlgorithm = 1,
  processingAlgorithm = 2,
  sensor = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY */
/**
 * @summary BioAPI_CATEGORY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-CATEGORY  ::=  ENUMERATED {
 *   archive, comparisonAlgorithm, processingAlgorithm, sensor, ...
 *   }
 * ```@enum {number}
 */
export type BioAPI_CATEGORY = _enum_for_BioAPI_CATEGORY | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_archive */
/**
 * @summary BioAPI_CATEGORY_archive
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_archive: BioAPI_CATEGORY = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_archive */

/* START_OF_SYMBOL_DEFINITION archive */
/**
 * @summary archive
 * @constant
 * @type {number}
 */
export const archive: BioAPI_CATEGORY = BioAPI_CATEGORY_archive; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION archive */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_comparisonAlgorithm */
/**
 * @summary BioAPI_CATEGORY_comparisonAlgorithm
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_comparisonAlgorithm: BioAPI_CATEGORY = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_comparisonAlgorithm */

/* START_OF_SYMBOL_DEFINITION comparisonAlgorithm */
/**
 * @summary comparisonAlgorithm
 * @constant
 * @type {number}
 */
export const comparisonAlgorithm: BioAPI_CATEGORY = BioAPI_CATEGORY_comparisonAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION comparisonAlgorithm */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_processingAlgorithm */
/**
 * @summary BioAPI_CATEGORY_processingAlgorithm
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_processingAlgorithm: BioAPI_CATEGORY = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_processingAlgorithm */

/* START_OF_SYMBOL_DEFINITION processingAlgorithm */
/**
 * @summary processingAlgorithm
 * @constant
 * @type {number}
 */
export const processingAlgorithm: BioAPI_CATEGORY = BioAPI_CATEGORY_processingAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION processingAlgorithm */

/* START_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_sensor */
/**
 * @summary BioAPI_CATEGORY_sensor
 * @constant
 * @type {number}
 */
export const BioAPI_CATEGORY_sensor: BioAPI_CATEGORY = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BioAPI_CATEGORY_sensor */

/* START_OF_SYMBOL_DEFINITION sensor */
/**
 * @summary sensor
 * @constant
 * @type {number}
 */
export const sensor: BioAPI_CATEGORY = BioAPI_CATEGORY_sensor; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sensor */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_CATEGORY */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_CATEGORY */
export const _decode_BioAPI_CATEGORY = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_CATEGORY */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_CATEGORY */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_CATEGORY */
export const _encode_BioAPI_CATEGORY = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_CATEGORY */

/* eslint-enable */
