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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary ReportSummary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportSummary  ::=  ENUMERATED {
 *   no-report-requested(0) -- non-delivery report suppressed --,
 *   no-report-received(1) -- non-delivery report requested --,
 *   report-outstanding(2) -- delivery report requested --, delivery-cancelled(3),
 *   delivery-report-from-another-recipient(4),
 *   non-delivery-report-from-another-recipient(5),
 *   delivery-report-from-intended-recipient(6),
 *   non-delivery-report-from-intended-recipient(7)}
 * ```@enum {number}
 */
export enum _enum_for_ReportSummary {
    no_report_requested = 0,
    no_report_received = 1,
    report_outstanding = 2,
    delivery_cancelled = 3,
    delivery_report_from_another_recipient = 4,
    non_delivery_report_from_another_recipient = 5,
    delivery_report_from_intended_recipient = 6,
    non_delivery_report_from_intended_recipient = 7,
}

/**
 * @summary ReportSummary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportSummary  ::=  ENUMERATED {
 *   no-report-requested(0) -- non-delivery report suppressed --,
 *   no-report-received(1) -- non-delivery report requested --,
 *   report-outstanding(2) -- delivery report requested --, delivery-cancelled(3),
 *   delivery-report-from-another-recipient(4),
 *   non-delivery-report-from-another-recipient(5),
 *   delivery-report-from-intended-recipient(6),
 *   non-delivery-report-from-intended-recipient(7)}
 * ```@enum {number}
 */
export type ReportSummary = _enum_for_ReportSummary;

/**
 * @summary ReportSummary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportSummary  ::=  ENUMERATED {
 *   no-report-requested(0) -- non-delivery report suppressed --,
 *   no-report-received(1) -- non-delivery report requested --,
 *   report-outstanding(2) -- delivery report requested --, delivery-cancelled(3),
 *   delivery-report-from-another-recipient(4),
 *   non-delivery-report-from-another-recipient(5),
 *   delivery-report-from-intended-recipient(6),
 *   non-delivery-report-from-intended-recipient(7)}
 * ```@enum {number}
 */
export const ReportSummary = _enum_for_ReportSummary;

/**
 * @summary ReportSummary_no_report_requested
 * @constant
 * @type {number}
 */
export const ReportSummary_no_report_requested: ReportSummary =
    ReportSummary.no_report_requested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_report_requested
 * @constant
 * @type {number}
 */
export const no_report_requested: ReportSummary =
    ReportSummary.no_report_requested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_no_report_received
 * @constant
 * @type {number}
 */
export const ReportSummary_no_report_received: ReportSummary =
    ReportSummary.no_report_received; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_report_received
 * @constant
 * @type {number}
 */
export const no_report_received: ReportSummary =
    ReportSummary.no_report_received; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_report_outstanding
 * @constant
 * @type {number}
 */
export const ReportSummary_report_outstanding: ReportSummary =
    ReportSummary.report_outstanding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary report_outstanding
 * @constant
 * @type {number}
 */
export const report_outstanding: ReportSummary =
    ReportSummary.report_outstanding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_delivery_cancelled
 * @constant
 * @type {number}
 */
export const ReportSummary_delivery_cancelled: ReportSummary =
    ReportSummary.delivery_cancelled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_cancelled
 * @constant
 * @type {number}
 */
export const delivery_cancelled: ReportSummary =
    ReportSummary.delivery_cancelled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_delivery_report_from_another_recipient: ReportSummary =
    ReportSummary.delivery_report_from_another_recipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const delivery_report_from_another_recipient: ReportSummary =
    ReportSummary.delivery_report_from_another_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_non_delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_non_delivery_report_from_another_recipient: ReportSummary =
    ReportSummary.non_delivery_report_from_another_recipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const non_delivery_report_from_another_recipient: ReportSummary =
    ReportSummary.non_delivery_report_from_another_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_delivery_report_from_intended_recipient: ReportSummary =
    ReportSummary.delivery_report_from_intended_recipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const delivery_report_from_intended_recipient: ReportSummary =
    ReportSummary.delivery_report_from_intended_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_non_delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_non_delivery_report_from_intended_recipient: ReportSummary =
    ReportSummary.non_delivery_report_from_intended_recipient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const non_delivery_report_from_intended_recipient: ReportSummary =
    ReportSummary.non_delivery_report_from_intended_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ReportSummary = $._decodeEnumerated;


export const _encode_ReportSummary = $._encodeEnumerated;


/* eslint-enable */
