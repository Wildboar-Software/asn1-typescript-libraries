/* eslint-disable */
import {
    type INTEGER,
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
 * @summary OperationStatus
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
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
export const OperationStatus_in_progress: 0 = 0 satisfies OperationStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_in_progress
 * @constant
 * @type {number}
 */
export const in_progress: 0 = OperationStatus_in_progress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_ok
 * @constant
 * @type {number}
 */
export const OperationStatus_ok: 1 = 1 satisfies OperationStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_ok
 * @constant
 * @type {number}
 */
export const ok: 1 = OperationStatus_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_error
 * @constant
 * @type {number}
 */
export const OperationStatus_error: 2 = 2 satisfies OperationStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OperationStatus_error
 * @constant
 * @type {number}
 */
export const error: 2 = OperationStatus_error; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_OperationStatus: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_OperationStatus: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
