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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ReportSummary
 * @description
 *
 * This general-attribute, which is multi-valued, contains a summary of the reports
 * requested and reports received from each originally specified recipient of a submitted
 * message or probe. The attribute contains one value for each value of the recipient-name
 * argument of the Message-submission or Probe-submission abstract-operation. See ITU-T
 * X.413 (1999), §11.2.3.
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
 * ```
 *
 * @enum {number}
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
 * ```
 *
 * @enum {number}
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
 * ```
 *
 * @enum {number}
 */
export const ReportSummary = _enum_for_ReportSummary;

/**
 * @summary ReportSummary_no_report_requested
 * @constant
 * @type {number}
 */
export const ReportSummary_no_report_requested =
    ReportSummary.no_report_requested satisfies ReportSummary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_report_requested
 * @constant
 * @type {number}
 */
export const no_report_requested =
    ReportSummary.no_report_requested satisfies ReportSummary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_no_report_received
 * @constant
 * @type {number}
 */
export const ReportSummary_no_report_received =
    ReportSummary.no_report_received satisfies ReportSummary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_report_received
 * @constant
 * @type {number}
 */
export const no_report_received =
    ReportSummary.no_report_received satisfies ReportSummary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_report_outstanding
 * @constant
 * @type {number}
 */
export const ReportSummary_report_outstanding =
    ReportSummary.report_outstanding satisfies ReportSummary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary report_outstanding
 * @constant
 * @type {number}
 */
export const report_outstanding =
    ReportSummary.report_outstanding satisfies ReportSummary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_delivery_cancelled
 * @constant
 * @type {number}
 */
export const ReportSummary_delivery_cancelled =
    ReportSummary.delivery_cancelled satisfies ReportSummary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_cancelled
 * @constant
 * @type {number}
 */
export const delivery_cancelled =
    ReportSummary.delivery_cancelled satisfies ReportSummary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_delivery_report_from_another_recipient =
    ReportSummary.delivery_report_from_another_recipient satisfies ReportSummary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const delivery_report_from_another_recipient =
    ReportSummary.delivery_report_from_another_recipient satisfies ReportSummary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_non_delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_non_delivery_report_from_another_recipient =
    ReportSummary.non_delivery_report_from_another_recipient satisfies ReportSummary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_delivery_report_from_another_recipient
 * @constant
 * @type {number}
 */
export const non_delivery_report_from_another_recipient =
    ReportSummary.non_delivery_report_from_another_recipient satisfies ReportSummary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_delivery_report_from_intended_recipient =
    ReportSummary.delivery_report_from_intended_recipient satisfies ReportSummary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const delivery_report_from_intended_recipient =
    ReportSummary.delivery_report_from_intended_recipient satisfies ReportSummary; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportSummary_non_delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const ReportSummary_non_delivery_report_from_intended_recipient =
    ReportSummary.non_delivery_report_from_intended_recipient satisfies ReportSummary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_delivery_report_from_intended_recipient
 * @constant
 * @type {number}
 */
export const non_delivery_report_from_intended_recipient =
    ReportSummary.non_delivery_report_from_intended_recipient satisfies ReportSummary; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_ReportSummary(el: _Element): ReportSummary {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ReportSummary.no_report_requested: return ReportSummary.no_report_requested;
        case ReportSummary.no_report_received: return ReportSummary.no_report_received;
        case ReportSummary.report_outstanding: return ReportSummary.report_outstanding;
        case ReportSummary.delivery_cancelled: return ReportSummary.delivery_cancelled;
        case ReportSummary.delivery_report_from_another_recipient: return ReportSummary.delivery_report_from_another_recipient;
        case ReportSummary.non_delivery_report_from_another_recipient: return ReportSummary.non_delivery_report_from_another_recipient;
        case ReportSummary.delivery_report_from_intended_recipient: return ReportSummary.delivery_report_from_intended_recipient;
        case ReportSummary.non_delivery_report_from_intended_recipient: return ReportSummary.non_delivery_report_from_intended_recipient;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ReportSummary.',
                el,
            );
    }
}


export const _encode_ReportSummary: $.ASN1Encoder<ReportSummary> = $._encodeEnumerated as $.ASN1Encoder<ReportSummary>;


/* eslint-enable */
