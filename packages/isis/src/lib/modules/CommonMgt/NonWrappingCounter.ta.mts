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

/* START_OF_SYMBOL_DEFINITION NonWrappingCounter */
/**
 * @summary NonWrappingCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonWrappingCounter  ::=  INTEGER(0..18446744073709551615)
 * ```
 */
export type NonWrappingCounter = INTEGER;
/* END_OF_SYMBOL_DEFINITION NonWrappingCounter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NonWrappingCounter */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NonWrappingCounter */

/* START_OF_SYMBOL_DEFINITION _decode_NonWrappingCounter */
export const _decode_NonWrappingCounter = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_NonWrappingCounter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NonWrappingCounter */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NonWrappingCounter */

/* START_OF_SYMBOL_DEFINITION _encode_NonWrappingCounter */
export const _encode_NonWrappingCounter = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_NonWrappingCounter */

/* eslint-enable */
