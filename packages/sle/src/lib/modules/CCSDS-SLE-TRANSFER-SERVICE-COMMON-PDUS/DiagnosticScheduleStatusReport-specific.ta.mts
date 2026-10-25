/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticScheduleStatusReport_specific
 * @description
 * 
 * SCHEDULE-STATUS-REPORT diagnostics other than duplicate invoke-ID and other
 * reason. Annex A2.3 notes that `notSupportedInThisDeliveryMode` is not used
 * for version 1 forward transfer services. Section 3.8 defines the RAF
 * conditions.
 * 
 * CCSDS 911.1-B-5, section 3.8.2.8 and annex A2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagnosticScheduleStatusReport-specific ::= INTEGER
 *    { notSupportedInThisDeliveryMode      (0)   -- not used for
 *                                                -- version 1 forward transfer
 *                                                -- services
 *    ,     alreadyStopped                  (1)
 *    ,     invalidReportingCycle           (2)
 *    }
 * ```
 */
export
type DiagnosticScheduleStatusReport_specific = INTEGER;

/**
 * @summary DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode
 * @description
 * 
 * The service instance is configured for offline delivery. Annex A2.3 states
 * that this code is not used for version 1 forward transfer services.
 * 
 * CCSDS 911.1-B-5, sections 3.8.2.8, 3.8.1.6, and annex A2.3.
 * @constant
 * @type {number}
 */
export
const DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode: 0 = 0 satisfies DiagnosticScheduleStatusReport_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode
 * @description
 * 
 * Offline delivery rejects schedule-status-report (CCSDS 911.1-B-5, section
 * 3.8.1.6).
 * @constant
 * @type {number}
 */
export
const notSupportedInThisDeliveryMode: 0 = DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_alreadyStopped
 * @description
 * 
 * The provider is not currently providing periodic reports. This applies only
 * when report-request-type is `stop`.
 * 
 * CCSDS 911.1-B-5, section 3.8.2.8.
 * @constant
 * @type {number}
 */
export
const DiagnosticScheduleStatusReport_specific_alreadyStopped: 1 = 1 satisfies DiagnosticScheduleStatusReport_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_alreadyStopped
 * @description
 * 
 * Periodic reports are already stopped and the request is `stop` (CCSDS
 * 911.1-B-5, section 3.8.2.8).
 * @constant
 * @type {number}
 */
export
const alreadyStopped: 1 = DiagnosticScheduleStatusReport_specific_alreadyStopped; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_invalidReportingCycle
 * @description
 * 
 * The requested reporting cycle is outside the range agreed by SLE Complex
 * Management and SLE Utilization Management. The lowest value the user may
 * request is the managed minimum-reporting-cycle.
 * 
 * CCSDS 911.1-B-5, section 3.8.2.8 and table 3-11.
 * @constant
 * @type {number}
 */
export
const DiagnosticScheduleStatusReport_specific_invalidReportingCycle: 2 = 2 satisfies DiagnosticScheduleStatusReport_specific; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_invalidReportingCycle
 * @description
 * 
 * The reporting cycle is outside the agreed range (CCSDS 911.1-B-5, section
 * 3.8.2.8).
 * @constant
 * @type {number}
 */
export
const invalidReportingCycle: 2 = DiagnosticScheduleStatusReport_specific_invalidReportingCycle; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticScheduleStatusReport_specific: $.ASN1Decoder<DiagnosticScheduleStatusReport_specific> = $._decodeInteger;
export const _encode_DiagnosticScheduleStatusReport_specific: $.ASN1Encoder<DiagnosticScheduleStatusReport_specific> = $._encodeInteger;


/* eslint-enable */
