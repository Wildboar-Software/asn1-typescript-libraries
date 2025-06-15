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

/**
 * @summary QOSErrorCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QOSErrorCause  ::=  INTEGER {
 *   responseTimeExcessive(0), queueSizeExceeded(1), bandwidthReduced(2),
 *   retransmissionRateExcessive(3)}
 * ```
 */
export type QOSErrorCause = INTEGER;

/**
 * @summary QOSErrorCause_responseTimeExcessive
 * @constant
 * @type {number}
 */
export const QOSErrorCause_responseTimeExcessive: QOSErrorCause = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary QOSErrorCause_responseTimeExcessive
 * @constant
 * @type {number}
 */
export const responseTimeExcessive: QOSErrorCause = QOSErrorCause_responseTimeExcessive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary QOSErrorCause_queueSizeExceeded
 * @constant
 * @type {number}
 */
export const QOSErrorCause_queueSizeExceeded: QOSErrorCause = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary QOSErrorCause_queueSizeExceeded
 * @constant
 * @type {number}
 */
export const queueSizeExceeded: QOSErrorCause = QOSErrorCause_queueSizeExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary QOSErrorCause_bandwidthReduced
 * @constant
 * @type {number}
 */
export const QOSErrorCause_bandwidthReduced: QOSErrorCause = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary QOSErrorCause_bandwidthReduced
 * @constant
 * @type {number}
 */
export const bandwidthReduced: QOSErrorCause = QOSErrorCause_bandwidthReduced; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary QOSErrorCause_retransmissionRateExcessive
 * @constant
 * @type {number}
 */
export const QOSErrorCause_retransmissionRateExcessive: QOSErrorCause = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary QOSErrorCause_retransmissionRateExcessive
 * @constant
 * @type {number}
 */
export const retransmissionRateExcessive: QOSErrorCause = QOSErrorCause_retransmissionRateExcessive; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_QOSErrorCause = $._decodeInteger;


export const _encode_QOSErrorCause = $._encodeInteger;


/* eslint-enable */
