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
 * @summary ProcessingState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProcessingState  ::=  INTEGER {
 *   idle(0), processed(1), rejected(2), name-resolution(3), dl-expansion(4),
 *   redirection(5), deferred-delivery(6), conversion(7), securityContextCheck(8),
 *   unknownFunction(9)}
 * ```
 */
export type ProcessingState = INTEGER;

/**
 * @summary ProcessingState_idle
 * @constant
 * @type {number}
 */
export const ProcessingState_idle: ProcessingState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_idle
 * @constant
 * @type {number}
 */
export const idle: ProcessingState = ProcessingState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_processed
 * @constant
 * @type {number}
 */
export const ProcessingState_processed: ProcessingState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_processed
 * @constant
 * @type {number}
 */
export const processed: ProcessingState = ProcessingState_processed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_rejected
 * @constant
 * @type {number}
 */
export const ProcessingState_rejected: ProcessingState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_rejected
 * @constant
 * @type {number}
 */
export const rejected: ProcessingState = ProcessingState_rejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_name_resolution
 * @constant
 * @type {number}
 */
export const ProcessingState_name_resolution: ProcessingState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_name_resolution
 * @constant
 * @type {number}
 */
export const name_resolution: ProcessingState = ProcessingState_name_resolution; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_dl_expansion
 * @constant
 * @type {number}
 */
export const ProcessingState_dl_expansion: ProcessingState = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_dl_expansion
 * @constant
 * @type {number}
 */
export const dl_expansion: ProcessingState = ProcessingState_dl_expansion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_redirection
 * @constant
 * @type {number}
 */
export const ProcessingState_redirection: ProcessingState = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_redirection
 * @constant
 * @type {number}
 */
export const redirection: ProcessingState = ProcessingState_redirection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_deferred_delivery
 * @constant
 * @type {number}
 */
export const ProcessingState_deferred_delivery: ProcessingState = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_deferred_delivery
 * @constant
 * @type {number}
 */
export const deferred_delivery: ProcessingState = ProcessingState_deferred_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_conversion
 * @constant
 * @type {number}
 */
export const ProcessingState_conversion: ProcessingState = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_conversion
 * @constant
 * @type {number}
 */
export const conversion: ProcessingState = ProcessingState_conversion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_securityContextCheck
 * @constant
 * @type {number}
 */
export const ProcessingState_securityContextCheck: ProcessingState = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_securityContextCheck
 * @constant
 * @type {number}
 */
export const securityContextCheck: ProcessingState = ProcessingState_securityContextCheck; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_unknownFunction
 * @constant
 * @type {number}
 */
export const ProcessingState_unknownFunction: ProcessingState = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_unknownFunction
 * @constant
 * @type {number}
 */
export const unknownFunction: ProcessingState = ProcessingState_unknownFunction; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ProcessingState = $._decodeInteger;


export const _encode_ProcessingState = $._encodeInteger;


/* eslint-enable */
