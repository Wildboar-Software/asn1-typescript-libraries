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
 * @summary QOSErrorCause
 * @description
 *
 * GDMO example (X.722 Annex A, not a production SM function).
 * Syntax of the example `qOS-Error-Cause` attribute: reason
 * for a quality-of-service failure associated with the
 * managed object. Named values: `responseTimeExcessive` (0),
 * `queueSizeExceeded` (1), `bandwidthReduced` (2),
 * `retransmissionRateExcessive` (3). How these values relate
 * to object operation is defined by the class behaviour.
 * ITU-T Rec. X.722 (01/92)
 * [A.5](https://www.itu.int/rec/T-REC-X.722-199201-I), A.9,
 * A.10.
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
