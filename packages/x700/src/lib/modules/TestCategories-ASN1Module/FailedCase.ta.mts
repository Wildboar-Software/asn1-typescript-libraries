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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary FailedCase
 * @description
 *
 * Enumerated failure kinds in A.7: line disconnected, or
 * error-counter overflow. The rec does not assign this type to a
 * clause-8 attribute or to a test-info/result field. ITU-T Rec.
 * X.737 (11/95) [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I).
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
 * Enumerated failure kinds in A.7: line disconnected, or
 * error-counter overflow. The rec does not assign this type to a
 * clause-8 attribute or to a test-info/result field. ITU-T Rec.
 * X.737 (11/95) [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I).
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
 * Enumerated failure kinds in A.7: line disconnected, or
 * error-counter overflow. The rec does not assign this type to a
 * clause-8 attribute or to a test-info/result field. ITU-T Rec.
 * X.737 (11/95) [A.7](https://www.itu.int/rec/T-REC-X.737-199511-I).
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
 * @description
 *
 * Line disconnected (0). X.737 A.7.
 * @constant
 * @type {number}
 */
export const FailedCase_lineDisconnected: FailedCase =
    FailedCase.lineDisconnected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lineDisconnected
 * @description
 *
 * Line disconnected (0). X.737 A.7.
 * @constant
 * @type {number}
 */
export const lineDisconnected: FailedCase =
    FailedCase.lineDisconnected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FailedCase_counterOverflow
 * @description
 *
 * Error-counter overflow (1). X.737 A.7 comment.
 * @constant
 * @type {number}
 */
export const FailedCase_counterOverflow: FailedCase =
    FailedCase.counterOverflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary counterOverflow
 * @description
 *
 * Error-counter overflow (1). X.737 A.7 comment.
 * @constant
 * @type {number}
 */
export const counterOverflow: FailedCase =
    FailedCase.counterOverflow; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_FailedCase = $._decodeEnumerated;


export const _encode_FailedCase = $._encodeEnumerated;


/* eslint-enable */
