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

/* START_OF_SYMBOL_DEFINITION IDLength */
/**
 * @summary IDLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDLength  ::=  INTEGER(0..8)
 * ```
 */
export type IDLength = INTEGER;
/* END_OF_SYMBOL_DEFINITION IDLength */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IDLength */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IDLength */

/* START_OF_SYMBOL_DEFINITION _decode_IDLength */
export const _decode_IDLength = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_IDLength */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IDLength */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IDLength */

/* START_OF_SYMBOL_DEFINITION _encode_IDLength */
export const _encode_IDLength = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_IDLength */

/* eslint-enable */
