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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter
 * @description
 *
 * Filter GetAlarmEnrollmentSummary by enrollment
 * `&ackState`. Unacknowledged: `noAckI` or `noAckA`.
 * Acknowledged: `acked`.
 *
 * [ISO 9506-1:2003 §18.6.1.1.3]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAlarmEnrollmentSummary-Request-acknowledgementFilter ::= INTEGER {
 *     not-acked (0),
 *     acked (1),
 *     all (2)
 * } (0..2)
 * ```
 */
export
type GetAlarmEnrollmentSummary_Request_acknowledgementFilter = INTEGER;

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked
 * @description
 *
 * Report only unacknowledged notification enrollments
 * (`&ackState` is `noAckI` or `noAckA`).
 *
 * [ISO 9506-1:2003 §18.6.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked
 * @description
 *
 * Short name of
 * {@link GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked}.
 *
 * [ISO 9506-1:2003 §18.6.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const not_acked: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = GetAlarmEnrollmentSummary_Request_acknowledgementFilter_not_acked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked
 * @description
 *
 * Report only acknowledged notification enrollments
 * (`&ackState` is `acked`).
 *
 * [ISO 9506-1:2003 §18.6.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked
 * @description
 *
 * Short name of
 * {@link GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked}.
 *
 * [ISO 9506-1:2003 §18.6.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const acked: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = GetAlarmEnrollmentSummary_Request_acknowledgementFilter_acked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all
 * @description
 *
 * Report notification enrollments without regard to
 * acknowledgement status.
 *
 * [ISO 9506-1:2003 §18.6.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all
 * @description
 *
 * Short name of
 * {@link GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all}.
 *
 * [ISO 9506-1:2003 §18.6.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const all: GetAlarmEnrollmentSummary_Request_acknowledgementFilter = GetAlarmEnrollmentSummary_Request_acknowledgementFilter_all; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter = $._decodeInteger;
export const _encode_GetAlarmEnrollmentSummary_Request_acknowledgementFilter = $._encodeInteger;


/* eslint-enable */
