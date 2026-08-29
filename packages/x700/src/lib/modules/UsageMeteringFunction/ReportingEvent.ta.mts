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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary ReportingEvent
 * @description
 *
 * Accountable events usable as reporting triggers and as
 * `NotificationCause.event`. A specialization assigns which
 * values apply and their exact meaning; `corresponding` and
 * `bulk` need not be used.
 *
 * - `registration` (0): requester detected by the provider
 *   (e.g. off-hook / dial tone). Present once in usage info.
 * - `request` (1): requester input (destination, account
 *   code, feature activation).
 * - `accept` (2): response to a request (distant end answers
 *   or a feature is activated; party may differ).
 * - `complete` (3): provided service ended.
 * - `corresponding` (4): correlate several usage records into
 *   one service transaction. At most once in usage info.
 * - `bulk` (5): usage measured independently of individual
 *   transactions (e.g. PVC volume).
 * - `interruption` (6): abnormal occurrence during metering
 *   (e.g. clock change) that may change charging.
 *
 * ITU-T Rec. X.742 (04/95)
 * [§8.2.3](https://www.itu.int/rec/T-REC-X.742-199504-I), A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingEvent  ::=  ENUMERATED {
 *   registration(0), request(1), accept(2), complete(3), corresponding(4),
 *   bulk(5), interruption(6)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ReportingEvent {
    registration = 0,
    request = 1,
    accept = 2,
    complete = 3,
    corresponding = 4,
    bulk = 5,
    interruption = 6,
}

/**
 * @summary ReportingEvent
 * @description
 *
 * Accountable events usable as reporting triggers and as
 * `NotificationCause.event`. A specialization assigns which
 * values apply and their exact meaning; `corresponding` and
 * `bulk` need not be used.
 *
 * - `registration` (0): requester detected by the provider
 *   (e.g. off-hook / dial tone). Present once in usage info.
 * - `request` (1): requester input (destination, account
 *   code, feature activation).
 * - `accept` (2): response to a request (distant end answers
 *   or a feature is activated; party may differ).
 * - `complete` (3): provided service ended.
 * - `corresponding` (4): correlate several usage records into
 *   one service transaction. At most once in usage info.
 * - `bulk` (5): usage measured independently of individual
 *   transactions (e.g. PVC volume).
 * - `interruption` (6): abnormal occurrence during metering
 *   (e.g. clock change) that may change charging.
 *
 * ITU-T Rec. X.742 (04/95)
 * [§8.2.3](https://www.itu.int/rec/T-REC-X.742-199504-I), A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingEvent  ::=  ENUMERATED {
 *   registration(0), request(1), accept(2), complete(3), corresponding(4),
 *   bulk(5), interruption(6)}
 * ```
 *
 * @enum {number}
 */
export type ReportingEvent = _enum_for_ReportingEvent;

/**
 * @summary ReportingEvent
 * @description
 *
 * Accountable events usable as reporting triggers and as
 * `NotificationCause.event`. A specialization assigns which
 * values apply and their exact meaning; `corresponding` and
 * `bulk` need not be used.
 *
 * - `registration` (0): requester detected by the provider
 *   (e.g. off-hook / dial tone). Present once in usage info.
 * - `request` (1): requester input (destination, account
 *   code, feature activation).
 * - `accept` (2): response to a request (distant end answers
 *   or a feature is activated; party may differ).
 * - `complete` (3): provided service ended.
 * - `corresponding` (4): correlate several usage records into
 *   one service transaction. At most once in usage info.
 * - `bulk` (5): usage measured independently of individual
 *   transactions (e.g. PVC volume).
 * - `interruption` (6): abnormal occurrence during metering
 *   (e.g. clock change) that may change charging.
 *
 * ITU-T Rec. X.742 (04/95)
 * [§8.2.3](https://www.itu.int/rec/T-REC-X.742-199504-I), A.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingEvent  ::=  ENUMERATED {
 *   registration(0), request(1), accept(2), complete(3), corresponding(4),
 *   bulk(5), interruption(6)}
 * ```
 *
 * @enum {number}
 */
export const ReportingEvent = _enum_for_ReportingEvent;

/**
 * @summary ReportingEvent_registration
 * @description
 *
 * Requester detected by the provider. ITU-T Rec. X.742 (04/95)
 * §8.2.3.1.
 *
 * @constant
 * @type {number}
 */
export const ReportingEvent_registration: ReportingEvent =
    ReportingEvent.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @description
 *
 * Requester detected by the provider. ITU-T Rec. X.742 (04/95)
 * §8.2.3.1.
 *
 * @constant
 * @type {number}
 */
export const registration: ReportingEvent =
    ReportingEvent.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_request
 * @description
 *
 * Requester input (destination, account code, feature). ITU-T
 * Rec. X.742 (04/95) §8.2.3.2.
 *
 * @constant
 * @type {number}
 */
export const ReportingEvent_request: ReportingEvent =
    ReportingEvent.request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @description
 *
 * Requester input (destination, account code, feature). ITU-T
 * Rec. X.742 (04/95) §8.2.3.2.
 *
 * @constant
 * @type {number}
 */
export const request: ReportingEvent =
    ReportingEvent.request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_accept
 * @description
 *
 * Response to a request (answer, feature activation). ITU-T
 * Rec. X.742 (04/95) §8.2.3.3.
 *
 * @constant
 * @type {number}
 */
export const ReportingEvent_accept: ReportingEvent =
    ReportingEvent.accept; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accept
 * @description
 *
 * Response to a request (answer, feature activation). ITU-T
 * Rec. X.742 (04/95) §8.2.3.3.
 *
 * @constant
 * @type {number}
 */
export const accept: ReportingEvent =
    ReportingEvent.accept; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_complete
 * @description
 *
 * Provided service ended. ITU-T Rec. X.742 (04/95) §8.2.3.4.
 *
 * @constant
 * @type {number}
 */
export const ReportingEvent_complete: ReportingEvent =
    ReportingEvent.complete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary complete
 * @description
 *
 * Provided service ended. ITU-T Rec. X.742 (04/95) §8.2.3.4.
 *
 * @constant
 * @type {number}
 */
export const complete: ReportingEvent =
    ReportingEvent.complete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_corresponding
 * @description
 *
 * Correlate several usage records into one service
 * transaction. ITU-T Rec. X.742 (04/95) §8.2.3.5.
 *
 * @constant
 * @type {number}
 */
export const ReportingEvent_corresponding: ReportingEvent =
    ReportingEvent.corresponding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary corresponding
 * @description
 *
 * Correlate several usage records into one service
 * transaction. ITU-T Rec. X.742 (04/95) §8.2.3.5.
 *
 * @constant
 * @type {number}
 */
export const corresponding: ReportingEvent =
    ReportingEvent.corresponding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_bulk
 * @description
 *
 * Usage measured independently of individual transactions.
 * ITU-T Rec. X.742 (04/95) §8.2.3.6.
 *
 * @constant
 * @type {number}
 */
export const ReportingEvent_bulk: ReportingEvent =
    ReportingEvent.bulk; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bulk
 * @description
 *
 * Usage measured independently of individual transactions.
 * ITU-T Rec. X.742 (04/95) §8.2.3.6.
 *
 * @constant
 * @type {number}
 */
export const bulk: ReportingEvent =
    ReportingEvent.bulk; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_interruption
 * @description
 *
 * Abnormal occurrence during metering that may change
 * charging. ITU-T Rec. X.742 (04/95) §8.2.3.7.
 *
 * @constant
 * @type {number}
 */
export const ReportingEvent_interruption: ReportingEvent =
    ReportingEvent.interruption; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruption
 * @description
 *
 * Abnormal occurrence during metering that may change
 * charging. ITU-T Rec. X.742 (04/95) §8.2.3.7.
 *
 * @constant
 * @type {number}
 */
export const interruption: ReportingEvent =
    ReportingEvent.interruption; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ReportingEvent = $._decodeEnumerated;


export const _encode_ReportingEvent = $._encodeEnumerated;


/* eslint-enable */
