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

/* START_OF_SYMBOL_DEFINITION _enum_for_ProcessedLevel */
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
/* END_OF_SYMBOL_DEFINITION _enum_for_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel */
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
/* END_OF_SYMBOL_DEFINITION ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel */
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
/* END_OF_SYMBOL_DEFINITION ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_no_value_available */
/**
 * @summary ProcessedLevel_no_value_available
 * @constant
 * @type {number}
 */
export const ProcessedLevel_no_value_available: ProcessedLevel =
  ProcessedLevel.no_value_available; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_no_value_available */

/* START_OF_SYMBOL_DEFINITION no_value_available */
/**
 * @summary no_value_available
 * @constant
 * @type {number}
 */
export const no_value_available: ProcessedLevel =
  ProcessedLevel.no_value_available; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION no_value_available */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_raw */
/**
 * @summary ProcessedLevel_raw
 * @constant
 * @type {number}
 */
export const ProcessedLevel_raw: ProcessedLevel =
  ProcessedLevel.raw; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_raw */

/* START_OF_SYMBOL_DEFINITION raw */
/**
 * @summary raw
 * @constant
 * @type {number}
 */
export const raw: ProcessedLevel =
  ProcessedLevel.raw; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION raw */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_intermediate */
/**
 * @summary ProcessedLevel_intermediate
 * @constant
 * @type {number}
 */
export const ProcessedLevel_intermediate: ProcessedLevel =
  ProcessedLevel.intermediate; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_intermediate */

/* START_OF_SYMBOL_DEFINITION intermediate */
/**
 * @summary intermediate
 * @constant
 * @type {number}
 */
export const intermediate: ProcessedLevel =
  ProcessedLevel.intermediate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION intermediate */

/* START_OF_SYMBOL_DEFINITION ProcessedLevel_processed */
/**
 * @summary ProcessedLevel_processed
 * @constant
 * @type {number}
 */
export const ProcessedLevel_processed: ProcessedLevel =
  ProcessedLevel.processed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ProcessedLevel_processed */

/* START_OF_SYMBOL_DEFINITION processed */
/**
 * @summary processed
 * @constant
 * @type {number}
 */
export const processed: ProcessedLevel =
  ProcessedLevel.processed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION processed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessedLevel */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION _decode_ProcessedLevel */
export const _decode_ProcessedLevel = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessedLevel */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProcessedLevel */

/* START_OF_SYMBOL_DEFINITION _encode_ProcessedLevel */
export const _encode_ProcessedLevel = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_ProcessedLevel */

/* eslint-enable */
