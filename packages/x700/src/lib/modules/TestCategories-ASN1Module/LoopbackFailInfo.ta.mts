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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary LoopbackFailInfo
 * @description
 *
 * Why a loopback test failed: error-ratio threshold crossed,
 * or loopback time-out exceeded (returned data not seen in time).
 * Either causes Fail and implicit termination. Split out by Cor.1.
 * ITU-T Rec. X.737 (11/95)
 * [§7.4.8](https://www.itu.int/rec/T-REC-X.737-199511-I), §3.9.5;
 * Cor.1 (06/98) [https://www.itu.int/rec/T-REC-X.737-199806-I].
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
 * @description
 *
 * Error threshold crossed (0). Test outcome Fail. X.737 §7.4.8.
 * @constant
 * @type {number}
 */
export const LoopbackFailInfo_errorRatioThresholdExceeded: LoopbackFailInfo = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoopbackFailInfo_errorRatioThresholdExceeded
 * @description
 *
 * Error threshold crossed (0). Test outcome Fail. X.737 §7.4.8.
 * @constant
 * @type {number}
 */
export const errorRatioThresholdExceeded: LoopbackFailInfo = LoopbackFailInfo_errorRatioThresholdExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LoopbackFailInfo_loopbackTimeoutExceeded
 * @description
 *
 * Loopback time-out exceeded (1). Test outcome Fail. X.737 §7.4.2.2, §7.4.8.
 * @constant
 * @type {number}
 */
export const LoopbackFailInfo_loopbackTimeoutExceeded: LoopbackFailInfo = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LoopbackFailInfo_loopbackTimeoutExceeded
 * @description
 *
 * Loopback time-out exceeded (1). Test outcome Fail. X.737 §7.4.2.2, §7.4.8.
 * @constant
 * @type {number}
 */
export const loopbackTimeoutExceeded: LoopbackFailInfo = LoopbackFailInfo_loopbackTimeoutExceeded; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_LoopbackFailInfo = $._decodeInteger;


export const _encode_LoopbackFailInfo = $._encodeInteger;


/* eslint-enable */
