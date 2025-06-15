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

/* START_OF_SYMBOL_DEFINITION MaximumVirtualAdjacencies */
/**
 * @summary MaximumVirtualAdjacencies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaximumVirtualAdjacencies  ::=  INTEGER(0..32)
 * ```
 */
export type MaximumVirtualAdjacencies = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaximumVirtualAdjacencies */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumVirtualAdjacencies */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaximumVirtualAdjacencies */

/* START_OF_SYMBOL_DEFINITION _decode_MaximumVirtualAdjacencies */
export const _decode_MaximumVirtualAdjacencies = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_MaximumVirtualAdjacencies */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumVirtualAdjacencies */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaximumVirtualAdjacencies */

/* START_OF_SYMBOL_DEFINITION _encode_MaximumVirtualAdjacencies */
export const _encode_MaximumVirtualAdjacencies = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_MaximumVirtualAdjacencies */

/* eslint-enable */
