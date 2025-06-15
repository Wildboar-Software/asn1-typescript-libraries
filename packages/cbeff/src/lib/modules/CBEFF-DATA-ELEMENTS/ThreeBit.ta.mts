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

/* START_OF_SYMBOL_DEFINITION ThreeBit */
/**
 * @summary ThreeBit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThreeBit  ::=  INTEGER(0..7)
 * ```
 */
export type ThreeBit = INTEGER;
/* END_OF_SYMBOL_DEFINITION ThreeBit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ThreeBit */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ThreeBit */

/* START_OF_SYMBOL_DEFINITION _decode_ThreeBit */
export const _decode_ThreeBit = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ThreeBit */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ThreeBit */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ThreeBit */

/* START_OF_SYMBOL_DEFINITION _encode_ThreeBit */
export const _encode_ThreeBit = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ThreeBit */

/* eslint-enable */
