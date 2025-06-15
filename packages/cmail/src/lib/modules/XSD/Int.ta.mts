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

/* START_OF_SYMBOL_DEFINITION Int */
/**
 * @summary Int
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Int  ::=  INTEGER (-2147483648..2147483647)
 * ```
 */
export type Int = INTEGER;
/* END_OF_SYMBOL_DEFINITION Int */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Int */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Int */

/* START_OF_SYMBOL_DEFINITION _decode_Int */
export const _decode_Int = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Int */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Int */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Int */

/* START_OF_SYMBOL_DEFINITION _encode_Int */
export const _encode_Int = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Int */

/* eslint-enable */
