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

/* START_OF_SYMBOL_DEFINITION ThreeByte */
/**
 * @summary ThreeByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThreeByte  ::=  INTEGER(0..16777215)
 * ```
 */
export type ThreeByte = INTEGER;
/* END_OF_SYMBOL_DEFINITION ThreeByte */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ThreeByte */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ThreeByte */

/* START_OF_SYMBOL_DEFINITION _decode_ThreeByte */
export const _decode_ThreeByte = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ThreeByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ThreeByte */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ThreeByte */

/* START_OF_SYMBOL_DEFINITION _encode_ThreeByte */
export const _encode_ThreeByte = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ThreeByte */

/* eslint-enable */
