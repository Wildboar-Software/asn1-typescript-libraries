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

/* START_OF_SYMBOL_DEFINITION LoopbackFailInfo */
/**
 * @summary LoopbackFailInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackFailInfo  ::=  INTEGER {
 *   errorRatioThresholdExceeded(0), loopbackTimeoutExceeded(1)}
 * ```
 */
export type LoopbackFailInfo = INTEGER;
/* END_OF_SYMBOL_DEFINITION LoopbackFailInfo */

/* START_OF_SYMBOL_DEFINITION LoopbackFailInfo_errorRatioThresholdExceeded */
/**
 * @summary LoopbackFailInfo_errorRatioThresholdExceeded
 * @constant
 * @type {number}
 */
export const LoopbackFailInfo_errorRatioThresholdExceeded: LoopbackFailInfo = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackFailInfo_errorRatioThresholdExceeded */

/* START_OF_SYMBOL_DEFINITION errorRatioThresholdExceeded */
/**
 * @summary LoopbackFailInfo_errorRatioThresholdExceeded
 * @constant
 * @type {number}
 */
export const errorRatioThresholdExceeded: LoopbackFailInfo = LoopbackFailInfo_errorRatioThresholdExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION errorRatioThresholdExceeded */

/* START_OF_SYMBOL_DEFINITION LoopbackFailInfo_loopbackTimeoutExceeded */
/**
 * @summary LoopbackFailInfo_loopbackTimeoutExceeded
 * @constant
 * @type {number}
 */
export const LoopbackFailInfo_loopbackTimeoutExceeded: LoopbackFailInfo = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LoopbackFailInfo_loopbackTimeoutExceeded */

/* START_OF_SYMBOL_DEFINITION loopbackTimeoutExceeded */
/**
 * @summary LoopbackFailInfo_loopbackTimeoutExceeded
 * @constant
 * @type {number}
 */
export const loopbackTimeoutExceeded: LoopbackFailInfo = LoopbackFailInfo_loopbackTimeoutExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION loopbackTimeoutExceeded */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackFailInfo */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackFailInfo */

/* START_OF_SYMBOL_DEFINITION _decode_LoopbackFailInfo */
export const _decode_LoopbackFailInfo = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_LoopbackFailInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackFailInfo */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackFailInfo */

/* START_OF_SYMBOL_DEFINITION _encode_LoopbackFailInfo */
export const _encode_LoopbackFailInfo = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_LoopbackFailInfo */

/* eslint-enable */
