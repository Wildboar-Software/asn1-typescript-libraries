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

/* START_OF_SYMBOL_DEFINITION TwoBit */
/**
 * @summary TwoBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TwoBit  ::=  INTEGER(0..3)
 * ```
 */
export type TwoBit = INTEGER;
/* END_OF_SYMBOL_DEFINITION TwoBit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TwoBit */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TwoBit */

/* START_OF_SYMBOL_DEFINITION _decode_TwoBit */
export const _decode_TwoBit = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TwoBit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TwoBit */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TwoBit */

/* START_OF_SYMBOL_DEFINITION _encode_TwoBit */
export const _encode_TwoBit = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TwoBit */

/* eslint-enable */
