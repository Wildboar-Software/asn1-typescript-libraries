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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary OperationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationStatus  ::=  INTEGER {in-progress(0), ok(1), error(2)}
 * ```
 */
export type OperationStatus = INTEGER;

/**
 * @summary OperationStatus_in_progress
 * @constant
 * @type {number}
 */
export const OperationStatus_in_progress: OperationStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_in_progress
 * @constant
 * @type {number}
 */
export const in_progress: OperationStatus = OperationStatus_in_progress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_ok
 * @constant
 * @type {number}
 */
export const OperationStatus_ok: OperationStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_ok
 * @constant
 * @type {number}
 */
export const ok: OperationStatus = OperationStatus_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_error
 * @constant
 * @type {number}
 */
export const OperationStatus_error: OperationStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_error
 * @constant
 * @type {number}
 */
export const error: OperationStatus = OperationStatus_error; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_OperationStatus = $._decodeInteger;


export const _encode_OperationStatus = $._encodeInteger;


/* eslint-enable */
