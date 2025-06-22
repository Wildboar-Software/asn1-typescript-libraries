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
 * @summary DLPolicy_priority
 * @description
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
export const DLPolicy_priority_unchanged: DLPolicy_priority = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_priority = DLPolicy_priority_unchanged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_normal
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_normal: DLPolicy_priority = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_normal
 * @constant
 * @type {number}
 */
export const normal: DLPolicy_priority = DLPolicy_priority_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_non_urgent
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_non_urgent: DLPolicy_priority = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_non_urgent
 * @constant
 * @type {number}
 */
export const non_urgent: DLPolicy_priority = DLPolicy_priority_non_urgent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_urgent
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_urgent: DLPolicy_priority = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_urgent
 * @constant
 * @type {number}
 */
export const urgent: DLPolicy_priority = DLPolicy_priority_urgent; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DLPolicy_priority = $._decodeInteger;


export const _encode_DLPolicy_priority = $._encodeInteger;


/* eslint-enable */
