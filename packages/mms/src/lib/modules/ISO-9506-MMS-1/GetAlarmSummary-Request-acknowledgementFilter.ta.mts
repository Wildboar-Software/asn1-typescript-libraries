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
 * @summary GetAlarmSummary_Request_acknowledgementFilter
 * @description
 *
 * Filter GetAlarmSummary by enrollment acknowledgement
 * status. Unacknowledged: `&ackState` is `noAckI` or
 * `noAckA`. Acknowledged: `&ackState` is `acked`.
 *
 * [ISO 9506-1:2003 §18.5.1.1.3]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAlarmSummary-Request-acknowledgementFilter ::= INTEGER {
 *     not-acked (0),
 *     acked (1),
 *     all (2)
 * } (0..2)
 * ```
 */
export
type GetAlarmSummary_Request_acknowledgementFilter = INTEGER;

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_not_acked
 * @description
 *
 * Report only monitored conditions that reference at least
 * one unacknowledged Event Enrollment.
 *
 * [ISO 9506-1:2003 §18.5.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const GetAlarmSummary_Request_acknowledgementFilter_not_acked: GetAlarmSummary_Request_acknowledgementFilter = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_not_acked
 * @description
 *
 * Short name of
 * {@link GetAlarmSummary_Request_acknowledgementFilter_not_acked}.
 *
 * [ISO 9506-1:2003 §18.5.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const not_acked: GetAlarmSummary_Request_acknowledgementFilter = GetAlarmSummary_Request_acknowledgementFilter_not_acked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_acked
 * @description
 *
 * Report only monitored conditions whose referenced
 * enrollments are all acknowledged.
 *
 * [ISO 9506-1:2003 §18.5.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const GetAlarmSummary_Request_acknowledgementFilter_acked: GetAlarmSummary_Request_acknowledgementFilter = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_acked
 * @description
 *
 * Short name of
 * {@link GetAlarmSummary_Request_acknowledgementFilter_acked}.
 *
 * [ISO 9506-1:2003 §18.5.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const acked: GetAlarmSummary_Request_acknowledgementFilter = GetAlarmSummary_Request_acknowledgementFilter_acked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_all
 * @description
 *
 * Report monitored conditions without regard to enrollment
 * acknowledgement status.
 *
 * [ISO 9506-1:2003 §18.5.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const GetAlarmSummary_Request_acknowledgementFilter_all: GetAlarmSummary_Request_acknowledgementFilter = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary GetAlarmSummary_Request_acknowledgementFilter_all
 * @description
 *
 * Short name of
 * {@link GetAlarmSummary_Request_acknowledgementFilter_all}.
 *
 * [ISO 9506-1:2003 §18.5.1.1.3]
 *
 * @constant
 * @type {number}
 */
export
const all: GetAlarmSummary_Request_acknowledgementFilter = GetAlarmSummary_Request_acknowledgementFilter_all; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_GetAlarmSummary_Request_acknowledgementFilter = $._decodeInteger;
export const _encode_GetAlarmSummary_Request_acknowledgementFilter = $._encodeInteger;


/* eslint-enable */
