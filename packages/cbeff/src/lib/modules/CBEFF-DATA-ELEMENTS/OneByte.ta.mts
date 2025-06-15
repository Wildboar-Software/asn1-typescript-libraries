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

/* START_OF_SYMBOL_DEFINITION OneByte */
/**
 * @summary OneByte
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneByte  ::=  INTEGER(0..255)
 * ```
 */
export type OneByte = INTEGER;
/* END_OF_SYMBOL_DEFINITION OneByte */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OneByte */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OneByte */

/* START_OF_SYMBOL_DEFINITION _decode_OneByte */
export const _decode_OneByte = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_OneByte */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OneByte */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OneByte */

/* START_OF_SYMBOL_DEFINITION _encode_OneByte */
export const _encode_OneByte = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_OneByte */

/* eslint-enable */
