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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary IncompleteScan
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncompleteScan  ::=  INTEGER {sizeExceeded(0), timeExceeded(1), other(2)}
 * ```
 */
export type IncompleteScan = INTEGER;

/**
 * @summary IncompleteScan_sizeExceeded
 * @constant
 * @type {number}
 */
export const IncompleteScan_sizeExceeded: IncompleteScan = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_sizeExceeded
 * @constant
 * @type {number}
 */
export const sizeExceeded: IncompleteScan = IncompleteScan_sizeExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_timeExceeded
 * @constant
 * @type {number}
 */
export const IncompleteScan_timeExceeded: IncompleteScan = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_timeExceeded
 * @constant
 * @type {number}
 */
export const timeExceeded: IncompleteScan = IncompleteScan_timeExceeded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_other
 * @constant
 * @type {number}
 */
export const IncompleteScan_other: IncompleteScan = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncompleteScan_other
 * @constant
 * @type {number}
 */
export const other: IncompleteScan = IncompleteScan_other; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_IncompleteScan = $._decodeInteger;


export const _encode_IncompleteScan = $._encodeInteger;


/* eslint-enable */
