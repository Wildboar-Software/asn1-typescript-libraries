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
export const DLPolicy_priority_unchanged: 0 = 0 satisfies DLPolicy_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_unchanged
 * @constant
 * @type {number}
 */
export const unchanged: 0 = DLPolicy_priority_unchanged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_normal
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_normal: 1 = 1 satisfies DLPolicy_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_normal
 * @constant
 * @type {number}
 */
export const normal: 1 = DLPolicy_priority_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_non_urgent
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_non_urgent: 2 = 2 satisfies DLPolicy_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_non_urgent
 * @constant
 * @type {number}
 */
export const non_urgent: 2 = DLPolicy_priority_non_urgent; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_urgent
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_urgent: 3 = 3 satisfies DLPolicy_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DLPolicy_priority_urgent
 * @constant
 * @type {number}
 */
export const urgent: 3 = DLPolicy_priority_urgent; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_DLPolicy_priority: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_DLPolicy_priority: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
