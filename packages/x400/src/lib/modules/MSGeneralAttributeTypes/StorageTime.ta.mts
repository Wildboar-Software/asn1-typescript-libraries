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

/* START_OF_SYMBOL_DEFINITION StorageTime */
/**
 * @summary StorageTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StorageTime  ::=  UTCTime
 * ```
 */
export type StorageTime = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION StorageTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StorageTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StorageTime */

/* START_OF_SYMBOL_DEFINITION _decode_StorageTime */
export const _decode_StorageTime = $._decodeUTCTime;
/* END_OF_SYMBOL_DEFINITION _decode_StorageTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StorageTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StorageTime */

/* START_OF_SYMBOL_DEFINITION _encode_StorageTime */
export const _encode_StorageTime = $._encodeUTCTime;

/* END_OF_SYMBOL_DEFINITION _encode_StorageTime */

/* eslint-enable */
