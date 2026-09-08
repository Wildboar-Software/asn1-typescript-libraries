/* eslint-disable */
import {
    BIT_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlarmSurveillanceFunctionalUnits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmSurveillanceFunctionalUnits  ::=  BIT STRING {
 *   as-kernel(0), as-alarm-retrieval(1), as-basic-arc(2), as-enhanced-arc(3),
 *   as-cur-alm-sum-reporting(4), as-basic-mos(5), as-enhanced-mos(6),
 *   as-cur-alm-sum-control(7), as-cur-alm-sum-retrieval(8),
 *   as-basic-log-control(9), as-enhanced-log-control(10), as-alarm-deletion(11),
 *   as-alarm-event-criteria(12), as-alarm-indication(13), as-alarm-synch(14),
 *   as-alarm-synch-cancel(15)}
 * ```
 */
export
type AlarmSurveillanceFunctionalUnits = BIT_STRING;

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_kernel
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_kernel: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary as_kernel
 * @constant
 */
export
const as_kernel: number = AlarmSurveillanceFunctionalUnits_as_kernel; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_alarm_retrieval
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_alarm_retrieval: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary as_alarm_retrieval
 * @constant
 */
export
const as_alarm_retrieval: number = AlarmSurveillanceFunctionalUnits_as_alarm_retrieval; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_basic_arc
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_basic_arc: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary as_basic_arc
 * @constant
 */
export
const as_basic_arc: number = AlarmSurveillanceFunctionalUnits_as_basic_arc; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_enhanced_arc
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_enhanced_arc: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary as_enhanced_arc
 * @constant
 */
export
const as_enhanced_arc: number = AlarmSurveillanceFunctionalUnits_as_enhanced_arc; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_cur_alm_sum_reporting
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_cur_alm_sum_reporting: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary as_cur_alm_sum_reporting
 * @constant
 */
export
const as_cur_alm_sum_reporting: number = AlarmSurveillanceFunctionalUnits_as_cur_alm_sum_reporting; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_basic_mos
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_basic_mos: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary as_basic_mos
 * @constant
 */
export
const as_basic_mos: number = AlarmSurveillanceFunctionalUnits_as_basic_mos; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_enhanced_mos
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_enhanced_mos: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary as_enhanced_mos
 * @constant
 */
export
const as_enhanced_mos: number = AlarmSurveillanceFunctionalUnits_as_enhanced_mos; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_cur_alm_sum_control
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_cur_alm_sum_control: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary as_cur_alm_sum_control
 * @constant
 */
export
const as_cur_alm_sum_control: number = AlarmSurveillanceFunctionalUnits_as_cur_alm_sum_control; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_cur_alm_sum_retrieval
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_cur_alm_sum_retrieval: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary as_cur_alm_sum_retrieval
 * @constant
 */
export
const as_cur_alm_sum_retrieval: number = AlarmSurveillanceFunctionalUnits_as_cur_alm_sum_retrieval; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_basic_log_control
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_basic_log_control: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary as_basic_log_control
 * @constant
 */
export
const as_basic_log_control: number = AlarmSurveillanceFunctionalUnits_as_basic_log_control; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_enhanced_log_control
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_enhanced_log_control: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary as_enhanced_log_control
 * @constant
 */
export
const as_enhanced_log_control: number = AlarmSurveillanceFunctionalUnits_as_enhanced_log_control; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_alarm_deletion
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_alarm_deletion: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary as_alarm_deletion
 * @constant
 */
export
const as_alarm_deletion: number = AlarmSurveillanceFunctionalUnits_as_alarm_deletion; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_alarm_event_criteria
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_alarm_event_criteria: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary as_alarm_event_criteria
 * @constant
 */
export
const as_alarm_event_criteria: number = AlarmSurveillanceFunctionalUnits_as_alarm_event_criteria; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_alarm_indication
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_alarm_indication: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary as_alarm_indication
 * @constant
 */
export
const as_alarm_indication: number = AlarmSurveillanceFunctionalUnits_as_alarm_indication; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_alarm_synch
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_alarm_synch: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary as_alarm_synch
 * @constant
 */
export
const as_alarm_synch: number = AlarmSurveillanceFunctionalUnits_as_alarm_synch; /* SHORT_NAMED_BIT */

/**
 * @summary AlarmSurveillanceFunctionalUnits_as_alarm_synch_cancel
 * @constant
 */
export
const AlarmSurveillanceFunctionalUnits_as_alarm_synch_cancel: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary as_alarm_synch_cancel
 * @constant
 */
export
const as_alarm_synch_cancel: number = AlarmSurveillanceFunctionalUnits_as_alarm_synch_cancel; /* SHORT_NAMED_BIT */
export const _decode_AlarmSurveillanceFunctionalUnits = $._decodeBitString;
export const _encode_AlarmSurveillanceFunctionalUnits = $._encodeBitString;


/* eslint-enable */
