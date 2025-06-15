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

/* START_OF_SYMBOL_DEFINITION DeferredDeliveryCancellationTime */
/**
 * @summary DeferredDeliveryCancellationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeferredDeliveryCancellationTime  ::=  UTCTime
 * ```
 */
export type DeferredDeliveryCancellationTime = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeferredDeliveryCancellationTime */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _decode_DeferredDeliveryCancellationTime */
export const _decode_DeferredDeliveryCancellationTime = $._decodeUTCTime;
/* END_OF_SYMBOL_DEFINITION _decode_DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeferredDeliveryCancellationTime */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeferredDeliveryCancellationTime */

/* START_OF_SYMBOL_DEFINITION _encode_DeferredDeliveryCancellationTime */
export const _encode_DeferredDeliveryCancellationTime = $._encodeUTCTime;

/* END_OF_SYMBOL_DEFINITION _encode_DeferredDeliveryCancellationTime */

/* eslint-enable */
