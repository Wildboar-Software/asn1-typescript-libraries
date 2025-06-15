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

/**
 * @summary ProcessedLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {no-value-available, raw, intermediate, processed
 * }
 * ```@enum {number}
 */
export enum _enum_for_ProcessedLevel {
  no_value_available = 0,
  raw = 1,
  intermediate = 2,
  processed = 3,
}

/**
 * @summary ProcessedLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {no-value-available, raw, intermediate, processed
 * }
 * ```@enum {number}
 */
export type ProcessedLevel = _enum_for_ProcessedLevel;

/**
 * @summary ProcessedLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessedLevel  ::=  ENUMERATED {no-value-available, raw, intermediate, processed
 * }
 * ```@enum {number}
 */
export const ProcessedLevel = _enum_for_ProcessedLevel;

/**
 * @summary ProcessedLevel_no_value_available
 * @constant
 * @type {number}
 */
export const ProcessedLevel_no_value_available: ProcessedLevel =
  ProcessedLevel.no_value_available; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_value_available
 * @constant
 * @type {number}
 */
export const no_value_available: ProcessedLevel =
  ProcessedLevel.no_value_available; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_raw
 * @constant
 * @type {number}
 */
export const ProcessedLevel_raw: ProcessedLevel =
  ProcessedLevel.raw; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary raw
 * @constant
 * @type {number}
 */
export const raw: ProcessedLevel =
  ProcessedLevel.raw; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_intermediate
 * @constant
 * @type {number}
 */
export const ProcessedLevel_intermediate: ProcessedLevel =
  ProcessedLevel.intermediate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intermediate
 * @constant
 * @type {number}
 */
export const intermediate: ProcessedLevel =
  ProcessedLevel.intermediate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcessedLevel_processed
 * @constant
 * @type {number}
 */
export const ProcessedLevel_processed: ProcessedLevel =
  ProcessedLevel.processed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary processed
 * @constant
 * @type {number}
 */
export const processed: ProcessedLevel =
  ProcessedLevel.processed; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ProcessedLevel = $._decodeEnumerated;


export const _encode_ProcessedLevel = $._encodeEnumerated;


/* eslint-enable */
