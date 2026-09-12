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
 * @summary ReportSemaphoreStatus_Response_class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportSemaphoreStatus-Response-class ::= INTEGER {
 *     token (0),
 *     pool (1)
 * } (0..1)
 * ```
 */
export
type ReportSemaphoreStatus_Response_class = INTEGER;

/**
 * @summary ReportSemaphoreStatus_Response_class_token
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreStatus_Response_class_token: ReportSemaphoreStatus_Response_class = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreStatus_Response_class_token
 * @constant
 * @type {number}
 */
export
const token: ReportSemaphoreStatus_Response_class = ReportSemaphoreStatus_Response_class_token; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreStatus_Response_class_pool
 * @constant
 * @type {number}
 */
export
const ReportSemaphoreStatus_Response_class_pool: ReportSemaphoreStatus_Response_class = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReportSemaphoreStatus_Response_class_pool
 * @constant
 * @type {number}
 */
export
const pool: ReportSemaphoreStatus_Response_class = ReportSemaphoreStatus_Response_class_pool; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ReportSemaphoreStatus_Response_class = (el: _Element): ReportSemaphoreStatus_Response_class => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 1) {
        throw new ASN1OverflowError("ReportSemaphoreStatus_Response_class violates INTEGER range constraint");
    }
    return value;
};
export const _encode_ReportSemaphoreStatus_Response_class = $._encodeInteger;


/* eslint-enable */
