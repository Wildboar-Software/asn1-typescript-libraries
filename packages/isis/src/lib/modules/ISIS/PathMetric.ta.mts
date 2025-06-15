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

/* START_OF_SYMBOL_DEFINITION PathMetric */
/**
 * @summary PathMetric
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PathMetric  ::=  INTEGER(0..maxPathMetric)
 * ```
 */
export type PathMetric = INTEGER;
/* END_OF_SYMBOL_DEFINITION PathMetric */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PathMetric */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PathMetric */

/* START_OF_SYMBOL_DEFINITION _decode_PathMetric */
export const _decode_PathMetric = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_PathMetric */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PathMetric */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PathMetric */

/* START_OF_SYMBOL_DEFINITION _encode_PathMetric */
export const _encode_PathMetric = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_PathMetric */

/* eslint-enable */
