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

/* START_OF_SYMBOL_DEFINITION TwoByte */
/**
 * @summary TwoByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TwoByte  ::=  INTEGER(0..65535)
 * ```
 */
export type TwoByte = INTEGER;
/* END_OF_SYMBOL_DEFINITION TwoByte */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TwoByte */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TwoByte */

/* START_OF_SYMBOL_DEFINITION _decode_TwoByte */
export const _decode_TwoByte = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_TwoByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TwoByte */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TwoByte */

/* START_OF_SYMBOL_DEFINITION _encode_TwoByte */
export const _encode_TwoByte = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_TwoByte */

/* eslint-enable */
