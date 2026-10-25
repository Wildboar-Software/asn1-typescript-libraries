/* eslint-disable */
import {
    type ASN1Element as _Element,
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
const ReportCondition_statusReport = ReportCondition.statusReport satisfies ReportCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary statusReport
 * @constant
 * @type {number}
 */
export
const statusReport = ReportCondition.statusReport satisfies ReportCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportCondition_timerExpired
 * @constant
 * @type {number}
 */
export
const ReportCondition_timerExpired = ReportCondition.timerExpired satisfies ReportCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary timerExpired
 * @constant
 * @type {number}
 */
export
const timerExpired = ReportCondition.timerExpired satisfies ReportCondition; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportCondition_cancelled
 * @constant
 * @type {number}
 */
export
const ReportCondition_cancelled = ReportCondition.cancelled satisfies ReportCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancelled
 * @constant
 * @type {number}
 */
export
const cancelled = ReportCondition.cancelled satisfies ReportCondition; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReportCondition = $._decodeEnumerated;
export const _encode_ReportCondition = $._encodeEnumerated;


/* eslint-enable */
