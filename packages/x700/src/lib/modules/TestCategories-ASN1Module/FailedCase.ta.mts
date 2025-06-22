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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary FailedCase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FailedCase  ::=  ENUMERATED {lineDisconnected(0), counterOverflow(1)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_FailedCase {
    lineDisconnected = 0,
    counterOverflow = 1,
}

/**
 * @summary FailedCase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FailedCase  ::=  ENUMERATED {lineDisconnected(0), counterOverflow(1)
 * }
 * ```
 *
 * @enum {number}
 */
export type FailedCase = _enum_for_FailedCase;

/**
 * @summary FailedCase
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FailedCase  ::=  ENUMERATED {lineDisconnected(0), counterOverflow(1)
 * }
 * ```
 *
 * @enum {number}
 */
export const FailedCase = _enum_for_FailedCase;

/**
 * @summary FailedCase_lineDisconnected
 * @constant
 * @type {number}
 */
export const FailedCase_lineDisconnected: FailedCase =
    FailedCase.lineDisconnected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lineDisconnected
 * @constant
 * @type {number}
 */
export const lineDisconnected: FailedCase =
    FailedCase.lineDisconnected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailedCase_counterOverflow
 * @constant
 * @type {number}
 */
export const FailedCase_counterOverflow: FailedCase =
    FailedCase.counterOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary counterOverflow
 * @constant
 * @type {number}
 */
export const counterOverflow: FailedCase =
    FailedCase.counterOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_FailedCase = $._decodeEnumerated;


export const _encode_FailedCase = $._encodeEnumerated;


/* eslint-enable */
