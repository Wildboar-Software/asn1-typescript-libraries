/* eslint-disable */
import {
  INTEGER,
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

/* START_OF_SYMBOL_DEFINITION Quality */
/**
 * @summary Quality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Quality  ::=  INTEGER {
 *   no-value-available(-3), quality-not-supported(-2), quality-not-recorded(-1)
 * }(-3..100)
 * ```
 */
export type Quality = INTEGER;
/* END_OF_SYMBOL_DEFINITION Quality */

/* START_OF_SYMBOL_DEFINITION Quality_no_value_available */
/**
 * @summary Quality_no_value_available
 * @constant
 * @type {number}
 */
export const Quality_no_value_available: Quality = -3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Quality_no_value_available */

/* START_OF_SYMBOL_DEFINITION no_value_available */
/**
 * @summary Quality_no_value_available
 * @constant
 * @type {number}
 */
export const no_value_available: Quality = Quality_no_value_available; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_value_available */

/* START_OF_SYMBOL_DEFINITION Quality_quality_not_supported */
/**
 * @summary Quality_quality_not_supported
 * @constant
 * @type {number}
 */
export const Quality_quality_not_supported: Quality = -2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Quality_quality_not_supported */

/* START_OF_SYMBOL_DEFINITION quality_not_supported */
/**
 * @summary Quality_quality_not_supported
 * @constant
 * @type {number}
 */
export const quality_not_supported: Quality = Quality_quality_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION quality_not_supported */

/* START_OF_SYMBOL_DEFINITION Quality_quality_not_recorded */
/**
 * @summary Quality_quality_not_recorded
 * @constant
 * @type {number}
 */
export const Quality_quality_not_recorded: Quality = -1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Quality_quality_not_recorded */

/* START_OF_SYMBOL_DEFINITION quality_not_recorded */
/**
 * @summary Quality_quality_not_recorded
 * @constant
 * @type {number}
 */
export const quality_not_recorded: Quality = Quality_quality_not_recorded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION quality_not_recorded */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Quality */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Quality */

/* START_OF_SYMBOL_DEFINITION _decode_Quality */
export const _decode_Quality = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Quality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Quality */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Quality */

/* START_OF_SYMBOL_DEFINITION _encode_Quality */
export const _encode_Quality = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Quality */

/* eslint-enable */
