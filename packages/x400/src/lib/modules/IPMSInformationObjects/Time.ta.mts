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

/* START_OF_SYMBOL_DEFINITION Time */
/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  UTCTime
 * ```
 */
export type Time = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION Time */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Time */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Time */

/* START_OF_SYMBOL_DEFINITION _decode_Time */
export const _decode_Time = $._decodeUTCTime;
/* END_OF_SYMBOL_DEFINITION _decode_Time */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Time */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Time */

/* START_OF_SYMBOL_DEFINITION _encode_Time */
export const _encode_Time = $._encodeUTCTime;

/* END_OF_SYMBOL_DEFINITION _encode_Time */

/* eslint-enable */
