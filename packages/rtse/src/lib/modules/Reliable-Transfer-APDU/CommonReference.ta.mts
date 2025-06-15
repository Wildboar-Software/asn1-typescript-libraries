/* eslint-disable */
import {
  UTCTime,
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

/* START_OF_SYMBOL_DEFINITION CommonReference */
/**
 * @summary CommonReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonReference  ::=  UTCTime
 * ```
 */
export type CommonReference = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION CommonReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonReference */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonReference */

/* START_OF_SYMBOL_DEFINITION _decode_CommonReference */
export const _decode_CommonReference = $._decodeUTCTime;
/* END_OF_SYMBOL_DEFINITION _decode_CommonReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonReference */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonReference */

/* START_OF_SYMBOL_DEFINITION _encode_CommonReference */
export const _encode_CommonReference = $._encodeUTCTime;

/* END_OF_SYMBOL_DEFINITION _encode_CommonReference */

/* eslint-enable */
