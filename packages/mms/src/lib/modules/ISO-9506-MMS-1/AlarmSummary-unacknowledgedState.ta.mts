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
 * @summary AlarmSummary_unacknowledgedState
 * @description
 *
 * Acknowledgement status of Event Enrollments that reference
 * this Event Condition, for GetAlarmSummary.
 *
 * [ISO 9506-1:2003 §18.5.1.2.1.5]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmSummary-unacknowledgedState ::= INTEGER {
 *     none (0),
 *     active (1),
 *     idle (2),
 *     both (3)
 * } (0..3)
 * ```
 */
export
type AlarmSummary_unacknowledgedState = INTEGER;

/**
 * @summary AlarmSummary_unacknowledgedState_none
 * @description
 *
 * No Event Enrollment has an acknowledgement outstanding.
 *
 * [ISO 9506-1:2003 §18.5.1.2.1.5]
 *
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_none: AlarmSummary_unacknowledgedState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_none
 * @description
 *
 * Short name of {@link AlarmSummary_unacknowledgedState_none}.
 *
 * [ISO 9506-1:2003 §18.5.1.2.1.5]
 *
 * @constant
 * @type {number}
 */
export
const none: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_active
 * @description
 *
 * At least one enrollment has an outstanding ack for the
 * most recent transition to `active`.
 *
 * [ISO 9506-1:2003 §18.5.1.2.1.5]
 *
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_active: AlarmSummary_unacknowledgedState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_active
 * @description
 *
 * Short name of {@link AlarmSummary_unacknowledgedState_active}.
 *
 * [ISO 9506-1:2003 §18.5.1.2.1.5]
 *
 * @constant
 * @type {number}
 */
export
const active: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_idle
 * @description
 *
 * At least one enrollment has an outstanding ack for the
 * most recent transition to `idle`.
 *
 * [ISO 9506-1:2003 §18.5.1.2.1.5]
 *
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_idle: AlarmSummary_unacknowledgedState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_idle
 * @description
 *
 * Short name of {@link AlarmSummary_unacknowledgedState_idle}.
 *
 * [ISO 9506-1:2003 §18.5.1.2.1.5]
 *
 * @constant
 * @type {number}
 */
export
const idle: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_both
 * @description
 *
 * Outstanding acks for both the most recent `active` and
 * `idle` transitions (on one or more enrollments).
 *
 * [ISO 9506-1:2003 §18.5.1.2.1.5]
 *
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_both: AlarmSummary_unacknowledgedState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_both
 * @description
 *
 * Short name of {@link AlarmSummary_unacknowledgedState_both}.
 *
 * [ISO 9506-1:2003 §18.5.1.2.1.5]
 *
 * @constant
 * @type {number}
 */
export
const both: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_both; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AlarmSummary_unacknowledgedState = $._decodeInteger;
export const _encode_AlarmSummary_unacknowledgedState = $._encodeInteger;


/* eslint-enable */
