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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReportSemaphoreEntryStatus_Request_state
 * @description
 *
 * Semaphore-entry state to report. `queued` (0) waiting;
 * `owner` (1) in control with AA up; `hung` (2) in control after
 * AA lost and `relinquishIfLost` was false. ISO 9506-1:2003
 * §16.1.3.9, §16.8.1.1.2. ISO 9506-2:2003 §16.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportSemaphoreEntryStatus-Request-state ::= INTEGER {
 *     queued (0),
 *     owner (1),
 *     hung (2)
 * } (0..2)
 * ```
 */
export
type ReportSemaphoreEntryStatus_Request_state = INTEGER;

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_queued
 * @description
 *
 * Waiting in `&Requesters`. ISO 9506-1:2003 §16.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreEntryStatus_Request_state_queued: ReportSemaphoreEntryStatus_Request_state = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_queued
 * @description
 *
 * Waiting in `&Requesters`. ISO 9506-1:2003 §16.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const queued: ReportSemaphoreEntryStatus_Request_state = ReportSemaphoreEntryStatus_Request_state_queued; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_owner
 * @description
 *
 * In `&Owners` with the association still up. ISO 9506-1:2003
 * §16.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreEntryStatus_Request_state_owner: ReportSemaphoreEntryStatus_Request_state = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_owner
 * @description
 *
 * In `&Owners` with the association still up. ISO 9506-1:2003
 * §16.1.3.9.
 *
 * @constant
 * @type {number}
 */
export
const owner: ReportSemaphoreEntryStatus_Request_state = ReportSemaphoreEntryStatus_Request_state_owner; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_hung
 * @description
 *
 * In `&Owners` after the association was lost and
 * `relinquishIfLost` was false. Recover via preempt TakeControl.
 * ISO 9506-1:2003 §16.1.3.9, §16.1.4.
 *
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreEntryStatus_Request_state_hung: ReportSemaphoreEntryStatus_Request_state = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_hung
 * @description
 *
 * In `&Owners` after the association was lost and
 * `relinquishIfLost` was false. Recover via preempt TakeControl.
 * ISO 9506-1:2003 §16.1.3.9, §16.1.4.
 *
 * @constant
 * @type {number}
 */
export
const hung: ReportSemaphoreEntryStatus_Request_state = ReportSemaphoreEntryStatus_Request_state_hung; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ReportSemaphoreEntryStatus_Request_state = $._decodeInteger;
export const _encode_ReportSemaphoreEntryStatus_Request_state = $._encodeInteger;


/* eslint-enable */
