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

/* START_OF_SYMBOL_DEFINITION DeletionTime */
/**
 * @summary DeletionTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeletionTime  ::=  UTCTime
 * ```
 */
export type DeletionTime = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION DeletionTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeletionTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeletionTime */

/* START_OF_SYMBOL_DEFINITION _decode_DeletionTime */
export const _decode_DeletionTime = $._decodeUTCTime;
/* END_OF_SYMBOL_DEFINITION _decode_DeletionTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeletionTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeletionTime */

/* START_OF_SYMBOL_DEFINITION _encode_DeletionTime */
export const _encode_DeletionTime = $._encodeUTCTime;

/* END_OF_SYMBOL_DEFINITION _encode_DeletionTime */

/* eslint-enable */
