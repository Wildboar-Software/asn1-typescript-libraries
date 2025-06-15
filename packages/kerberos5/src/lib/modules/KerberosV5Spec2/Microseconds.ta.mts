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

/* START_OF_SYMBOL_DEFINITION Microseconds */
/**
 * @summary Microseconds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Microseconds     ::=  INTEGER (0..999999)
 * ```
 */
export type Microseconds = INTEGER;
/* END_OF_SYMBOL_DEFINITION Microseconds */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Microseconds */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Microseconds */

/* START_OF_SYMBOL_DEFINITION _decode_Microseconds */
export const _decode_Microseconds = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Microseconds */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Microseconds */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Microseconds */

/* START_OF_SYMBOL_DEFINITION _encode_Microseconds */
export const _encode_Microseconds = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Microseconds */

/* eslint-enable */
