/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagnosticScheduleStatusReport_specific
 * @description
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
 * @constant
 * @type {number}
 */
export
const DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode: DiagnosticScheduleStatusReport_specific = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode
 * @constant
 * @type {number}
 */
export
const notSupportedInThisDeliveryMode: DiagnosticScheduleStatusReport_specific = DiagnosticScheduleStatusReport_specific_notSupportedInThisDeliveryMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_alreadyStopped
 * @constant
 * @type {number}
 */
export
const DiagnosticScheduleStatusReport_specific_alreadyStopped: DiagnosticScheduleStatusReport_specific = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_alreadyStopped
 * @constant
 * @type {number}
 */
export
const alreadyStopped: DiagnosticScheduleStatusReport_specific = DiagnosticScheduleStatusReport_specific_alreadyStopped; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_invalidReportingCycle
 * @constant
 * @type {number}
 */
export
const DiagnosticScheduleStatusReport_specific_invalidReportingCycle: DiagnosticScheduleStatusReport_specific = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagnosticScheduleStatusReport_specific_invalidReportingCycle
 * @constant
 * @type {number}
 */
export
const invalidReportingCycle: DiagnosticScheduleStatusReport_specific = DiagnosticScheduleStatusReport_specific_invalidReportingCycle; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DiagnosticScheduleStatusReport_specific: $.ASN1Decoder<DiagnosticScheduleStatusReport_specific> = $._decodeInteger;
export const _encode_DiagnosticScheduleStatusReport_specific: $.ASN1Encoder<DiagnosticScheduleStatusReport_specific> = $._encodeInteger;


/* eslint-enable */
