/* eslint-disable */
import {
    INTEGER,
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
 * @summary EnvelopeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopeType  ::=  INTEGER {
 *   message-delivery-envelope(0), message-submission-envelope(1),
 *   message-transfer-envelope(2), probe-submission-envelope(3),
 *   probe-transfer-envelope(4), report-delivery-envelope(5),
 *   report-transfer-envelope(6)}
 * ```
 */
export type EnvelopeType = INTEGER;

/**
 * @summary EnvelopeType_message_delivery_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_message_delivery_envelope: EnvelopeType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_message_delivery_envelope
 * @constant
 * @type {number}
 */
export const message_delivery_envelope: EnvelopeType = EnvelopeType_message_delivery_envelope; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_message_submission_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_message_submission_envelope: EnvelopeType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_message_submission_envelope
 * @constant
 * @type {number}
 */
export const message_submission_envelope: EnvelopeType = EnvelopeType_message_submission_envelope; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_message_transfer_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_message_transfer_envelope: EnvelopeType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_message_transfer_envelope
 * @constant
 * @type {number}
 */
export const message_transfer_envelope: EnvelopeType = EnvelopeType_message_transfer_envelope; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_probe_submission_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_probe_submission_envelope: EnvelopeType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_probe_submission_envelope
 * @constant
 * @type {number}
 */
export const probe_submission_envelope: EnvelopeType = EnvelopeType_probe_submission_envelope; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_probe_transfer_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_probe_transfer_envelope: EnvelopeType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_probe_transfer_envelope
 * @constant
 * @type {number}
 */
export const probe_transfer_envelope: EnvelopeType = EnvelopeType_probe_transfer_envelope; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_report_delivery_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_report_delivery_envelope: EnvelopeType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_report_delivery_envelope
 * @constant
 * @type {number}
 */
export const report_delivery_envelope: EnvelopeType = EnvelopeType_report_delivery_envelope; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_report_transfer_envelope
 * @constant
 * @type {number}
 */
export const EnvelopeType_report_transfer_envelope: EnvelopeType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EnvelopeType_report_transfer_envelope
 * @constant
 * @type {number}
 */
export const report_transfer_envelope: EnvelopeType = EnvelopeType_report_transfer_envelope; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_EnvelopeType = $._decodeInteger;


export const _encode_EnvelopeType = $._encodeInteger;


/* eslint-enable */
