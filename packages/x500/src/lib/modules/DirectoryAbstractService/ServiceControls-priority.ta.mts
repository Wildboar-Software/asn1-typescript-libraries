/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ServiceControls_priority
 * @description
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
export const ServiceControls_priority_low: ServiceControls_priority = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_low
 * @constant
 * @type {number}
 */
export const low: ServiceControls_priority = ServiceControls_priority_low; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_medium
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_medium: ServiceControls_priority = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_medium
 * @constant
 * @type {number}
 */
export const medium: ServiceControls_priority = ServiceControls_priority_medium; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_high
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_high: ServiceControls_priority = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceControls_priority_high
 * @constant
 * @type {number}
 */
export const high: ServiceControls_priority = ServiceControls_priority_high; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ServiceControls_priority = $._decodeInteger;


export const _encode_ServiceControls_priority = $._encodeInteger;


/* eslint-enable */
