/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReportCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportCondition  ::=  ENUMERATED {statusReport(0), timerExpired(1), cancelled(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReportCondition {
    statusReport = 0,
    timerExpired = 1,
    cancelled = 2,
}

/**
 * @summary ReportCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportCondition  ::=  ENUMERATED {statusReport(0), timerExpired(1), cancelled(2)}
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
 * ReportCondition  ::=  ENUMERATED {statusReport(0), timerExpired(1), cancelled(2)}
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
 * @summary ReportCondition_cancelled
 * @constant
 * @type {number}
 */
export
const ReportCondition_cancelled: ReportCondition = ReportCondition.cancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @constant
 * @type {number}
 */
export
const cancelled: ReportCondition = ReportCondition.cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReportCondition = $._decodeEnumerated;
export const _encode_ReportCondition = $._encodeEnumerated;


/* eslint-enable */
