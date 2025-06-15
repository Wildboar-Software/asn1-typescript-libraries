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

/* START_OF_SYMBOL_DEFINITION NotificationTimeField */
/**
 * @summary NotificationTimeField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationTimeField  ::=  UTCTime
 * ```
 */
export type NotificationTimeField = UTCTime; // UTCTime
/* END_OF_SYMBOL_DEFINITION NotificationTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationTimeField */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotificationTimeField */

/* START_OF_SYMBOL_DEFINITION _decode_NotificationTimeField */
export const _decode_NotificationTimeField = $._decodeUTCTime;
/* END_OF_SYMBOL_DEFINITION _decode_NotificationTimeField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationTimeField */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotificationTimeField */

/* START_OF_SYMBOL_DEFINITION _encode_NotificationTimeField */
export const _encode_NotificationTimeField = $._encodeUTCTime;

/* END_OF_SYMBOL_DEFINITION _encode_NotificationTimeField */

/* eslint-enable */
