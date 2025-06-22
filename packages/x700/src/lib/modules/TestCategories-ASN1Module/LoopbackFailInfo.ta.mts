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
import * as $ from '@wildboar/asn1/functional';

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

/**
 * @summary LoopbackFailInfo_errorRatioThresholdExceeded
 * @constant
 * @type {number}
 */
export const LoopbackFailInfo_errorRatioThresholdExceeded: LoopbackFailInfo = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoopbackFailInfo_errorRatioThresholdExceeded
 * @constant
 * @type {number}
 */
export const errorRatioThresholdExceeded: LoopbackFailInfo = LoopbackFailInfo_errorRatioThresholdExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoopbackFailInfo_loopbackTimeoutExceeded
 * @constant
 * @type {number}
 */
export const LoopbackFailInfo_loopbackTimeoutExceeded: LoopbackFailInfo = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoopbackFailInfo_loopbackTimeoutExceeded
 * @constant
 * @type {number}
 */
export const loopbackTimeoutExceeded: LoopbackFailInfo = LoopbackFailInfo_loopbackTimeoutExceeded; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_LoopbackFailInfo = $._decodeInteger;


export const _encode_LoopbackFailInfo = $._encodeInteger;


/* eslint-enable */
