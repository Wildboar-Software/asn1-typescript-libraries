/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceControls_priority
 * @description
 *
 * DEFAULT `medium` on ServiceControls. Not a guaranteed queue; no
 * relationship to lower-layer priority.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceControls-priority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ServiceControls_priority = INTEGER;

/**
 * @summary ServiceControls_priority_low
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_low: 0 = 0 satisfies ServiceControls_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_low
 * @constant
 * @type {number}
 */
export const low: 0 = ServiceControls_priority_low; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_medium
 * @description
 *
 * DEFAULT. Not a guaranteed queue.
 *
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_medium: 1 = 1 satisfies ServiceControls_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_medium
 * @description
 *
 * DEFAULT. Not a guaranteed queue.
 *
 * @constant
 * @type {number}
 */
export const medium: 1 = ServiceControls_priority_medium; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_high
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_high: 2 = 2 satisfies ServiceControls_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_high
 * @constant
 * @type {number}
 */
export const high: 2 = ServiceControls_priority_high; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ServiceControls_priority: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_ServiceControls_priority: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
