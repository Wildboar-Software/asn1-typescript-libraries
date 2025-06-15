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

/* START_OF_SYMBOL_DEFINITION FourBit */
/**
 * @summary FourBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FourBit  ::=  INTEGER(0..15)
 * ```
 */
export type FourBit = INTEGER;
/* END_OF_SYMBOL_DEFINITION FourBit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FourBit */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FourBit */

/* START_OF_SYMBOL_DEFINITION _decode_FourBit */
export const _decode_FourBit = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_FourBit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FourBit */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FourBit */

/* START_OF_SYMBOL_DEFINITION _encode_FourBit */
export const _encode_FourBit = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_FourBit */

/* eslint-enable */
