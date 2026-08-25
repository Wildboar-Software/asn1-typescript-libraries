/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
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
 * @summary Operations
 * @description
 *
 * Used as `permissible-operations` on Submission-control and Delivery-control, and as
 * `waiting-operations` in their results (ITU-T X.411 (1999), §8.2.1.4 and §8.3.1.3). On
 * the submission port bit 0 is probe-submission and bit 1 is message-submission; on the
 * delivery port the same bits are report-delivery and message-delivery. For
 * waiting-operations, one means holding and zero means not-holding. Other port operations
 * are not subject to these controls.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Operations  ::=  BIT STRING {
 *   probe-submission-or-report-delivery(0),
 *   message-submission-or-message-delivery(1)}(SIZE (0..ub-bit-options))
 * ```
 */
export type Operations = BIT_STRING;

/**
 * @summary Operations_probe_submission_or_report_delivery
 * @description
 *
 * Submission-control: Probe-submission. Delivery-control: Report-delivery. For
 * waiting-operations, one means holding.
 *
 * @constant
 */
export const Operations_probe_submission_or_report_delivery: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary probe_submission_or_report_delivery
 * @description
 *
 * Submission-control: Probe-submission. Delivery-control: Report-delivery. For
 * waiting-operations, one means holding.
 *
 * @constant
 */
export const probe_submission_or_report_delivery: number = Operations_probe_submission_or_report_delivery; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_message_submission_or_message_delivery
 * @description
 *
 * Submission-control: Message-submission. Delivery-control: Message-delivery. For
 * waiting-operations, one means holding.
 *
 * @constant
 */
export const Operations_message_submission_or_message_delivery: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary message_submission_or_message_delivery
 * @description
 *
 * Submission-control: Message-submission. Delivery-control: Message-delivery. For
 * waiting-operations, one means holding.
 *
 * @constant
 */
export const message_submission_or_message_delivery: number = Operations_message_submission_or_message_delivery; /* SHORT_NAMED_BIT */


export const _decode_Operations = $._decodeBitString;


export const _encode_Operations = $._encodeBitString;


/* eslint-enable */
