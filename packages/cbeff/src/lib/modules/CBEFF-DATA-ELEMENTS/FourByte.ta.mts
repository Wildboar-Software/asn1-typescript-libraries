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

/* START_OF_SYMBOL_DEFINITION FourByte */
/**
 * @summary FourByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FourByte  ::=  INTEGER(0..4294967295)
 * ```
 */
export type FourByte = INTEGER;
/* END_OF_SYMBOL_DEFINITION FourByte */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FourByte */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FourByte */

/* START_OF_SYMBOL_DEFINITION _decode_FourByte */
export const _decode_FourByte = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_FourByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FourByte */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FourByte */

/* START_OF_SYMBOL_DEFINITION _encode_FourByte */
export const _encode_FourByte = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_FourByte */

/* eslint-enable */
