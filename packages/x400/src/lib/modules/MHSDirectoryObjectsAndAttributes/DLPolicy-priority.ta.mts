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
 * @summary DLPolicy_priority
 * @description
 *
 * Defined in ITU-T X.402 (1999) (§17 / Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-priority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_priority = INTEGER;

/**
 * @summary DLPolicy_priority_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_unchanged = 0 satisfies DLPolicy_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_unchanged
 * @constant
 * @type {number}
 */
export const unchanged = DLPolicy_priority_unchanged satisfies DLPolicy_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_normal
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_normal = 1 satisfies DLPolicy_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_normal
 * @constant
 * @type {number}
 */
export const normal = DLPolicy_priority_normal satisfies DLPolicy_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_non_urgent
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_non_urgent = 2 satisfies DLPolicy_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_non_urgent
 * @constant
 * @type {number}
 */
export const non_urgent = DLPolicy_priority_non_urgent satisfies DLPolicy_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_urgent
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_urgent = 3 satisfies DLPolicy_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_urgent
 * @constant
 * @type {number}
 */
export const urgent = DLPolicy_priority_urgent satisfies DLPolicy_priority; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DLPolicy_priority = $._decodeInteger;


export const _encode_DLPolicy_priority = $._encodeInteger;


/* eslint-enable */
