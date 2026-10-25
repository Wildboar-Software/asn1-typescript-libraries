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
 * @summary ProcessingState
 * @description
 *
 * Defined in ITU-T X.411 (1999) (MTA managed objects).
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
export const ProcessingState_idle: 0 = 0 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_idle
 * @constant
 * @type {number}
 */
export const idle: 0 = ProcessingState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_processed
 * @constant
 * @type {number}
 */
export const ProcessingState_processed: 1 = 1 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_processed
 * @constant
 * @type {number}
 */
export const processed: 1 = ProcessingState_processed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_rejected
 * @constant
 * @type {number}
 */
export const ProcessingState_rejected: 2 = 2 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_rejected
 * @constant
 * @type {number}
 */
export const rejected: 2 = ProcessingState_rejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_name_resolution
 * @constant
 * @type {number}
 */
export const ProcessingState_name_resolution: 3 = 3 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_name_resolution
 * @constant
 * @type {number}
 */
export const name_resolution: 3 = ProcessingState_name_resolution; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_dl_expansion
 * @constant
 * @type {number}
 */
export const ProcessingState_dl_expansion: 4 = 4 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_dl_expansion
 * @constant
 * @type {number}
 */
export const dl_expansion: 4 = ProcessingState_dl_expansion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_redirection
 * @constant
 * @type {number}
 */
export const ProcessingState_redirection: 5 = 5 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_redirection
 * @constant
 * @type {number}
 */
export const redirection: 5 = ProcessingState_redirection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_deferred_delivery
 * @constant
 * @type {number}
 */
export const ProcessingState_deferred_delivery: 6 = 6 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_deferred_delivery
 * @constant
 * @type {number}
 */
export const deferred_delivery: 6 = ProcessingState_deferred_delivery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_conversion
 * @constant
 * @type {number}
 */
export const ProcessingState_conversion: 7 = 7 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_conversion
 * @constant
 * @type {number}
 */
export const conversion: 7 = ProcessingState_conversion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_securityContextCheck
 * @constant
 * @type {number}
 */
export const ProcessingState_securityContextCheck: 8 = 8 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_securityContextCheck
 * @constant
 * @type {number}
 */
export const securityContextCheck: 8 = ProcessingState_securityContextCheck; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_unknownFunction
 * @constant
 * @type {number}
 */
export const ProcessingState_unknownFunction: 9 = 9 satisfies ProcessingState; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingState_unknownFunction
 * @constant
 * @type {number}
 */
export const unknownFunction: 9 = ProcessingState_unknownFunction; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ProcessingState: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ProcessingState: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
