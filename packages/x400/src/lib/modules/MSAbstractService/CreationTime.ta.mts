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

/* START_OF_SYMBOL_DEFINITION CreationTime */
/**
 * @summary CreationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreationTime  ::=  UTCTime
 * ```
 */
export type CreationTime = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION CreationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreationTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreationTime */

/* START_OF_SYMBOL_DEFINITION _decode_CreationTime */
export const _decode_CreationTime = $._decodeUTCTime;
/* END_OF_SYMBOL_DEFINITION _decode_CreationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreationTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreationTime */

/* START_OF_SYMBOL_DEFINITION _encode_CreationTime */
export const _encode_CreationTime = $._encodeUTCTime;

/* END_OF_SYMBOL_DEFINITION _encode_CreationTime */

/* eslint-enable */
