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

/* START_OF_SYMBOL_DEFINITION ExpiryTimeField */
/**
 * @summary ExpiryTimeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpiryTimeField  ::=  UTCTime
 * ```
 */
export type ExpiryTimeField = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION ExpiryTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpiryTimeField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpiryTimeField */

/* START_OF_SYMBOL_DEFINITION _decode_ExpiryTimeField */
export const _decode_ExpiryTimeField = $._decodeUTCTime;
/* END_OF_SYMBOL_DEFINITION _decode_ExpiryTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpiryTimeField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpiryTimeField */

/* START_OF_SYMBOL_DEFINITION _encode_ExpiryTimeField */
export const _encode_ExpiryTimeField = $._encodeUTCTime;

/* END_OF_SYMBOL_DEFINITION _encode_ExpiryTimeField */

/* eslint-enable */
