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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary Operations
 * @description
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
 * @constant
 */
export const Operations_probe_submission_or_report_delivery: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary probe_submission_or_report_delivery
 * @constant
 */
export const probe_submission_or_report_delivery: number = Operations_probe_submission_or_report_delivery; /* SHORT_NAMED_BIT */

/**
 * @summary Operations_message_submission_or_message_delivery
 * @constant
 */
export const Operations_message_submission_or_message_delivery: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary message_submission_or_message_delivery
 * @constant
 */
export const message_submission_or_message_delivery: number = Operations_message_submission_or_message_delivery; /* SHORT_NAMED_BIT */


export const _decode_Operations = $._decodeBitString;


export const _encode_Operations = $._encodeBitString;


/* eslint-enable */
