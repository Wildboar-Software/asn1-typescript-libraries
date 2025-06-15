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

/* START_OF_SYMBOL_DEFINITION MaximumPathSplits */
/**
 * @summary MaximumPathSplits
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumPathSplits  ::=  INTEGER(1..32)
 * ```
 */
export type MaximumPathSplits = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaximumPathSplits */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumPathSplits */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumPathSplits */

/* START_OF_SYMBOL_DEFINITION _decode_MaximumPathSplits */
export const _decode_MaximumPathSplits = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MaximumPathSplits */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumPathSplits */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumPathSplits */

/* START_OF_SYMBOL_DEFINITION _encode_MaximumPathSplits */
export const _encode_MaximumPathSplits = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MaximumPathSplits */

/* eslint-enable */
