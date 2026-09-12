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
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreEntryStatus_Request_state_queued: ReportSemaphoreEntryStatus_Request_state = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_queued
 * @constant
 * @type {number}
 */
export
const queued: ReportSemaphoreEntryStatus_Request_state = ReportSemaphoreEntryStatus_Request_state_queued; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_owner
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreEntryStatus_Request_state_owner: ReportSemaphoreEntryStatus_Request_state = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_owner
 * @constant
 * @type {number}
 */
export
const owner: ReportSemaphoreEntryStatus_Request_state = ReportSemaphoreEntryStatus_Request_state_owner; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_hung
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreEntryStatus_Request_state_hung: ReportSemaphoreEntryStatus_Request_state = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreEntryStatus_Request_state_hung
 * @constant
 * @type {number}
 */
export
const hung: ReportSemaphoreEntryStatus_Request_state = ReportSemaphoreEntryStatus_Request_state_hung; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ReportSemaphoreEntryStatus_Request_state = (el: _Element): ReportSemaphoreEntryStatus_Request_state => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 2) {
        throw new ASN1OverflowError("ReportSemaphoreEntryStatus_Request_state violates INTEGER range constraint");
    }
    return value;
};
export const _encode_ReportSemaphoreEntryStatus_Request_state = $._encodeInteger;


/* eslint-enable */
