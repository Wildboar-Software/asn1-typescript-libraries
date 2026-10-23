/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReportCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportCondition  ::=  ENUMERATED {statusReport(0), timerExpired(1), canceled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReportCondition {
    statusReport = 0,
    timerExpired = 1,
    canceled = 2,
}

/**
 * @summary ReportCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportCondition  ::=  ENUMERATED {statusReport(0), timerExpired(1), canceled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReportCondition = _enum_for_ReportCondition;

/**
 * @summary ReportCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportCondition  ::=  ENUMERATED {statusReport(0), timerExpired(1), canceled(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReportCondition = _enum_for_ReportCondition;

/**
 * @summary ReportCondition_statusReport
 * @constant
 * @type {number}
 */
export
const ReportCondition_statusReport: ReportCondition = ReportCondition.statusReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusReport
 * @constant
 * @type {number}
 */
export
const statusReport: ReportCondition = ReportCondition.statusReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportCondition_timerExpired
 * @constant
 * @type {number}
 */
export
const ReportCondition_timerExpired: ReportCondition = ReportCondition.timerExpired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpired
 * @constant
 * @type {number}
 */
export
const timerExpired: ReportCondition = ReportCondition.timerExpired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportCondition_canceled
 * @constant
 * @type {number}
 */
export
const ReportCondition_canceled: ReportCondition = ReportCondition.canceled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary canceled
 * @constant
 * @type {number}
 */
export
const canceled: ReportCondition = ReportCondition.canceled; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ReportCondition: $.ASN1Decoder<ReportCondition> = $._decodeEnumerated;

export
const _encode_ReportCondition: $.ASN1Encoder<ReportCondition> = $._encodeEnumerated;

/* eslint-enable */
