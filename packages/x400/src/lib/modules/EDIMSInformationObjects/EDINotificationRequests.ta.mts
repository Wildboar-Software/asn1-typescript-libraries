/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION EDINotificationRequests */
/**
 * @summary EDINotificationRequests
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDINotificationRequests  ::=  BIT STRING {pn(0), nn(1), fn(2)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type EDINotificationRequests = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION EDINotificationRequests */

/* START_OF_SYMBOL_DEFINITION EDINotificationRequests_pn */
/**
 * @summary EDINotificationRequests_pn
 * @constant
 */
export const EDINotificationRequests_pn: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationRequests_pn */

/* START_OF_SYMBOL_DEFINITION pn */
/**
 * @summary pn
 * @constant
 */
export const pn: number = EDINotificationRequests_pn; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION pn */

/* START_OF_SYMBOL_DEFINITION EDINotificationRequests_nn */
/**
 * @summary EDINotificationRequests_nn
 * @constant
 */
export const EDINotificationRequests_nn: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationRequests_nn */

/* START_OF_SYMBOL_DEFINITION nn */
/**
 * @summary nn
 * @constant
 */
export const nn: number = EDINotificationRequests_nn; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nn */

/* START_OF_SYMBOL_DEFINITION EDINotificationRequests_fn */
/**
 * @summary EDINotificationRequests_fn
 * @constant
 */
export const EDINotificationRequests_fn: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION EDINotificationRequests_fn */

/* START_OF_SYMBOL_DEFINITION fn */
/**
 * @summary fn
 * @constant
 */
export const fn: number = EDINotificationRequests_fn; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fn */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationRequests */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDINotificationRequests */

/* START_OF_SYMBOL_DEFINITION _decode_EDINotificationRequests */
export const _decode_EDINotificationRequests = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_EDINotificationRequests */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationRequests */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDINotificationRequests */

/* START_OF_SYMBOL_DEFINITION _encode_EDINotificationRequests */
export const _encode_EDINotificationRequests = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_EDINotificationRequests */

/* eslint-enable */
