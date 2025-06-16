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
 * @summary ReportingEvent
 * @description
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
 * @constant
 * @type {number}
 */
export const ReportingEvent_registration: ReportingEvent =
    ReportingEvent.registration; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registration
 * @constant
 * @type {number}
 */
export const registration: ReportingEvent =
    ReportingEvent.registration; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_request
 * @constant
 * @type {number}
 */
export const ReportingEvent_request: ReportingEvent =
    ReportingEvent.request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @constant
 * @type {number}
 */
export const request: ReportingEvent =
    ReportingEvent.request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_accept
 * @constant
 * @type {number}
 */
export const ReportingEvent_accept: ReportingEvent =
    ReportingEvent.accept; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accept
 * @constant
 * @type {number}
 */
export const accept: ReportingEvent =
    ReportingEvent.accept; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_complete
 * @constant
 * @type {number}
 */
export const ReportingEvent_complete: ReportingEvent =
    ReportingEvent.complete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary complete
 * @constant
 * @type {number}
 */
export const complete: ReportingEvent =
    ReportingEvent.complete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_corresponding
 * @constant
 * @type {number}
 */
export const ReportingEvent_corresponding: ReportingEvent =
    ReportingEvent.corresponding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary corresponding
 * @constant
 * @type {number}
 */
export const corresponding: ReportingEvent =
    ReportingEvent.corresponding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_bulk
 * @constant
 * @type {number}
 */
export const ReportingEvent_bulk: ReportingEvent =
    ReportingEvent.bulk; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bulk
 * @constant
 * @type {number}
 */
export const bulk: ReportingEvent =
    ReportingEvent.bulk; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReportingEvent_interruption
 * @constant
 * @type {number}
 */
export const ReportingEvent_interruption: ReportingEvent =
    ReportingEvent.interruption; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary interruption
 * @constant
 * @type {number}
 */
export const interruption: ReportingEvent =
    ReportingEvent.interruption; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ReportingEvent = $._decodeEnumerated;


export const _encode_ReportingEvent = $._encodeEnumerated;


/* eslint-enable */
