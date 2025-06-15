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

/* START_OF_SYMBOL_DEFINITION Priority */
/**
 * @summary Priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Priority  ::=  INTEGER(0..MAX)
 * ```
 */
export type Priority = INTEGER;
/* END_OF_SYMBOL_DEFINITION Priority */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Priority */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Priority */

/* START_OF_SYMBOL_DEFINITION _decode_Priority */
export const _decode_Priority = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_Priority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Priority */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Priority */

/* START_OF_SYMBOL_DEFINITION _encode_Priority */
export const _encode_Priority = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_Priority */

/* eslint-enable */
